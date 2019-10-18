import React from 'react'

import '@oceanprotocol/typographies/css/ocean-typo.css'
import '../styles/global.css'

import Add from '../components/Add'
import Logo from '@oceanprotocol/art/logo/logo-white.svg'
import { title, description, learnMore } from '../../site.config'
import styles from './index.module.css'

import Layout from '../Layout'
import Info from '../components/Info.mdx'

const Home = () => (
  <Layout>
    <div className={styles.grid}>
      <div>
        <header className={styles.header}>
          <Logo />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <a href={learnMore}>Learn More →</a>
        </header>

        <Add />
      </div>

      <Info />
    </div>
  </Layout>
)

export default Home
