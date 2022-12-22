import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/layout.component"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <meta name="description" content="Portfolio website of Jeldi Kamal Kumar, you can find his resume, hobbies and his work" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}
