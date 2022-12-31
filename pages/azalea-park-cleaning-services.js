
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

import Footerb from "../components/Footerb";
export default function Azalea() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/azalea-park-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Azalea-Park cleaning service | MarvCleaning</title>
            <meta
              name="description"
              content="Here at Azalea-park MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs,
                 and our team of experienced professionals 
                 is always ready to tackle even the most challenging cleaning jobs.
                  "
            />
            <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />

            <meta property="og:title" content="Azalea-park MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Azalea-Park Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Azalea-Park Fl? 
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
           i have been using this service for the last 2 years and it has been a great experience.
            the service is very professional and the staff are very friendly. i highly recommend this service. 

          </p>
          <span className={styles.heroNameText}> Julie M , 03/21/2022 </span>
          <span className={styles.heroNameText}> Azalea-Park Fl </span>
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
              Home Cleaning Service In Azalea-park fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               MarvCleaning is a home cleaning service that has been servicing the Azalea-park fl area for many years.
                We offer a variety of cleaning services that are sure to meet your needs and exceed your expectations. 
                Our team of professional cleaners are detail oriented and will work diligently to clean your home from top to bottom.
                 In addition, we offer a satisfaction guarantee so that you can be confident in our work. Contact us today 
                 to schedule a free consultation. We look forward to meeting you and providing you with the best home cleaning 
                 experience possible. Thank you for considering MarvCleaning as your go-to choice for house cleaning services! 
                 Schedule us today for the laziest-deep clean of your home ever! 
                  House Cleaning Services Include: -Dusting surfaces including window sills, blinds, ceiling fans, 
                  etc -Vacuuming all carpets -Mopping all hard floors -Clearing cobwebs from ceiling corners and walls -Cleaning 
                  and sanitizing all bathrooms -Wiping down all kitchen surfaces, appliances, and fixtures -Loading and unloading 
                  dishwasher -Making beds and changing linens (upon request)  -And more! Just ask! ! Call us now or visit our website 
                  to schedule your free consultation. We look forward to meeting you soon!
                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Azalea-park fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  Are you tired of coming home to a messy house? Do you wish you could spend more time relaxing and less time cleaning?
                   If so, MarvCleaning is here to help.
                    We offer comprehensive home cleaning services that will leave your house sparkling from top to bottom. 
                    Whether you need a one-time deep cleaning or regular monthly service, we can tailor a plan to fit your needs. 
                    Our team of professional cleaners is background-checked and fully insured, 
                    so you can rest assured that your home is in good hands. 
                    We also use eco-friendly products to protect your family and pets from harmful chemicals.
                     Ready to say goodbye to your cleaning worries? 
                     Contact MarvCleaning today and let us show you what a difference a clean house can make.
                  
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
                Home cleaning service care in Azalea-park fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                Do you clean your house every day? If not, it's time to start!
                 A clean house is a healthy house, 
                 and there's no better way to clean your house than with our home cleaning service care in Azalea-park fl.
                  Our team of professional cleaners will clean every nook and cranny of your house, leaving it spotless. 
                  In addition, we'll also disinfect all surfaces, so you can be sure that your house is bacteria-free.
                   And because we care about the environment,
                    we only use eco-friendly products.
                     So why wait? Contact us today and let us take care of all your cleaning needs!
                  
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service For Azalea-park fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  64% of customers say cleanliness is the most important factor when considering a business. MarvCleaning offers a better home cleaning service in Azalea-park fl and ensures cleanliness for your clients, customers, and employees. Give us a call today to get started!What separates our clean house services from the competitors is our: 
                  -Passion for cleanliness 
                  -Attention to detail 
                  -Flexible scheduling 
                  -Affordable rates 
                  Our team members are highly trained and experienced in providing clean house services that will make your home look its best. We understand that every home is different and has unique cleaning needs. We will work with you to create a custom cleaning plan that meets your specific needs and budget. Contact us today to schedule a free consultation!
                  
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
      <Footerb />
    </>
  );
}