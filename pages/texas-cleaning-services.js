
import React from "react";
import styles from "../styles/Ocoee.module.css";
import Image from "next/image";
import { StarHalfIconn, StarIcon } from "@heroicons/react/outline";
import NewNavbar from "../components/hometwo/partials/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";

import LocationsModalTx from "../components/LocationModalTx";


// import Cleaning6 from "../assets/cleaning6.png";
// import Cleaning12 from "../assets/cleaning12.png";
// import Cleaning13 from "../assets/cleaning13.png";
// import Cleaning14 from "../assets/cleaning14.png";
// import Cleaning18 from "../assets/cleaning18.png";
// import Cleaning19 from "../assets/cleaning19.png";
// import Cleaning21 from "../assets/cleaning21.png";
import Link from "next/link";

import FootersTx from "../components/FootersTx";
export default function Texas() {

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/texas-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Maid Service in Texas | MarvCleaning</title>
            <meta
              name="description"
              content="If you are looking for a professional home cleaning service in Texas, 
               then look no further than MarvCleaning.
               We have been providing quality maid services to our clients for over 10 years now. Call us today!
                 "
            />
             <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
            <meta property="og:title" content="Ocoee MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>  Texas Home & Business Cleaning Services     </h1>
            <p className={styles.heroDescription}>
            {`Are you looking for a reliable and professional cleaning service for your home?
             Look no further than MarvCleaning!
              We offer comprehensive house cleaning services that will leave your home clean and shining.
               Contact us today to learn more!`}
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
            The best cleaning service near me!
          </span>
          <p className={styles.heroRatingText}>
            {" "}
            The most user friendly website for cleaning homes, with easy booking and affordable pricing. 
          </p>
          <span className={styles.heroNameText}>Rosata B , 05/20/2022 </span>
          <span className={styles.heroNameText}>Texas </span>
          <LocationsModalTx />
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
            <meta property="og:title" content="Texas MarvCleaning services" />
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
               {`Manage everything from your mobile device,
               from scheduling a time that works best for you to rescheduling,pausing,or canceling your service. `}
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
                {`With our verified professionals,you can trust MarvCleaning always 
                to provide quality cleaning service that meets your needs.`}

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
              Home Cleaning Service In Texas
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               Home Cleaning Service In Texas - MarvCleaning is a house cleaner and house cleaning service provider in Texas.
                Homeowners in Texas have relied on MarvCleaning for years to keep their homes clean and tidy.
                 The MarvCleaning team is composed of highly trained professionals who are experts in the field of house cleaning.
                  Homeowners can rest assured that their homes will be cleaned correctly and efficiently when they use MarvCleaning services.
                   In addition, MarvCleaning offers a 100% satisfaction guarantee to all of its customers.
                    Homeowners who are not completely satisfied with the results of their house cleaning can request
                     a refund within 24 hours of the completion of the service. Homeowners who are looking for a reliable, professional, 
               and affordable house cleaning service should contact MarvCleaning today.
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Texas
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`Professional house cleaning services are a dime a dozen these days.
                   While it's great to have so many options to choose from,
                    it can also be overwhelming trying to decide which company to go with.
                     MarvCleaning is a professional house cleaning service based in Texas 
                     that offers maid services for both residential and commercial properties.
                      What sets MarvCleaning apart from other house cleaning companies is our attention to detail and commitment to customer satisfaction.
                       Our house cleaners are highly trained and experienced, and they take pride in their work.
                        We also use eco-friendly cleaning products whenever possible to protect your family and the environment.
                         If you're looking for a professional house cleaning service that you can count on, look no further than MarvCleaning.
                          We're here to help you keep your home clean and tidy, so you can relax and enjoy your free time. 
                          Contact us today to learn more about our maid services or to schedule a free consultation.`}
                </p>
              </div>
              <div className={styles.careImage}>
                <Image src="/assets/cleaning19.png" alt="bed" width="400" height="250" />
              </div>
            </div>
            {/* part two */}
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Home cleaning service care in Texas
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                Home cleaning service care is important, and MarvCleaning is the best company for the job. 
                They have house cleaners who are experienced maids that will take care of everything in your home. 
                The company is based out of Texas, so they know how to handle the heat and humidity. They will clean your windows,
                 dust your furniture, and vacuum your floors.
                 They will even do laundry and wash dishes. You can trust MarvCleaning to take care of your home while you're away.
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                A better Home Cleaning Service in Texas
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  A better Home Cleaning Service in Texas is MarvCleaning. They offer house cleaning services that are maid to perfection.
                   The company is family owned and operated, so they know the importance of cleanliness. 
                   Their maids are highly trained and experienced. They use high quality products to clean your home from top to bottom.
                    In addition, they offer a 100% satisfaction guarantee. 
                    If you're not happy with their work, they will come back and clean it again for free.
                   MarvCleaning is the best choice for a high quality, professional cleaning service. Contact them today to schedule a free estimate.
                  
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
      <FootersTx />
    </>
  );
}