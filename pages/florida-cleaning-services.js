
import React from "react";
import styles from "../styles/Ocoee.module.css";
import Image from "next/image";
import { StarHalfIconn, StarIcon } from "@heroicons/react/outline";
import NewNavbar from "../components/hometwo/partials/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";

import LocationsModalFl from "../components/LocationsModalFl";


// import Cleaning6 from "../assets/cleaning6.png";
// import Cleaning12 from "../assets/cleaning12.png";
// import Cleaning13 from "../assets/cleaning13.png";
// import Cleaning14 from "../assets/cleaning14.png";
// import Cleaning18 from "../assets/cleaning18.png";
// import Cleaning19 from "../assets/cleaning19.png";
// import Cleaning21 from "../assets/cleaning21.png";
import Link from "next/link";


import FootersFl from "../components/FooterFl";
export default function Florida() {

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/florida-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Maid Service in Florida | MarvCleaning</title>
            <meta
              name="description"
              content="If you are looking for a professional home cleaning service in Florida, 
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
            <h1 className={styles.heroTitle}>  Florida Home & Business Cleaning Services     </h1>
            <p className={styles.heroDescription}>
            {`Are you looking for a reliable and professional cleaning service for your home? Look no further than MarvCleaning! We offer comprehensive house cleaning services that will leave your home clean and shining. Contact us today to learn more!`}
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
          <span className={styles.heroNameText}>Ocoee Fl </span>
          <LocationsModalFl />
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
            <meta property="og:title" content="Florida MarvCleaning services" />
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
              Home Cleaning Service In Florida
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
                Residential maid cleaning service MarvCleaning operates in Florida.
                 The cleaning company offers maid services and house cleaning services. 
                 Residential customers can schedule maid service visits ahead of time or on an as-needed basis.
                  MarvCleaning employs professionally trained and background-checked maids. In addition to regularly scheduled cleanings, 
                  the company also provides move-in/move-out cleaning services, deep cleaning services, and post-construction cleaning services.
                   Customers can schedule a free in-home estimate by calling the company or visiting the website.
                    residential maid cleaning service MarvCleaning Residential
                     customers can schedule maid service visits ahead of time or on an as-needed basis.
                      MarvCleaning employs professionally trained and background-checked maids.
                       In addition to regularly scheduled cleanings, the company also provides move-in/move-out cleaning services, 
                       deep cleaning services, and post-construction cleaning services.
                 Customers can schedule a free in-home estimate by calling the company or visiting the website. 
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Florida
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`Professional house cleaning services are a great way to keep your home clean and tidy without taking on the full-time job yourself.
                   In Florida,
                    MarvCleaning is a popular choice for busy families and retirees alike.
                     The maids are highly trained and experienced in all aspects of house cleaning, from dusting to mopping floors.
                      They also offers a wide range of other services, such as laundry and ironing, making it a one-stop shop for all your cleaning needs.
                       MarvCleaning is reliable, affordable, and efficient, 
                  making it the perfect solution for anyone who wants to enjoy a clean home without lifting a finger.`}
                </p>
              </div>
              <div className={styles.careImage}>
                <Image src="/assets/cleaning19.png" alt="bed" width="400" height="250" />
              </div>
            </div>
            {/* part two */}
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Home cleaning service care in Florida
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                  Home cleaning services are an important part of keeping your home clean and tidy. 
                  They can also be a great way to care for your home if you have a busy lifestyle 
                  or if you are not able to keep up with the cleaning yourself. 
                  MarvCleaning is a professional maid service that offers house cleaning services in Florida.
                   The maids at MarvCleaning are experienced and trained in all aspects of house cleaning.
                    They will work diligently to clean your home from top to bottom, ensuring that every nook and cranny is spick and span.
                     In addition, they will also take care of any special cleaning requests that you may have.
                      Whether you need your carpets shampooed or your windows cleaned, MarvCleaning will be able to help. 
                  Contact MarvCleaning today to schedule a free consultation.
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                A better Home Cleaning Service in Florida
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  A Better Home Cleaning Service in Florida You know the feeling.
                   You come home from a long day of work, and the last thing you want to do is clean.
                    But, alas, the dishes are piled high and the floors are covered in dust. 
                    Enter MarvCleaning, your friendly neighborhood maid service.
                     We provide professional house cleaning services to residents throughout Florida.
                      Whether you need a one-time deep clean or ongoing assistance, our team of experienced maids will get the job done right.
                       And, because we understand that everyone's needs are different,
                        we offer customizable cleaning plans that can be tailored to your specific requirements.
                         So why spend your precious free time scrubbing toilets when you could be relaxing on the beach? 
                  Contact MarvCleaning today and let us take care of the dirty work for you.
                  
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
      <FootersFl />
    </>
  );
}