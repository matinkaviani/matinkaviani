import colors from "@/config/colors";
import "@/config/i18";
import Layout from '@/modules/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ToastContainer
        toastStyle={{
          background: colors.backgroundLayout,
          color: "#fff"
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}
