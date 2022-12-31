import DownloadApp from "../../components/hometwo/DownloadApp";
import EmployeeReview from "../../components/hometwo/EmployeeReview";
import Faq from "../../components/hometwo/Faq";
import HowItWorks from "../../components/hometwo/HowItWorks";
import MarvPro from "../../components/hometwo/MarvPro";
import MarvCleaning from "../../components/hometwo/MarvCleaning";
import OurServices from "../../components/hometwo/OurServices";
import Footer from "../../components/hometwo/partials/Footer";
import Reviews from "../../components/hometwo/Reviews";
import MarvHero from "../../components/marv/MarvHero";
import Quote from "../../components/marv/Quote";
import { client } from "../../lib/client";
import NewNavbar from "../../components/hometwo/partials/Navbar";

export default function Index({ services }) {
  return (
    <>
      <NewNavbar />
      <MarvHero services={services[0]} />
      <Reviews customerReview={services[0]?.customerReview} />
      <Quote _id={services[0]._id} />
      <HowItWorks howItWorks={services[0]?.howItWorks} />
      <DownloadApp />
      <MarvPro marv_pro={services[0]?.lawnZap} />
      <EmployeeReview employeeReview={services[0]?.Review} />
      <MarvCleaning marvClean={services[0]?.marvClean} />
      <OurServices />
      <Faq faq={services[0]?.faq} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const slug = ctx.query.slug;
  const query = `*[_type == "services" && slug.current== "${slug}" && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                    {
                    _id,
                    name,
                    slug, 
                    image,
                    minPrice,
                    maxPrice,
                    getQuote,
                    Review[]->,
                    customerReview[]->,
                    lawnZap,
                    faq,
                    howItWorks->,
                    marvClean[]->
                    }`;
  const services = await client.fetch(query);

  if (services.length == 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      services,
    },
  };
}
