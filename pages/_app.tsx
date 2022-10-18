import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default App
