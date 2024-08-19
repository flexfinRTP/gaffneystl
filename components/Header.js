import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a className={styles.logo}>JD</a>
        </Link>
        <ul className={styles.navItems}>
          <li><Link href="#projects"><a>Projects</a></Link></li>
          <li><Link href="#about"><a>About</a></Link></li>
          <li><Link href="#contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}