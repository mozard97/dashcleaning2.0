import React from "react";
import styles from "../styles/Ocoee.module.css";
import Image from "next/image";
import { StarHalfIconn, StarIcon } from "@heroicons/react/outline";
import NewNavbar from "../components/hometwo/partials/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";



// import Cleaning6 from "../assets/cleaning6.png";
// import Cleaning12 from "../assets/cleaning12.png";
// import Cleaning13 from "../assets/cleaning13.png";
// import Cleaning14 from "../assets/cleaning14.png";
// import Cleaning18 from "../assets/cleaning18.png";
// import Cleaning19 from "../assets/cleaning19.png";
// import Cleaning21 from "../assets/cleaning21.png";
import Link from "next/link";








 







import FooterMaitland from "../components/FooterMaitland";
export default function Maitland() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/maitland-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title> Maitland cleaning services | MarvCleaning
</title>
            <meta
              name="description"
              content="Here at Maitland fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs, and our team of experienced
                 professionals is always ready to tackle even the most challenging cleaning jobs.
                   "/>
                    <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
              <meta property="og:title" content=" Maitland fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Maitland Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Maitland Fl? 
            Look no further than MarvCleaning! Our team of experienced cleaners will work diligently to clean your home from top to bottom ,leaving it sparkling and ready for the next day.
            Contact us today to schedule a free consultation.You'll be glad you did!`}
            </p>
            <div className={styles.heroBtn}>
              <div>
                <button className={styles.heroButton}>
                  <Link className={styles.heroLink} href="/form">
                    <span className={styles.heroButtonText}> Get A Quote</span>
                  </Link>
                </button>
              </div>
              <div>
                <button className={styles.heroButton}>
                  <a href="tel:+1-352-306-4415" className={styles.heroLink}>
                    <span className={styles.heroButtonText}>Contact Us</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* end text */}
          <div className={styles.heroImage}>
            <Image src="/assets/cleaning6.png" alt="bed" width="400" height="300" />
          </div>
        </div>
        {/* end hero */}
      </div>
      <div className={styles.reviewWrapper}>
        <div className={styles.heroReview}>
          <div className={styles.heroRating}>
            <StarIcon className={styles.heroIcon} />
            <StarIcon className={styles.heroIcon} />
            <StarIcon className={styles.heroIcon} />
            <StarIcon className={styles.heroIcon} />
            <StarIcon className={styles.heroIcon} />
          </div>
          <span className={styles.heroRatingTitle}>
            The best cleaning service in the area!
          </span>
          <p className={styles.heroRatingText}>
            {" "}
          Awesome service and great prices. I would highly recommend this company to anyone looking for a reliable home cleaning service.

          </p>
          <span className={styles.heroNameText}>Denneska M , 02/08/2022 </span>
          <span className={styles.heroNameText}> Maitland FL </span>
        </div>
      </div>
      {/* end of hero  review*/}

      <div className={styles.workSection}>
        <div className={styles.workSectionTitle}>
          <h3>How it works</h3>
        </div>
        <div className={styles.works}>
          {/* work 1 */}
          <div className={styles.work}>
            <div>
              <span className={styles.workSpan}>Boking your Service</span>
            </div>
            <div>
              <p className={styles.workDescription}>
          
                {`Booking your service is now easier than ever with MarvCleaning.
                 Enter your home address,pick a date,time,and frequency and get a quote!`}
              </p>
            </div>
            <div>
              <Image src="/assets/cleaning12.png" alt="bed" width="300" height="300" />
            </div>
          </div>
          {/* end work 1 */}

          <div className={styles.work}>
            <div>
              <span className={styles.workSpan}>Manage everything</span>
            </div>
            <div>
              <p className={styles.workDescription}>
               {`Manage everything from your mobile device,from scheduling a time that works best for you to rescheduling,pausing,or canceling your service. `}
              </p>
            </div>
            <div>
              <Image src="/assets/cleaning14.png" alt="bed" width="300" height="300" />
            </div>
          </div>

          {/* end of work 2 */}

          <div className={styles.work}>
            <div>
              <span className={styles.workSpan}>Quality cleaning</span>
            </div>
            <div>
              <p className={styles.workDescription}>
                {`With our verified professionals, you can trust MarvCleaning always to provide quality cleaning service that meets your needs.`}

              </p>
            </div>
            <div>
              <Image src="/assets/cleaning13.png" alt="bed" width="300" height="300" />
            </div>
          </div>

          {/* end ofwork 3 */}
        </div>
      </div>
      {/*  */}
      <div className={styles.workBtn}>
        <button className={styles.workButton}>
          <Link className={styles.heroLink} href="/form">
            <span className={styles.heroButtonText}> Get A Quote</span>
          </Link>
        </button>
      </div>
      {/* end of how it works */}
      <div className={styles.careSections}>
        {/*  */}
        <div className={styles.Cares}>
          <div className={styles.careTitle}>
            <h3 className={styles.subheading}>
              Home Cleaning Service In Maitland Fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`

Are you in search of a reliable and affordable cleaning service? 
Look no further than MarvCleaning! We are a home cleaning service based in Maitland, 
Florida, and we offer a wide range of services to keep your home looking its best. 
Whether you need a one-time deep cleaning or regular maid service, we are here to help.
 Our team of experienced professionals use the latest equipment and techniques to get your home sparkling clean. 
 We also offer flexible scheduling to fit your busy lifestyle. So what are you waiting for?
 Contact us today to see how we can help you achieve the perfect level of cleanliness for your home.

                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Maitland Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
            Professional house cleaning by MarvCleaning in Maitland Fl is the best way to keep your home clean and healthy.
             We offer a wide range of maid services that are designed to meet your specific needs and budget.
              Our team of professional cleaners are highly trained and experienced in deep cleaning houses of all sizes.
               We use the latest equipment and techniques to get your home sparkling clean, from top to bottom.
                In addition, we offer a money-back satisfaction guarantee so you can be sure you're getting 
                the best possible value for your money.
             Contact us today to schedule a free consultation.
                  `}
                </p>
              </div>
              <div className={styles.careImage}>
                <Image src="/assets/cleaning19.png" alt="bed" width="400" height="250" />
              </div>
            </div>
            {/* part two */}
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Home cleaning service care in Maitland Fl </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                Home cleaning services are a must if you want to keep your house clean and tidy.
                 However, finding the right cleaning service can be a challenge.
                 There are many different companies out there, and each one offers a different range of services.
                  MarvCleaning is one of the leading home cleaning services in Maitland Fl. We offer a wide range of cleaning services, 
                  from deep cleaning to maid service. We also offer a 100% satisfaction guarantee so that 
                  you can be sure that you're getting the best possible value for your money. 
                  If you're looking for a home cleaning service that can offer you the best possible care,
                   then MarvCleaning is the perfect choice for you.
                 Contact us today to find out more about our services and how we can help you keep your home clean and tidy.
               
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service in Maitland Fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
 
 A better home cleaning service in Maitland is MarvCleaning. 
 A deep cleaning house is not a problem for these maids. 
 They are also available to do general cleaning, like making sure your appliances are clean on the inside and outside,
  as well as your carpets and windows. A maid from MarvCleaning will leave your home looking and feeling amazing!
   You will definitely be able to tell the difference after they have been there.
    If you're not convinced, just ask around. 
    Many of your friends and neighbors have probably already used MarvCleaning and can attest to their excellent work.
  So what are you waiting for? Give them a call today!

                  `}
                </p>
              </div>
              <div className={styles.careImage}>
                <Image src="/assets/cleaning21.png" alt="bed" width="400" height="350" />
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <div className={styles.workBtn}>
        <button className={styles.workButton}>
          <Link className={styles.heroLink} href="/form">
            <span className={styles.heroButtonText}> Get A Quote</span>
          </Link>
        </button>
      </div>
      <FooterMaitland/>
    </>
  );
}