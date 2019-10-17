import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './components/Footer'
import styles from './Layout.module.css'
import { title } from '../site.config'

export default function Layout({
  children,
  pageTitle = title
}: {
  children: ReactNode
  pageTitle?: string
}) {
  return (
    <div className={styles.app}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      <Footer />
    </div>
  )
}
