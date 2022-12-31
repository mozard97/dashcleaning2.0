import styles from "../styles/Quotes.module.css";
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";

const Collapsible = ({ question }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={styles.innerFAQ}>
      <div
        className={styles.collapseButton}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className={styles.faq}>
          <h3>{question.question}</h3>
          {isCollapsed ? (
            <ArrowDownIcon style={{ height: "15px" }} />
          ) : (
            <ArrowUpIcon style={{ height: "15px" }} />
          )}
        </div>
        <div
          className={`${
            isCollapsed ? `${styles.collapsed}` : `${styles.expanded}`
          }`}
          aria-expanded={isCollapsed}
        >
          {question.answer}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
