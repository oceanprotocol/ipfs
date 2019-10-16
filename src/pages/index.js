import React from 'react'
import Head from 'next/head'

import '@oceanprotocol/typographies/css/ocean-typo.css'
import '../styles/global.css'
import styles from './index.css'

import Add from '../components/Add'
import Logo from '@oceanprotocol/art/logo/logo-white.svg'
import { title, description } from '../../config'
import Footer from '../components/Footer'

const Home = () => (
  <div className={styles.app}>
    <Head>
      <title>Ocean Protocol 💖 IPFS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <Logo className={styles.logo} />
      <h1 className={styles.appTitle}>{title}</h1>
      <p
        className={styles.appDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </header>
    <Add />
    <Footer />
  </div>
)

export default Home
