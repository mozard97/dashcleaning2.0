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








 






import FooterOrlando from "../components/FooterOrlando";
export default function WinterHaven() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/orlando-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Orlando cleaning services | MarvCleaning
</title>
            <meta
              name="description"
              content="Here at Orlando fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs, and our team of experienced
                 professionals is always ready to tackle even the most challenging cleaning jobs.
                   "/>
                    <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />
              <meta property="og:title" content=" Orlando fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Orlando Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Orlando Fl? 
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
                  <a href="tel:407-845-9259" className={styles.heroLink}>
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
          <span className={styles.heroNameText}>Manny D , 02/08/2022 </span>
          <span className={styles.heroNameText}> Orlando FL </span>
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
              Home Cleaning Service In Orlando Fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               Homeowners in Orlando, Florida, know that they can rely on MarvCleaning for all their cleaning needs.
                The company offers a wide range of services, from general maid service to deep cleaning and carpets cleaning.
                 Homeowners can schedule a one-time cleaning or sign up for regular service.
                  MarvCleaning also offers move-in and move-out cleanings for those who are moving into or out of a home.
                   No matter what the need, MarvCleaning has a solution. The company's maids are reliable, detail-oriented,
                    and professional. They will make sure your home is clean from top to bottom.
                     And because they use high-quality products and advanced equipment, you can be assured 
                     that your home will be sparkling clean. 
               If you're looking for the best cleaning service in Orlando, look no further than MarvCleaning.
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Orlando Fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                MarvCleaning provides the best professional house cleaning in Orlando Fl.
                 What separates us from other maid services is our dedication to customer satisfaction. 
                 Our maids are highly trained and experienced in all aspects of house cleaning.
                  No matter how big or small the job, they will get it done quickly and efficiently.
                   In addition, we use only the best cleaning products and equipment to ensure that your home is sparkling clean.
                    We also offer a wide range of other services, including carpet cleaning, window washing, and pressure washing.
                 So if you're looking for the best maid service in Orlando, look no further than MarvCleaning!
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
                Home cleaning service care in Orlando Fl </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                Home is where the heart is, which is why it's important to keep it clean and tidy.
                 But with today's hectic lifestyles, it's not always easy to find the time to do a thorough job. 
                 That's where MarvCleaning comes in. We're a home cleaning service that takes care of all the little details,
                  so you can relax and enjoy your free time. From dusting and vacuuming to mopping and polishing,
                   we'll make sure your home sparkles from top to bottom. And because we're maids for you,
                    we're happy to take on any special requests you might have. So whether you're
                     looking for a one-time deep clean or a regular maid service, MarvCleaning is here to help.
                 Contact us today to learn more about our services and get a free estimate.
               
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service in Orlando Fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
 A Better Home Cleaning Service in Orlando Fl is called MarvCleaning. 
 They offer maids that will clean your house for you so that you can have more free time to do what you want.
  The maids are trustworthy, hardworking, and reliable. They will make sure your house is clean from top to bottom.
   They also offer a 100% satisfaction guarantee so that you know you will be happy with their services.
    If you are looking for a cleaning service that can provide you with peace of mind,
  then MarvCleaning is the perfect choice for you.
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
      <FooterOrlando/>
    </>
  );
}