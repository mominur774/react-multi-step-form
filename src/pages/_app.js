import React from 'react';
import '../styles/style.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Layout } from '@/components/Layout';
import { GlobalProvider } from '@/context/GlobalContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  )
}

export default MyApp