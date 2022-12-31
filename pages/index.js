import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect } from "react";
import NewNavbar from "../components/hometwo/partials/Navbar";
import OurServices from "../components/hometwo/OurServices";
import Reviews from "../components/hometwo/Reviews";
import SingupNewslater from "../components/hometwo/SingupNewslater";
import Footer from "../components/hometwo/partials/Footer";
import DownloadApp from "../components/hometwo/DownloadApp";
import MarvCleaning from "../components/hometwo/MarvCleaning";
import EmployeeReview from "../components/hometwo/EmployeeReview";
import Herosection from "../components/hometwo/Herosection";
import HowItWorks from "../components/hometwo/HowItWorks";
import RecentBlogs from "../components/hometwo/RecentBlogs";
import { client } from "../lib/client";
import Head from "next/head";

export default function Hometwo({ services }) {
  console.log(services)
  useEffect(() => {
    document.querySelector("html").style.fontSize = "100%";
  }, []);
  const CANONICAL_DOMAIN = "https://marvcleaning.com";

  <Head>
    <link rel="canonical" href={CANONICAL_DOMAIN} />
  </Head>;

  return (
    <>
      <Head>
        <html lang="en-US" />
        <title>MarvCleaning</title>
        <meta
          name="description"
          content=" MarvCleaning is a home cleaning service in Orlando FL, near you thaint have verified professionals to help clean your home. Get an affordable quote and book your home cleaning services today. "
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:title" content="Marvcleaning" />
        <meta
          // keyword="Recommendation for Housekeepers/home cleaning service , home cleaning around orlando , home cleaning around ocoee , home cleaning around davenport , home cleaning around winter-garden , home cleaning around windermere , home cleaning around maitland florida , home cleaning around clermont florida , home cleaning around tampa , home cleaning around metro-west , home cleaning around downtown orlando , home cleaning around maguire rd orlando , home cleaning around old winter garden rd , home cleaning around daniels rd ,home cleaning around davenport, home cleaning service near me , home cleaning business , home cleaning cost , home cleaning companies near me
          // home cleaning in my area , home cleaning job description , home cleaning maid."
          content="MarvCleaning recommended for housekeepers/home cleaning service , home cleaning around orlando , home cleaning around ocoee , home cleaning around davenport , home cleaning around winter-garden , home cleaning around windermere , home cleaning around maitland florida , home cleaning around clermont florida , home cleaning around tampa , home cleaning around metro-west , home cleaning around downtown orlando , home cleaning around maguire rd orlando , home cleaning around old winter garden rd , home cleaning around daniels rd ,home cleaning around davenport, home cleaning service near me , home cleaning business , home cleaning cost , home cleaning companies near me"
        />
      </Head>
      <NewNavbar />
      <Herosection services={services} />
      <OurServices services={services} />
      <Reviews />
      <SingupNewslater />
      <HowItWorks />
      <DownloadApp />
      <EmployeeReview />
      <MarvCleaning />
      <RecentBlogs />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const query = `*[_type == "services"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                    {
                    _id,
                    name,
                    url, 
                    image,
                    minPrice,
                    maxPrice
                    }`;
  const services = await client.fetch(query);
  return {
    props: {
      services,
    },
  };
}
