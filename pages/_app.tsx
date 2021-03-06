import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { UserProvider } from "../hooks/user"
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Tutorial App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UserProvider> 
          <Component {...pageProps} />
        </UserProvider>
      </main>
    </div>
    )
}
export default MyApp
