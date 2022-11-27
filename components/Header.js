import React from 'react'
import Head from 'next/head'

export const Header = () => {
  return (
    <Head>
      <title>Jeopardy</title>
      <meta name="jeopardy game" content="a fun game of jeopardy" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}