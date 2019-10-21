import React from 'react'
import dynamic from 'next/dynamic'
import { title, description, learnMore } from '../../site.config'
import Layout from '../Layout'
import styles from './index.module.css'

import Logo from '@oceanprotocol/art/logo/logo-white.svg'

const Add = dynamic(() => import('../components/Add'))
const Info = dynamic(() => import('../components/Info.mdx'))

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
