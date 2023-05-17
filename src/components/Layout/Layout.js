import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>React Multi Step Modal Form</title>
      </Head>
      <div>{children}</div>
    </>
  )
}

export default Layout