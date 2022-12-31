import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";
import { useUser } from "../utils/context/user";

export default function Footer() {
  const { userData, signinWithGoogle, signoutWithGoogle } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.FooterInfo}>
        <div className={styles.singleFooter}>
          <address>
            <h2>Contact us</h2>
            <p> 111 north orange Orlando, FL 32801</p>
            <Link href="tel:352-306-4415">
              <p>352-306-4415</p>
            </Link>
            <Link href="mailto:support@marvcleaning.com ">
              <p>support@marvcleaning.com</p>
            </Link>

            {/* <p>352-306-4415 dashcleaningpro@gmail.com </p> */}
          </address>
        </div>
        <div className={styles.singleFooter}>
          <h2>Account</h2>

          {userData ? (
            <p onClick={() => signoutWithGoogle()}>Sign out</p>
          ) : (
            <p onClick={() => signinWithGoogle()}>Sign in</p>
          )}
           <Link href="/employee/registration ">
              <p>Employee Sign in</p>
            </Link>
        </div>
        <div className={styles.singleFooter}>
          <h2>Company</h2>
          <Link href="/about">
            <p>About us</p>
          </Link>
        </div>
        <div className={styles.singleFooter}>
          <h2>Resources</h2>
          <Link href="/ourSafety">
            <p>
              <span>Safety</span>{" "}
              <span style={{ marginTop: "-8px" }}>Privacy & Terms</span>
            </p>
          </Link>
        </div>
      </div>
      <div className={styles.FooterInfo}>
        <div className={styles.copyright}>
          <p>Copyright ©2022 by MarvCleaning, Inc.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
