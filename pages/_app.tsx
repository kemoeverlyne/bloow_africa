import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Component {...pageProps} />
  )
}

export default MyApp
