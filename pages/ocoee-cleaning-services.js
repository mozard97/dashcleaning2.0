
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

import Footers from "../components/Footers";
export default function Ocoee() {

    const CANONICAL_DOMAIN = 'https://marvcleaning.com/ocoee-cleaning-services';
    const router = useRouter();
    <Head>
      <link rel="canonical" href={ CANONICAL_DOMAIN } /> 
    </Head>

  return (
    <>
      <NewNavbar />
      <div className={styles.sectionHero}>

      <Head>
            <title>Ocoee cleaning services | MarvCleaning</title>
            <meta
              name="description"
              content="Here at Ocoee MarvCleaning Service,
              we pride ourselves on providing top-quality cleanings services to our valued customers.
               We offer a wide range of cleaning services to suit your needs, 
               and our team of experienced professionals is always ready to tackle even the most challenging cleaning jobs.
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
            <h1 className={styles.heroTitle}>  Ocoee Fl Home & Business Cleaning Services     </h1>
            <p className={styles.heroDescription}>
            {`Looking for a reliable home & business cleaning service in Ocoee FL? 
            Look no further than MarvCleaning! Our team of experienced cleaners will work diligently to clean your home from top to bottom,leaving it sparkling and ready for the next day.Contact us today to schedule a free consultation.You'll be glad you did!`}
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
                  <a href="tel::407-305-7603" className={styles.heroLink}>
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
            <meta property="og:title" content="Ocoee MarvCleaning services" />
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
              Home Cleaning Service In Ocoee
            </h3>
          </div>

          <div className={styles.careService}>
            <div className={styles.careContent}>
              <p>
                {`Are you searching for house cleaning services near me? Look no
                further than our team of professionals at Marv cleaning®. We
                understand that keeping your home clean can be a difficult and
                time-consuming task, which is why we offer comprehensive house
                cleaning services that are designed to meet your unique needs.
                Whether you need help with general cleaning tasks or are looking
                for something more specific,we have a solution for you. Our
                house cleaning services include: - Dusting and vacuuming all
                surfaces - Mopping floors - Cleaning bathrooms and kitchens -
                Taking out the trash - And more! In addition,we also offer
                green house cleaning services that use environmentally friendly
                products and methods.If you’re interested in learning more
                about our house cleaning services,contact us today.We’ll be
                happy to answer any of your questions and provide you with a
                free,no-obligation estimate.`}
              </p>
            </div>
          </div>
          {/*  */}

          <div className={styles.cleaningServiceWrapper}>
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Professional house cleaning in Ocoee
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`A clean house is a happy house.It's a place where you can
                  relax and feel comfortable.But who has the time to keep their
                  house clean these days?If you're like most people,your job
                  and life responsibilities leave little time for housework.
                  That's where professional house cleaning services come in.We
                  can take care of all your house cleaning needs,so you can
                  focus on the things that are important to you.Our experienced
                  and trustworthy cleaners will make sure your home is spotless,
                  from top to bottom.And we'll do it all at a price that fits
                  your budget.So why wait? Contact us today and let us help you
                  create a clean and happy home.`}
                </p>
              </div>
              <div className={styles.careImage}>
                <Image src="/assets/cleaning19.png" alt="bed" width="400" height="250" />
              </div>
            </div>
            {/* part two */}
            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                Home cleaning service care in Ocoee
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careImageTwo}>
                <Image src="/assets/cleaning18.png" alt="bed" width="400" height="350" />
              </div>
              <div className={styles.careContent}>
                <p>
                  {`Spring is finally here,and that means it's time to start
                  thinking about freshening up your home.A deep clean can be a
                  daunting task,but with the help of a professional home
                  cleaning service, it doesn't have to be.At our company,we
                  offer comprehensive house cleaning services that will leave
                  your home looking and feeling brand new.Our team of
                  experienced maids will clean every nook and cranny,from the
                  kitchen and bathrooms to the living room and bedrooms.And our
                  competitive rates make it easy to keep your home clean all
                  year round.So if you're looking for a better home cleaning
                  service in Ocoee, give us a call today. We'll be happy to give
                  you a free estimate.`}
                </p>
              </div>
            </div>
            {/*  */}

            <div className={styles.careTitle}>
              <h3 className={styles.subheading}>
                A better Home Cleaning Service for Ocoee
              </h3>
            </div>
            <div className={styles.careService}>
              <div className={styles.careContent}>
                <p>
                  {`There are a lot of house cleaning services out there,but not
                  all of them are created equal.When it comes to finding the
                  best home cleaning service for your needs,it's important to
                  consider a few key factors.First,what kind of services do
                  you need? Do you need a one-time deep clean,or regular
                  maintenance? Second,what are your budget constraints? And
                  finally,what are your expectations in terms of quality and
                  customer service?At Marv cleaning,we pride ourselves on
                  being the best home cleaning service around.We offer a wide
                  range of services to meet our customers' needs,and we're
                  always happy to customize a plan to make sure you're getting
                  exactly what you want.Our team is professional and courteous,
                  and we go above and beyond to make sure your home is sparkling
                  clean.Contact us today to find out more about our services or
                  to schedule a free consultation.We look forward to making
                  your house cleaning dreams a reality!`}
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
      <Footers />
    </>
  );
}