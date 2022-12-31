
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



import FooterWinter from "../components/FooterWinter";
export default function SaintCloud() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/winter-garden-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Winter-garden cleaning services | MarvCleaning</title>
            <meta
              name="description"
              content="Here at Winter-garden fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs,
                 and our team of experienced professionals is always ready to tackle even the most challenging cleaning jobs.
                   "
            />
             <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
            <meta property="og:title" content=" Winter-garden fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Winter Garden Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in winter Garden Fl? 
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
            The services was amazing and professional can wait for my next service.

          </p>
          <span className={styles.heroNameText}> Etienne j , 03/26/2022 </span>
          <span className={styles.heroNameText}> Winter Garden Fl </span>
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
              Home Cleaning Service In Winter-garden fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               
               When it comes to keeping your home clean, you shouldn't have to choose between a tidy house and a free weekend.
                That's where MarvCleaning comes in.
                 We're a professional home cleaning service that takes care of all the cleaning for you,
                  so you can spend your time doing the things you love.
                   Our cleaning maids are experienced and detail-oriented, so you can rest assured that your home will be in good hands.
                    And because we're a local business, we know how to clean homes in Winter-garden Florida  effectively and efficiently.
                     If you're looking for a home cleaning service that will give you the peace of mind of a tidy home without taking away your free time, contact MarvCleaning today.
                We'll be happy to give you a free estimate and answer any questions you have.

                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Winter Garden fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  hire MarvCleaning for all your cleaning needs!
                   We provide a professional cleaning service In Winter-garden fl that will leave your home or office sparkling.
                    Our experienced cleaning maids are reliable and efficient,
                     and they use the latest techniques and equipment to get the job done right.
                      Whether you need one-time deep cleaning or regular housekeeping services,
                       we can customize a plan that meets your needs and budget. Call us today to schedule a free consultation!
                  
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
                Home cleaning service care in winter Garden fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                The home cleaning service that you can trust is MarvCleaning.
                 We are a professional cleaning company that offers maid services for your home.
                  Our cleaners are experienced and knowledgeable in all areas of home cleaning.
                   They will clean your home from top to bottom, making sure that every nook and cranny is sparkling clean. 
                   In addition, our cleaners are also background checked and insured.
                    This means that you can rest assured knowing that your home is in safe hands.
                MarvCleaning also offers a 100% satisfaction guarantee. If you are not happy with the cleanliness 
                of your home after our cleaners have finished, we will come back and re-clean it for free. Contact us today to schedule a free home cleaning estimate. 
                Winter-garden fl homeowners can trust MarvCleaning to get the job done right.
                  
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service For winter Garden fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  MarvCleaning is a better home cleaning service In Winter-garden fl. Many people think that a cleaning maid is only needed when company is coming over, or the house is a complete mess. However, there are many benefits to having a regular cleaning maid, even if your home is generally tidy. A professional cleaning service can help to free up your time, so that you can spend more time doing the things you love. In addition, a clean home can be a more relaxing and enjoyable place to live. MarvCleaning can help you to achieve these goals by providing a high-quality cleaning service that is tailored to your specific needs. Whether you need a one-time deep cleaning or a regular maintenance plan, we can help you to keep your home looking its best. Contact us today to learn more about our services and how we can help you to create a cleaner, more enjoyable home environment.
                  
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
      <FooterWinter />
    </>
  );
}
