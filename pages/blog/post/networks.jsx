import Link from 'next/link'
import styles from '../Blog.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Networks = () => {
  return <div className={styles.post}>
  
  <Link href="/blog"><a>Go back</a></Link>
  <h1>Overview of Networked systems</h1>
  A computer network is a connection between two or more devices, or nodes, that
  allows each node to share data.
  <h2>Network topology</h2>
  Can be as simple as a single connection between two nodes os as complex as a 
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
  <h2>The transport Layer</h2>
  Transport layer protocol handle the transfer of data between two nodes. These
  protocol can help ensure data integrity by making sure that all data sent from 
  the origin completely and correctly makes its way to the destination will receive all.
  It does mean that TCP specifically will make sure the data received by the destination
  is in the correct order, without duplicate data or missing data.<br/>
  The primary transport layers are TCP and the User Datagram Protocol(UDP) and
  most of our network applications rely on the transport layer to handle the error 
  correction, flow control, retransmission, and transport acknowledgment of each
  segment.
  <h2>The Internet Layer</h2>
  Is responsible for routing packets of data from the upper layers between the
  origin node and the destination, often over multiple networks with heterogeneous
  physycal media. Plays an integral role in ensuring that the data we send reaches
  its destination, no matter the complexity between the origin and destination. <br/>
  Internet Protocol version 4(IPv4), IPv6, Border Gateway Protocol(BGP), Internet
  Control Message Protocol(ICMP), Internet Group Managment Protocol(IGMP), and the
  Internet Protocol Security(IPsec) suite, others, provide host identification and
  TCP/IP's internet layer.
  <h2>The Link layer</h2>
  The link layer which corresponds to layers 1 and 2 of the OSI reference model,
  is the interface between the core TCP/IP protocols and the physical media.<br/>
  The link layer's Address Resolution Protocol(ARP) translates a node's IP address to 
  the MAC address of its network interface.
   
<SyntaxHighlighter language="javascript" showLineNumbers={true}>
        {`include <stdio.h>
void main() {
}`}
    </SyntaxHighlighter>
</div>
}

export default Networks
