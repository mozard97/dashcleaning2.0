import React from "react";
import Layout from "./Layout";
import styles from "../styles/Safety.module.css";
import NewNavbar from "./hometwo/partials/Navbar";

import Head from "next/head";

export default function Safety() {

 

  return (
    <>
    
      <NewNavbar />
      <div className={styles.container}>
        <h1 className={styles.mainHeadingOne}>TRUST &amp; SAFETY</h1>

        <div className={styles.safetyTwo}>
          <div>
            <p className={styles.title}>Insured and bonded?</p>
            <p className={styles.safetyText}>
              We at MarvCleaning are fully insured and bonded. Our team
              understands that being in your home is a privilege, and we take
              great care whenever we are there. As always, we are careful, in
              the unlikely event that an object is damaged, please notify us
              within 24 hours.
            </p>
          </div>
          <div>
            <p className={styles.title}>Why trust MarvCleaning?</p>
            <p className={styles.safetyText}>
              All vetted professionals at MarvCleaning are thoroughly trained,
              reference and background checked, you can have a peace of mind
              when you hire us.
            </p>
          </div>
          <div>
            <p className={styles.title}>We keep our word!</p>
            <p className={styles.safetyText}>
              provide five-star services to our valued customers. Your
              satisfaction is our priority. If an issue arises, please inform us
              within 24 hours, and MarvCleaning will make it right.
            </p>
          </div>
          <div>
            {/* <h2 className={styles.mainHeadingTwo}>Privacy & terms</h2> */}
          </div>
        </div>
      </div>
    </>
  );
}
