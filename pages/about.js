import React from "react";
import HeroAbout from "../components/HeroAbout";
import NewNavbar from "../components/hometwo/partials/Navbar";
import AboutFeature from "../components/AboutFeature";
// import AboutCustomer from '../components/AboutCustomer'
import AboutFooter from "../components/AboutFooter";
import AboutLogo from "../components/AboutLogo";
import { useRouter } from "next/router";
import Head from "next/head"

import AboutEmployee from "../components/AboutEmployee";

export default function About() {

  const CANONICAL_DOMAIN = 'https://marvcleaning.com/about';
  const router = useRouter();
  <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>


  return (
    <>
<Head>
            <title>About MarvCleaning</title>
            <meta
              name="description"
              content="Need a reliable and trustworthy cleaning service near you?
               Look no further than MarvCleaning! We provide top-quality home care services at an affordable price. 
               Contact us today to get a free quote! "
            />
            <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
            <meta property="og:title" content="About MarvCleaning" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>

      <NewNavbar />
      <HeroAbout />
      <AboutLogo />

      <AboutFeature />
      <AboutEmployee />
      {/* <AboutCustomer/>  */}

      <AboutFooter />
    </>
  );
}
