import '@oceanprotocol/typographies/css/ocean-typo.css'
import '../styles/global.css'
import App from 'next/app'
import React from 'react'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
