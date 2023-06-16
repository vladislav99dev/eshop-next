import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'
import { ModalContextWrapper } from '@/context/ModalContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextWrapper>
  )
}