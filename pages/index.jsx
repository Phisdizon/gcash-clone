import Head from 'next/head'
import { Register } from '../components'
export default function Home() {
  return (
    <>
      <Head>
        <title>GCash</title>
      </Head>
      <Register />
    </>
  )
}