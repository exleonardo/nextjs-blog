import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

import '../styles/globals.scss'

export type NextPageWithLayout<P = {}> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P>
type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
