import React from "react";
import styles from "../styles/Service.module.css";
import { serviceDataHomePage } from "../utils/lib/serviceData";
import { featureData } from "../utils/lib/featureData";
import IndividualService from "./IndividualService";
import IndividualFeature from "./IndividualFeature";

export default function Service() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Our service</p>
      </div>
      {serviceDataHomePage.map((service, index) => {
        return <IndividualService service={service} key={index} />;
      })}

      <span className={styles.planDetailText}>
        Here&apos;s why MarvCleaning is the best way to book cleaning sevices
        and why you should choose us.
      </span>
      <div className={styles.featureSection}>
        {featureData.map((feature, index) => {
          return <IndividualFeature feature={feature} key={index} />;
        })}
      </div>
    </div>
  );
}
