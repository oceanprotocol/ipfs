import React, { ReactNode } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Footer from './components/Footer'
import styles from './Layout.module.css'
import { title, description, url } from '../site.config'

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title={pageTitle}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [{ url: `${url}/share.png` }],
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: title
        }}
        twitter={{
          handle: '@oceanprotocol',
          site: '@oceanprotocol',
          cardType: 'summary_large_image'
        }}
      />

      {children}

      <Footer />
    </div>
  )
}
