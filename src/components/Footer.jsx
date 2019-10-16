import React from 'react'
import { links } from '../../config'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        © <span id="year">{Date.now()}</span>{' '}
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
