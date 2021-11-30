import Link from 'next/link'
import styles from './styles/Home.module.scss'
import Image from 'next/image'
import {ReactNode} from 'react'
import { GoMarkGithub } from 'react-icons/go'

interface Props {
  name: string
  link: string 
  linkSrc: string
  imgSrc: string
  children: ReactNode
}
const Card: React.FC<Props> = ({ name, link, linkSrc, imgSrc, children }) => {
  return (
    <div className={styles.each}>
      <h4>{name} <Link href={link}><a target="_blank">VIEW</a></Link></h4>
      <Image src={imgSrc} width="350" height="200"/>
        {children}
 
      <Link href={linkSrc}>
       <a target="_blank" className={styles.git}><GoMarkGithub/></a></Link>
    </div>
  )
}

export default Card
