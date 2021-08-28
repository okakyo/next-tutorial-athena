import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { UserProvider } from "../hooks/user";
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    )
}
export default MyApp
