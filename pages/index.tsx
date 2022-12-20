import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>J Kamal Kumar Portfolio Website :: stay in touch in with jeldikk</title>
        <meta name="description" content="Portfolio website of Jeldi Kamal Kumar, you can find his resume, hobbies and his work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to my site, LOL ..!</h1>
      </main>
    </>
  )
}
