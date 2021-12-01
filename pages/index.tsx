import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { BsTwitter } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin } from 'react-icons/ai'
import Nav from '../Nav'
import Image from 'next/image'
import Card from '../Card'


const Home: React.FC = () => {
  return (<>
    <Nav />
    <div className={styles.container}>
      <h1>Hello, I'm Neil 👋</h1>
      <p>I'm a software developer focus on backend living in México, who love solve
      problems and build things, enthusiast of the open source and disruptive
      technologies. On and ever upward</p>
      
      <p> I dont like fullstack term but spend most of my time as <strong>web developer</strong> doing
    backend, frontend and databases designs helping people grow their businesses. </p>
    <div className={styles.me}>
      <Image src="/me.jpg" width="150" height="150"/>
    </div>

    <div className={styles.contact}>
      <Link href="https://github.com/ulicod3"><a target="_blank"><GoMarkGithub/></a></Link> 
      <Link href="https://www.linkedin.com/in/ulises-campos-9400441b5/"><a target="_blank"><AiFillLinkedin /></a></Link> 
      <Link href="https://twitter.com/ulicode"><a target="_blank"><BsTwitter/></a></Link> 
    </div>
    
    
    <p><strong>email:</strong> ulicode4@gmail.com</p>

    <div className={styles.skills}>
      
    <h3>Skills On 🔥</h3>
      <ul>
        <li>Java and Golang</li>
        <li>Javascript (react, node)</li>
        <li>Docker, Kubernates</li>
        <li>SQL(mysql, postgres, sqlite), NoSQL, Redis</li>
        <li>Linux - Networks and protocols, Nginx, Scale systems</li>
      </ul>
    <h3>Knowledge Interest 📚</h3>
    <ul>
      <li>Blockchain</li>
      <li>Software security</li>
      <li>Phylosophy and politics</li>
      <li>Maths</li>
    </ul>
    </div>

    <h2>Some Projects</h2>
      <div className={styles.projects}>
        
        <Card name="Trillo" link="https://ulicod3.github.io/Trillo/"
          linkSrc="https://github.com/ulicod3/Trillo/" imgSrc="/trillo.png">
          <p>Two web page static that shows reviews of hotels and selling luxury houses called
          <Link href="https://ulicod3.github.io/Nexter/"><a target="_blank"> Nexter </a></Link>
          which were build in scss putting in practice flexbox, grid and responsive design with media queries.
          I use BEM convention for the naming of tags</p>
        </Card>

        <div className={styles.each}>
         <h4>Tweeto </h4>
          <Image src="/go.png" width="350" height="200"/>
         <p>Full web app that pretend to be a twitter clone, has an API in Go
         with authentication of users and the follow system, the <a href="https://github.com/ulicod3/tweeto-client" target="_blank">
         client </a> is made in next js framework</p>
         <Link href="https://github.com/ulicod3/tweeto">
            <a target="_blank" className={styles.git}><GoMarkGithub/></a></Link>
        </div>

        <div className={styles.each}>
         <h4>Reddit</h4>
          <Image src="/reddit.png" width="350" height="200"/>
         <p>Full web app that pretend to be a reddit clone, using graphQL making easy 
         for the client fetch the data of the users and using postgres as database
         with some fake data for test the server</p>
         <Link href="https://github.com/ulicod3/graphql-react-typescript">
            <a target="_blank" className={styles.git}><GoMarkGithub/></a></Link>
        </div>
      </div>
  </div>
  </>)
}

export default Home
