import React from "react";
import Safety from "../components/Safety";
import Head from "next/head";
import { useRouter } from "next/router";








export default function OurSafety() {

  const CANONICAL_DOMAIN = 'https://marvcleaning.com/ourSafety';
  const router = useRouter();
  <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>



  return (
    <>
      <Head>
        <title>MarvCleaning - Our Safety</title>
        <meta name="description" content="Marv Cleaning's safety page" />
        <meta property="og:title" content="Marv Cleaning - Our Safety" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Safety />
    </>
  );
}
