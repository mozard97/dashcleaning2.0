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








 





import FooterWinterHaven from "../components/FooterWinterHaven";
export default function WinterHaven() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/winter-haven-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Winter Haven cleaning services | MarvCleaning
</title>
            <meta
              name="description"
              content="Here at Winter Haven fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs, and our team of experienced
                 professionals is always ready to tackle even the most challenging cleaning jobs.
                   "/>
                    <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
              <meta property="og:title" content=" Winter Haven fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Winter Haven Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Winter Haven Fl? 
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
                  <a href="tel:407-305-7603" className={styles.heroLink}>
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
          <span className={styles.heroNameText}>Johanna D , 02/08/2022 </span>
          <span className={styles.heroNameText}> Winter Haven FL </span>
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
              Home Cleaning Service In Winter Haven Fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               One of the best things about having a maid service is not having
                to worry about keeping your house clean. Life is hectic enough without 
                adding one more thing to your already full plate. Whether you work long hours,
                 have small children, or are just tired of cleaning, a maid service can be a lifesaver. 
                 MarvCleaning is one of the best home cleaning services in Winter Haven, FL. Our maids are professional,
                  courteous, and Detail-Oriented to fulfill all of your cleaning needs. 
                  We offer a variety of services including weekly, bi-weekly, and monthly home cleaning,
                   as well as one-time deep cleans. No matter what your needs are, we can customize 
                   a cleaning plan that's perfect for you. So sit back, relax, 
                   and let us take care of the chores for you!  maid for you  is  another  option  for  those  looking
                     for  quality  cleaning  services.  They  offer  home  cleaning  services  on  a  
                     regular basis as well as one-time deep cleans. They also offer carpet cleaning and window cleaning services.
                      Their maids are professional and polite and will make sure your house is sparkling clean from top to bottom.
                Contact Maid for You today to schedule a free estimate!
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Winter Haven Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                 Are you looking for a professional house cleaning service in Winter Haven Fl?
                  Look no further than MarvCleaning! Our team of experienced maids will clean your home from top to bottom,
                   leaving you with a clean and comfortable space. In addition to general housekeeping,
                    we also offer deep cleaning services for those who need a little extra help. 
                    We understand that not everyone has the time or energy to keep their home clean,
                     which is why we offer our maid services. We want to help you enjoy your home and your life, 
                     without having to worry about a messy house. Contact us today to schedule a free consultation! 
                      maid for you  is the best choice around when it comes to professional housecleaning services.  
                      We provide quality maid  services  at  an  affordable  price. 
                       If  you're  looking  for  someone  to  take care of your home while you're away,
                        call us today! We offer a wide range of maid services, from general housekeeping to deep cleaning.
                         No matter what your needs are, we can tailor our services to meet your specific requirements.
                  Contact us today to schedule a free consultation!
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
                Home cleaning service care in Winter Haven Fl </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                Homeowners in Winter Haven, Florida looking for the best cleaning services can find what they need with MarvCleaning.
                 Our maids are professional, reliable, and detail-oriented, ensuring that your home 
                 will sparkling clean from top to bottom. We understand that every home is unique,
                  and we will work with you to create a customized cleaning plan that meets your specific needs. 
                  In addition, our maids are available on a flexible schedule, so you can always 
                  have a clean home even when your schedule is chaotic. When it comes to Home cleaning service care in Winter Haven Fl,
                 MarvCleaning is the best choice for quality maid services. Contact us today to get started!
               
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service in Winter Haven Fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
  Looking for a better home cleaning service in Winter Haven Fl? MarvCleaning offers maids who are professional,
   reliable, and trustworthy. With MarvCleaning, you can be sure that your home will be cleaned to your satisfaction.
    MarvCleaning uses only the best cleaning products and materials, so you can rest assured that your home is in good hands.
     Maids from MarvCleaning are also available to clean your office or business space. 
     If you're looking for a maid for you, look no further than MarvCleaning. Contact us today to schedule a free consultation.  We look forward to meeting you!  Our focus is quality not quantity  We want to make sure each and every  one of our clients is satisfied with the work we've done  so they'll call us back  again and again. That's why  we offer a 100% satisfaction  guarantee on all of our services.  If you're not happy with the work we've done,
    we'll come back and make it right  - at no extra charge to you. That's our promise to you.
     
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
      <FooterWinterHaven/>
    </>
  );
}