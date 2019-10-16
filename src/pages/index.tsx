import React from 'react'

import '@oceanprotocol/typographies/css/ocean-typo.css'
import '../styles/global.css'

import Add from '../components/Add'
import Logo from '@oceanprotocol/art/logo/logo-white.svg'
import { title, description } from '../../site.config'
import styles from './index.module.css'

import Layout from '../Layout'

const Home = () => (
  <Layout>
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.title}>{title}</h1>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </header>
    <Add />
  </Layout>
)

export default Home
