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








 

import FooterGotha from "../components/FooterGotha";
export default function Gotha() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/gotha-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Gotha cleaning services | MarvCleaning
</title>
            <meta
              name="description"
              content="Here at Gotha fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs, and our team of experienced
                 professionals is always ready to tackle even the most challenging cleaning jobs.
                   "/>
                    <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
              <meta property="og:title" content=" Gotha fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Gotha Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Gotha Fl? 
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
          <span className={styles.heroNameText}>Deandre , 04/08/2022 </span>
          <span className={styles.heroNameText}> Gotha FL </span>
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
              Home Cleaning Service In Gotha Fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               
               Homeowners in Gotha Fl can take advantage of the many benefits of a professional home cleaning service.
                MarvCleaning is a leading provider of house cleaning services, maids, and other cleaning services.
                 Homeowners can trust that their home will be cleaned thoroughly and efficiently.
                  The company offers a wide range of services, including window cleaning, carpet cleaning,
                   upholstery cleaning, and more. Homeowners can Schedule a free consultation to learn more about the benefits
                    of a professional home cleaning service. Homeowners who hire MarvCleaning 
                    can expect to receive high-quality services at an affordable price.
                     Homeowners can also rest assured that their home will be clean and Orderly after each visit from the house cleaner.
                       Homeowners in Gotha Fl can take advantage of the many benefits of a professional
                        home cleaning service from MarvCleaning today. Homeowners can Schedule a free consultation
                         to learn more about the benefits of hiring a professional house cleaner from MarvCleaning.
                          Homeowners who hire MarvCleaning can expect to receive high-quality services at an affordable price.
                           Homeowners can also rest assured that their
                            home will be clean and Orderly after each visit from the house cleaner. Contact MarvCleaning 
               today to Schedule a free consultation and learn more about how they can help you keep your home clean and Orderly!
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Gotha Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  Professional house cleaning services like MarvCleaning can be a great help for 
                  busy families or for those who prefer to have a clean house without having to do the work themselves. 
                  Gotha Fl is a large city, and there are many different options when it comes to choosing a house cleaner.
                   However, MarvCleaning is a well-established company with a reputation for quality work. 
                   The maids who work for MarvCleaning are highly trained and experienced,
                    and they are able to provide a thorough cleaning of your home in a timely manner.
                    In addition, MarvCleaning offers a wide range of other services such as laundry and ironing,
                     making it a one-stop shop for all of your cleaning needs.
                   If you are looking for a professional, quality cleaning service in Gotha Fl, MarvCleaning is an excellent option.
                  
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
                Home cleaning service care in Gotha Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                MarvCleaning is the premier home cleaning service provider in Gotha, FL.
                 We have beenserving the area for over  years and have a proven track record of quality and customer satisfaction.
                  Our team of experienced maids are dedicated to providing the highest level of cleaning services possible.
                  We understand that your home is your sanctuary and we take care of it as if it were our own.
                   In addition to general cleaning, we also offer maid services for special occasions such as weddings,
                    parties, and other events.
                 MarvCleaning is bonded and insured for your peace of mind.
                  Contact us today to schedule a free consultation.
               
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service in Gotha Fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
     Looking for a better home cleaning service in Gotha Fl? Look no further than MarvCleaning.
      Our team of experienced house cleaners will take care of all your cleaning needs,
       from dusting and vacuuming to mopping and washing windows. We even do laundry!
        Whether you need one-time maid service or regular house cleaning,
         we can tailor our services to meet your specific needs. And because we're a family-owned business, 
         we understand the importance of personal service. That's why we offer a 100% satisfaction guarantee on all our work. 
     So if you're not happy, we'll make it right.
      Contact us today to schedule a free estimate. You'll be glad you did!
     
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
      <FooterGotha />
    </>
  );
}