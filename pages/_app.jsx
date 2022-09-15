import '../styles/globals.css'
import 'animate.css'
import NextNProgress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color='#007cff' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
