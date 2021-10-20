import React, { FC } from 'react'
import { AppProps } from 'next/app'
import wrapper from '@store'
import Head from 'next/head'
import '@styles/globals.scss'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
