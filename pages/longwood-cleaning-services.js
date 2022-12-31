
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






import FooterLongwood from "../components/FooterLongwood";
export default function Longwood() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/longwood-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Longwood cleaning services | MarvCleaning
</title>
            <meta
              name="description"
              content="Here at Longwood fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs, and our team of experienced
                 professionals is always ready to tackle even the most challenging cleaning jobs.
                   "/>
                    <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
              <meta property="og:title" content=" Casselberry fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Longwood Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Longwood Fl? 
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
          <span className={styles.heroNameText}>Ricardo, 02/14/2012 </span>
          <span className={styles.heroNameText}> Longwood FL </span>
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
              Home Cleaning Service In Longwood Fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               
               Homeowners in Longwood Fl need not look any further for a reliable and trustworthy home cleaning service than MarvCleaning.
                Our house cleaners are professional maids who will leave your home spotless from top to bottom.
                 We understand that every family has different cleaning needs, which is why we offer customizable cleaning packages. 
                 Whether you need help with things like laundry, dishes, or vacuuming, our team is here to lend a hand.
                  We also offer one-time deep cleaning services for those times when you need a little extra help.
                   Give us a call today to schedule a free consultation.
                We look forward to meeting you!
               
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Longwood Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  Professional house cleaning services in Longwood Fl provided by MarvCleaning services can take your
                   home from cluttered and dusty to clean and shining in no time. 
                   Our team of bonded, insured, and background-checked maids will treat your home with the utmost respect and care. 
                   We understand that every home is different, which is why we offer a range of customizable cleaning packages.
                    Whether you need a one-time deep clean or regular ongoing support, we will work with you to create a plan that meets your needs.
                     Contact us today to learn more about our house cleaning services or to schedule a free consultation.
                   Your satisfaction is guaranteed.
                  
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
                Home cleaning service care in Longwood Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                A home is a huge investment.
                 Protect your investment by keeping it clean with MarvCleaning, the best house cleaning service in Longwood FL.
                  Our maids are experienced, professional, and detail oriented. Trust us to keep your home looking its best.
                   We offer a wide range of services, from general cleaning to deep cleaning, 
                   so you can rest assured that your home will be sparkling clean from top to bottom.
                    In addition, we offer a satisfaction guarantee so you can be confident that you're making the best possible decision for your home.
                 Contact us today to schedule a free consultation. You'll be glad you did!
                  
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service For Longwood Fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  A better Home Cleaning Service in Longwood FL is MarvCleaning.
                   A house cleaner or maids from MarvCleaning will make sure your home is beautiful and clean.
                    We offer top-quality cleaning services at an affordable price. Our maids are professional, courteous, and efficient. 
                    They will clean your home from top to bottom, including mopping floors, vacuuming carpets, dusting furniture, and cleaning bathrooms.
                     We also offer a variety of other services, such as laundry and ironing, window washing, and pet care.
                   MarvCleaning is the best choice for all your home cleaning needs. Contact us today to schedule a free consultation.
                 
                  
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
      <FooterLongwood />
    </>
  );
}