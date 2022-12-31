
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




import FooterKissi from "../components/FooterKissi";
export default function Kissimmee() {

  

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/kissimmee-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>
    
    

  return (
    <>
      <NewNavbar/>
      <div className={styles.sectionHero}>

      <Head>
            <title>Kissimmee cleaning services | MarvCleaning</title>
            <meta
              name="description"
              content="Here at Kissimmee fl MarvCleaning Service,
               we pride ourselves on providing top-quality cleaning services to our valued customers.
                We offer a wide range of cleaning services to suit your needs, 
                and our team of experienced professionals 
                is always ready to tackle even the most challenging cleaning jobs.
                  "
            />
            <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />

            <meta property="og:title" content=" Kissimmee fl MarvCleaning services" />
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>





        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}> Kissimmee Fl Home & Business Cleaning Services</h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Kissimmee Fl? 
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
          <span className={styles.heroNameText}> Yollene J , 03/26/2022 </span>
          <span className={styles.heroNameText}> Kissimmee FL </span>
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
              Home Cleaning Service In Kissimmee fl
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`
               
               Looking for a reliable home cleaning service in Kissimmee, FL? Look no further than MarvCleaning.
                Our experienced maids provide thorough, top-to-bottom cleaning services that will leave your home sparkling clean.
                 We understand that life can be hectic, and sometimes it's hard to find the time to keep your home clean.
                  That's where we come in. Our maids are available to work around your schedule and can even do same-day cleaning in most cases.
                   Whether you need one-time deep cleaning or regular recurring service, we're here to help. Contact us today to get started!
                     clean Home  When you choose MarvCleaning, you can rest assured knowing that your home is in good hands.
                      We are a locally owned and operated business with a reputation for excellence.
                       We only hire experienced maids who are committed to providing outstanding service.
                        In addition, all of our maids are bonded and insured for your peace of mind.
                         Don't spend another day worrying about keeping your home clean.
                          Call MarvCleaning today! Look no further than MarvCleaning 
                           Hiring a professional cleaning service is a great way to take some of the stress out of your life.
                            If you're looking for a high-quality, affordable home cleaning service in Kissimmee, FL, look no further than MarvCleaning. Our experienced maids provide thorough, top-to-bottom cleaning services that will leave your home sparkling clean. Contact us today to get started!  When you choose MarvCleaning  You can count on our experienced maids to provide thorough, top-to-bottom cleaning services that will leave your home sparkling clean.  call us today at  407-305-7603 for a free estimate! Receive 40% off your first cleaning!
                 We look forward to hearing from you soon."

                `}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Kissimmee fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  MarvCleaning is a professional home cleaning service in Kissimmee, FL.
                   We offer maid services to clean your home so you can relax and enjoy your free time. 
                   Our team of cleaning experts are highly trained and experienced in all aspects of cleaning,
                    from vacuuming and dusting to mopping and scrubbing. We also offer a variety of additional services, such as laundry and window cleaning. MarvCleaning is a family-owned and operated business, and we take pride in our work.
                   We offer competitive rates and discounts for repeated service.
                    Contact us today for a free estimate!
                  
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
                Home cleaning service care in Kissimmee fl
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`
                
                Home cleaning service care in Kissimmee is now easier than ever with MarvCleaning.
                 Our professional cleaning maids will clean your home from top to bottom, ensuring that every nook and cranny is sparkling clean.
                  In addition, we also offer a variety of other cleaning services, such as carpet cleaning and window washing. So whether you're looking for a one-time deep clean or ongoing housekeeping services,
                 MarvCleaning has you covered. Contact us today to learn more about our affordable, high-quality cleaning services.
                  
                  `}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
              A better home cleaning service For Kissimmee fl

              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`
                  
                  A better home cleaning service for Kissimmee. MarvCleaning is a professional cleaning maid service that offers better quality and value than other Kissimmee cleaning services. We provide top-notch cleaning services at an affordable price, and we're proud to offer a 100% satisfaction guarantee on all of our services. Our team of experienced and certified maids will clean your home from top to bottom, making sure to pay attention to all the details. We know that when it comes to cleaning, no two homes are alike, so we'll work with you to create a custom cleaning plan that fits your unique needs. Whether you need weekly, bi-weekly, or monthly cleaning service, we'll be there to help keep your home clean and clutter-free. Contact us today to schedule a free consultation, and see for yourself why MarvCleaning is the best home cleaning service in Kissimmee!
                  
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
      <FooterKissi />
    </>
  );
}
