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








import FooterWinterPark from "../components/FooterWinterPark";
export default function WinterPark() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/winter-park-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Winter Park cleaning services | MarvCleaning
</title>
            <meta
              name="description"
              content="Here at Winter Park fl MarvCleaning Service,
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
            <h1 className={styles.heroTitle}> Winter Park Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Winter Park Fl? 
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
                  <a href="tel:407-794-7768" className={styles.heroLink}>
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
          <span className={styles.heroNameText}>Ricardo L, 01/10/2019 </span>
          <span className={styles.heroNameText}> Winter Park FL </span>
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
              Home Cleaning Service In Winter Park Fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               
               Looking for a top-rated Home Cleaning Service in Winter park Fl?
                Look no further than MarvCleaning! Our maids are highly trained professionals
                 who will leave your home looking spotless. We offer a variety of maid services to suit your needs,
                  and we're always happy to customize our services to fit your unique situation.
                   Whether you need a one-time deep cleaning or a recurring maid service, we're here to help. 
                   Contact us today to schedule a free consultation. We look forward to meeting you!
               
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Winter Park Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  Professional house cleaning services in Winter Park Fl.
                   MarvCleaning has been providing quality maid services to satisfied customers throughout the area for many years.
                    We take pride in our work and always go the extra mile to ensure that our customers are happy with the results.
                     Our team of experienced and dedicated maids will clean your home from top to bottom, leaving no surface untouched.
                      We also offer a wide range of other cleaning services, such as carpet cleaning, window cleaning, and pressure washing.
                       So if you're looking for a reliable and professional house cleaning service in Winter Park Fl, 
                  look no further than MarvCleaning!
                  
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
                Home cleaning service care in Winter Park Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                Home cleaning service care in Winter Park Fl MarvCleaning is the maid service for you.
                 Our maids are trained to clean your home thoroughly and efficiently. We understand that your time is precious,
                  and we want to help you free up some of it by taking care of the cleaning for you. 
                  Whether you need a one-time deep cleaning or recurring service, we are here to help. 
                  We even offer special services such as laundry . MarvCleaning is the home cleaning service you can
                   count on to get the job done right. We have a team of maids
                    who are experienced in providing top-notch cleaning services.
                     They will clean your home from top to bottom, making sure that every nook and cranny is sparkling clean. 
                     And because we know that your time is precious, we offer a convenient online booking system so you can schedule
                      a cleaning at a time that works for you. Whether you need a one-time deep clean or ongoing maid service, 
                      MarvCleaning is the company you can trust to keep your home looking its best.
                Contact us today to schedule a free consultation.
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service in Winter Park Fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
               A clean home is a happy home. A home that's clean and clutter-free is a haven from the stress of everyday life.
                A place where you can relax and recharge. A place where you can be yourself.
                 That's why MarvCleaning is the best choice for a home cleaning service in Winter Park. 
                 Our maids are professional, bonded, and insured. They're also passionate about cleaning and take pride in their work.
                  They're detail-oriented and thorough, and they have the training and experience to get your home sparkling clean.
                   They're also trustworthy and reliable. You can be sure that your home is in good hands when you use MarvCleaning. 
                   Contact us today to schedule a free consultation.
                    We'll be happy to answer any questions you have and give you a quote for our services.
                We look forward to meeting you and making your home clean and beautiful!
                  
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
      <FooterWinterPark />
    </>
  );
}