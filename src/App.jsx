import '@babel/polyfill'
import React from 'react'
import './styles/global.css'
import './App.css'

import Add from './components/Add'
import Logo from '@oceanprotocol/art/logo/logo-white.svg'
import { title, description } from '../config'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Logo className="logo" />
        <h1 className="appTitle">{title}</h1>
        <p
          className="appDescription"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </header>
      <Add />
      <Footer />
    </div>
  )
}
