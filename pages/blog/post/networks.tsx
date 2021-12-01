import Link from 'next/link'
const Networks:React.FC = () => {
  return <div>
  
  <Link href="/blog"><a>Go back</a></Link>
  <h1>Overview of Networked systems</h1>
  <p>A computer network is a connection between two or more devices, or nodes, that
  allows each node to share data.</p>
  <h2>Network topology</h2>
  <p>Can be as simple as a single connection between two nodes os as complex as a 
  layout of nodes that dont share a direct a direct connection but are nonethless 
  able to change data. <br/>Types: Point to point, daisy chain, bus, ring, star 
  and mesh; Real world networks are composed of 2 or more toplogy networks. <br/>
  Modern languages as Go's standar library has a rich ecosystem are well suited
  for writing secure, reliable network applications. Many times we heard about OSI
  model and the boundaries of them but most of the time we use the TCP/IP model
  and programming in the application layer which interacts directly with software 
  applications and when your web browser retrieves a web page, it reads from this 
  layer of the stack. <br/>
  This layer include HTTP, the File Transfer Protocol(FTP), SMTP for emails, Dynamic
  Host Configuration Protocol(DHCP) and the Domain Name System(DNS).
  </p>
  <h2>The transport Layer</h2>
  <p>Transport layer protocol handle the transfer of data between two nodes. These
  protocol can help ensure data integrity by making sure that all data sent from 
  the origin completely and correctly makes its way to the destination will receive all.
  It does mean that TCP specifically will make sure the data received by the destination
  is in the correct order, without duplicate data or missing data.<br/>
  The primary transport layers are TCP and the User Datagram Protocol(UDP) and
  most of our network applications rely on the transport layer to handle the error 
  correction, flow control, retransmission, and transport acknowledgment of each
  segment.</p>
    <pre>{`
package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"testing"
	"time"
)

type User struct {
    First string
    Last string
}

func handlePostUser(t *testing.T) func(http.ResponseWriter, *http.Request) {
    return func(w http.ResponseWriter, r *http.Request) {
        defer func(r io.ReadCloser) {
            _, _ = io.Copy(ioutil.Discard, r)
            _ = r.Close()
        }(r.Body)

        if r.Method != http.MethodPost {
            http.Error(w, "", http.StatusMethodNotAllowed)
            return
        }

        var u User
        err := json.NewDecoder(r.Body).Decode(&u)
        if err != nil {
            t.Error(err)
            http.Error(w, "decode dailed", http.StatusBadRequest)
            return
        }

        w.WriteHeader(http.StatusAccepted)
    }
}

func TestPostUser(t *testing.T) {
    ts := httptest.NewServer(http.HandlerFunc(handlePostUser(t)))
    defer ts.Close()

    resp, err := http.Get(ts.URL)
    if err != nil {
        t.Fatal(err)
    }
    if resp.StatusCode != http.StatusMethodNotAllowed {
        t.Fatalf("expected status %d; actual status %d", 
        http.StatusMethodNotAllowed, resp.StatusCode)
    }

    buf := new(bytes.Buffer)
    u := User{First: "Neil", Last: "Ulises"}
    err = json.NewEncoder(buf).Encode(&u)
    if err != nil {
        t.Fatal(err)
    }

    resp, err = http.Post(ts.URL, "application/json", buf)
    if err != nil {
        t.Fatal(err)
    }
    if resp.StatusCode != http.StatusAccepted {
        t.Fatalf("expected status %d; actual status %d",
        http.StatusAccepted, resp.StatusCode)
    } 
    _ = resp.Body.Close()
}

func TestMultiPartPost(t *testing.T) {
    reqBody := new(bytes.Buffer)
    w := multipart.NewWriter(reqBody)

    for k, v := range map[string]string {
        "date": time.Now().Format(time.RFC3339),
        "description": "Form values with attached files",
    } {
        err := w.WriteField(k, v)
        if err != nil {
            t.Fatal(err)
        }
    }
    for i, file := range []string {
        "./files/hello.txt",
        "./files/goodbye.txt",
    } {
        filePart, err := w.CreateFormFile(fmt.Sprintf("file%d", i+1), filepath.Base(file))
        if err != nil {
            t.Fatal(err)
        }

        f, err := os.Open(file)
        if err != nil {
            t.Fatal(err)
        }

        _, err = io.Copy(filePart, f)
        _ = f.Close()
        if err != nil {
            t.Fatal(err)
        }
    }

    err := w.Close()
    if err != nil { t.Fatal(err) }
    
    // posts the request
    ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
    defer cancel()

    req, err := http.NewRequestWithContext(ctx, http.MethodPost, "https://httpbin.org/post", reqBody)
    if err != nil { t.Fatal(err) }

    req.Header.Set("Content-Type", w.FormDataContentType())

    resp, err := http.DefaultClient.Do(req)
    if err != nil { t.Fatal(err) }
    defer func() { _ = resp.Body.Close() }()

    b, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        t.Fatal(err)
    }

    if resp.StatusCode != http.StatusOK {
        t.Fatalf("expected status %d; actual status %d", http.StatusOK, resp.StatusCode)
    }

    t.Logf("\n%s", b)
}
`}</pre>

  
  </div>
}
 export default Networks
