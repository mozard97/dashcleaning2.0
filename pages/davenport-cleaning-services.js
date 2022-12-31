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








 




import FooterDavenport from "../components/FooterDavenport";
export default function Davenport() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/davenport-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Davenport cleaning services | MarvCleaning
</title>
            <meta
              name="description"
              content="Here at Davenport fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs, and our team of experienced
                 professionals is always ready to tackle even the most challenging cleaning jobs.
                   "/>
                    <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
              <meta property="og:title" content=" Davenport fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Davenport Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Davenport Fl? 
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
          <span className={styles.heroNameText}>Etienne M , 02/08/2022 </span>
          <span className={styles.heroNameText}> Davenport FL </span>
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
              Home Cleaning Service In Davenport Fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               
               There are many things to consider when trying to find the best cleaning services.
                This is especially true if you live in a large city with many different options.
                 However, there are a few key things that you should always look for to ensure 
                 that you're getting the best possible service. First, make sure that the company is insured and bonded.
                  This will protect you in case anything goes wrong while the maids are in your home.
                   Second, check to see if the company offers any guarantees.
                    This shows that they stand behind their work and are confident in their ability to get your home clean.
                     Finally, read reviews from other customers to see what their experience was like. By considering these factors,
                      you're sure to find the best home cleaning service in Davenport FL.
                MarvCleaning has all of these factors and maids who arehtorough and professional . try us out today!
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Davenport Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  Professional house cleaning services are not a new concept. 
                  For years, maids have been employed to clean homes of all shapes and sizes.
                   However, what is new is the level of service that professional
                    cleaning companies are now able to provide. MarvCleaning is one such company 
                    that is making waves in the industry with its top-notch cleaning services. 
                    The company employs only the most experienced and qualified maids
                     who are then put through an intense training program. As a result, 
                     MarvCleaning's maids are some of the best in the business. 
                     They are able to provide a level of service that is simply unmatched by any other cleaning company. 
                  If you're looking for the best possible cleaning experience, then MarvCleaning is the company for you.
                  
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
                Home cleaning service care in Davenport Fl </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                Home cleaning service care in Davenport Fl is important, and MarvCleaning maids are the best in the business.
                 We provide top-quality maid for you services, and our maids are passionate about their work.
                  We understand that your home is your sanctuary, and we take pride in keeping it clean and comfortable for you.
                   Our maids are detail-oriented and will clean your home from top to bottom, 
                   ensuring that every nook and cranny is sparkling clean. In addition, our maids are professional and courteous,
                    and they will always go the extra mile to make sure you're satisfied with their work.
                     If you're looking for the best home cleaning service in Davenport Fl, look no further than MarvCleaning. 
                Our maids will take care of your home as if it were their own, and you won't be disappointed with our services.
               
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service in Davenport Fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
  A better home cleaning service in Davenport Fl is MarvCleaning.
   They have maids that come in and do an initial cleaning of your house.
    After that, they do a weekly or bi-weekly cleaning depending on your needs. 
    They also offer a maid for you service where they will be available to you on demand.
     This is great for when you have a party or other event where you need extra help.
      MarvCleaning is the best cleaning service because they are reliable, affordable,
   and offer a variety of services to meet your needs.
     
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
      <FooterDavenport />
    </>
  );
}