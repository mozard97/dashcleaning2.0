import "../styles/globals.css";
import { UserDataProvider } from "../utils/context/user";
import Head from "next/head";
import { useRouter } from "next/router";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const CANONICAL_DOMAIN = "https://marvcleaning.com";
  const router = useRouter();
  useEffect(() => {
    if (
      router.route == "/" ||
      router.route == "/hometwo" ||
      router.route == "/marv"
    ) {
      document.querySelector("html").style.fontSize = "100%";
    } else {
      document.querySelector("html").style.fontSize = "100%";
    }
  }, [router.route]);

  <Head>
    <link rel="canonical" href={CANONICAL_DOMAIN} />
  </Head>;

  return (
    <>
      <Head>
        <title> MarvCleaning | All-Around Cleaning Services</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="{MarvCleaning is a professional cleaning service that provides all types of residential and commercial cleaning services}"
        />
        <meta
          name="keywords"
          content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
        maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
        home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home,"
        />

        <meta property="og:title" content="Home MarvCleaning" />
      </Head>

      <UserDataProvider>
        <GoogleAnalytics measurementId="G-LP6BLMZKKQ" />
        <Component {...pageProps} />
      </UserDataProvider>
    </>
  );
}

export default MyApp;
// Export default   properties from React components
