import React from "react";
import styles from "../styles/Service.module.css";

import { EmojiHappyIcon } from "@heroicons/react/outline";

export default function IndividualFeature({ feature }) {
  return (
    <div className={styles.singleFeature}>
      <EmojiHappyIcon />
      <p>{feature.heading}</p>
      <p>{feature.description}</p>
    </div>
  );
}
