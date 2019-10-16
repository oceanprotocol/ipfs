import React from 'react'
import { links } from '../../site.config'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div>
        © <span id="year">{year}</span>{' '}
        <a href="https://oceanprotocol.com">Ocean Protocol Foundation Ltd.</a> —
        All Rights Reserved
      </div>
      <div>
        {links.map(link => (
          <a key={link.name} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
