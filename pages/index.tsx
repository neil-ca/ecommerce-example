import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { BsTwitter } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin } from 'react-icons/ai'
import Nav from '../Nav'
import Image from 'next/image'


const Home: React.FC = () => {
  return (<>
    <Nav />
    <div className={styles.container}>
      <h1>Hello, I'm Neil 👋</h1>
      <p>I'm a software developer focus on backend living in México, who love solve
      problems and build things, enthusiast of the open source and disruptive
      technologies. On and ever upward</p>
    <div className={styles.me}>
      <Image src="/me.jpg" width="150" height="150"/>
    </div>

    <div className={styles.contact}>
      <Link href="https://github.com/ulicod3"><a target="_blank"><GoMarkGithub/></a></Link> 
      <Link href="https://www.linkedin.com/in/ulises-campos-9400441b5/"><a target="_blank"><AiFillLinkedin /></a></Link> 
      <Link href="https://twitter.com/ulicode"><a target="_blank"><BsTwitter/></a></Link> 
    </div>
    
    <p> I dont like fullstack term but spend most of my time as <strong>web developer</strong> doing
    backend, frontend and databases designs helping people grow their businesses </p>
    
    <p><strong>email:</strong> ulicode4@gmail.com</p>
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
  </>)
}

export default Home
