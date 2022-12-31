import React from "react";
import styles from "../styles/Service.module.css";
import Image from "next/image";
export default function IndividualService({ service }) {
  return (
    <div
      className={styles.services}
      style={{
        flexWrap: `${service.id % 2 !== 0 ? "wrap" : "wrap-reverse"}`,
      }}
    >
      {service.id % 2 !== 0 ? (
        <>
          <div className={styles.singleServicesText}>
            <p>{service.id}</p>
            <h1>{service.heading}</h1>
            <p>{service.description}</p>
          </div>
          <div className={styles.singleServicesImg}>
            <Image
              loading="lazy"
              src={service.image}
              width={800}
              height={450}
              alt={service.image}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.singleServicesImg}>
            <Image
              loading="lazy"
              src={service.image}
              width={800}
              height={450}
              alt={service.image}
            />
          </div>
          <div className={styles.singleServicesText}>
            <p>{service.id}</p>
            <h1>{service.heading}</h1>
            <p>{service.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
