import React from "react";
import styles from "../styles/Works.module.css";
import {
  HomeIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  DeviceIcon,
  XCircleIcon,
  CashIcon,
  EmojiHappyIcon,
  UserGroupIcon,
  CheckIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import WorkImag1 from "../assets/data/choose10.jpeg";
import WorkImag2 from "../assets/data/manage10.jpeg";
import WorkImag3 from "../assets/data/choose8.png"

export default function Works() {
  return (
    <div className={styles.container}>
      {/* div 1  */}
      <div className={styles.heading}>
        <p>How it Works</p>
        <h1>Get your home cleaned by a verified professional</h1>
      </div>

      {/* div2 */}
      <div className={styles.how}>
        {/* PART 1 */}
        <div className={styles.part}>
          <Image src={WorkImag1} width={350} height={250} alt="work" loading="lazy" />
          <div className={styles.planContent}>
            <h1 className={styles.headingTertiary}>Booking your Service </h1>
            <ul className={styles.planAttributes}>
              <li className={styles.planAttribute}>
                <HomeIcon className={styles.planIcon} />
                <p>Enter home address</p>
              </li>
              <li className={styles.planAttribute}>
                <ClockIcon className={styles.planIcon} />
                <p>Set a date and time</p>
              </li>
              <li className={styles.planAttribute}>
                <CalendarIcon className={styles.planIcon} />
                <p> Select weekly, biweekly or monthly</p>
              </li>
              <li className={styles.planAttribute}>
                <CheckCircleIcon className={styles.planIcon} />
                <p>Get your quote!</p>
              </li>
            </ul>
          </div>
        </div>
        {/* PART 2 */}
        <div className={styles.part}>
        <Image src={WorkImag2} width={350} height={250} alt="work" loading="lazy" />
          <div className={styles.planContent}>
            <h1 className={styles.headingTertiary}>Manage everything </h1>
            <ul className={styles.planAttributes}>
              <li className={styles.planAttribute}>
                <CheckIcon className={styles.planIcon} />
                <p> Easy booking from your mobile device</p>
              </li>
              <li className={styles.planAttribute}>
                <CalendarIcon className={styles.planIcon} />
                <p> Change or cancel service at your convenience</p>
              </li>
              <li className={styles.planAttribute}>
                <ClockIcon className={styles.planIcon} />
                <p> Schedule a time that works best for you</p>
              </li>
              <li className={styles.planAttribute}>
                <CashIcon className={styles.planIcon} />
                <p>Paying and Tipping </p>
              </li>
            </ul>
          </div>
        </div>
        {/* part 3 */}
        <div className={styles.part}>
          <Image src={WorkImag3} width={350} height={250} alt="work" loading="lazy" />
          <div className={styles.planContent}>
            <h1 className={styles.headingTertiary}>Quality cleaning </h1>
            <ul className={styles.planAttributes}>
              <li className={styles.planAttribute}>
                <EmojiHappyIcon className={styles.planIcon} />
                <span>Guaranteed satisfaction</span>
              </li>
              <li className={styles.planAttribute}>
                <UserGroupIcon className={styles.planIcon} />
                <span>Vetted Professional cleaners</span>
              </li>
              <li className={styles.planAttribute}>
                <CheckCircleIcon className={styles.planIcon} />
                <span>Background-checked</span>
              </li>
              <li className={styles.planAttribute}>
                <CheckIcon className={styles.planIcon} />
                <span>Fully insured</span>
              </li>
              <li className={styles.planAttribute}>
                <ChatAltIcon className={styles.planIcon} />
                <span>24/7 Customer service</span>
              </li>
              {/* <li className={styles.planAttribute}>
                <span>Flexible cleaning schedule</span>
              </li>
              <li className={styles.planAttribute}>
                <span>Special offer discount</span>
              </li>
              <li className={styles.planAttribute}>
                <span>Sit back and relax</span>
              </li>
              <li className={styles.planAttribute}>
                <span>
                  <strong>4.8</strong>rating (737)
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        {/* end of div2 */}
      </div>
      {/* end of div 1  */}
    </div>
  );
}
