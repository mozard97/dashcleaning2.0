import Image from "next/image";
import DownloadApp from "../../components/hometwo/DownloadApp";
import EmployeeReview from "../../components/hometwo/EmployeeReview";
import HowItWorks from "../../components/hometwo/HowItWorks";
import MarvCleaning from "../../components/hometwo/MarvCleaning";
import OurServices from "../../components/hometwo/OurServices";
import Footer from "../../components/hometwo/partials/Footer";
import NewNavbar from "../../components/hometwo/partials/Navbar";
import MarvHero from "../../components/marv/MarvHero";
import Quote from "../../components/marv/Quote";
import { client } from "../../lib/client";
import Head from "next/head";
import { useRouter } from "next/router";
// import AboutFooter from "../../components/marv/AboutFooter";
// import AboutFooter from "../components/AboutFooter";


export default function Index({ services }) {
  const CANONICAL_DOMAIN = 'https://marvcleaning.com';
  const router = useRouter();
  <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>



  return (
    <>
<Head>
            <title>The One Stop Solution for All Your Home Cleaning and Repair Needs | MarvCleaning</title>
            <meta
              name="description"
              content="From window cleaning to home repair, MarvCleaning is here to help.
               We provide top-quality services at an affordable price, so you can keep your home 
               in great condition without breaking the bank. Contact us today to learn more! "
            />
            <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
            <meta property="og:title" content="About MarvCleaning" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>


      <NewNavbar />
      <MarvHero services={services} />
      <Quote />
      <HowItWorks />
      <DownloadApp />
      <EmployeeReview />
      <MarvCleaning />
      <OurServices />
      <Footer />
      {/* <AboutFooter /> */}
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
