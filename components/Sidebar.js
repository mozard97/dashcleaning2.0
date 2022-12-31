import React from "react";
import styles from "..//styles/Sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import dayjs from "dayjs";
const JobCard = ({
  job: {
    servicesInfo: { address, bedrooms, bathrooms, date },
    status = "Not Assigned",
  },
  onChangeDetails,
  index,
}) => {
  return (
    <div
      className={styles.newJob}
      onClick={() => {
        onChangeDetails(index);
      }}
    >
      <p className={styles.title}>NEW JOB</p>
      <div className={styles.boxOne}>
        <div>
          <li className={styles.li}>
            <div
              style={{
                fontSize: 10,
                backgroundColor: "gray",
                borderRadius: 8,
                padding: 4,
                color: "white",
              }}
            >
              {status}
            </div>
          </li>
        </div>

        <div>
          <li className={styles.li}>
            <HomeIcon className={styles.icon} />
            <span className={styles.span}>{address}</span>
          </li>
        </div>
        {/*  */}
        <div>
          <li className={styles.li}>
            <HomeIcon className={styles.icon} />
            <span className={styles.span}>{bedrooms}</span>
          </li>
        </div>
        {/*  */}
        <div>
          <li className={styles.li}>
            <HomeIcon className={styles.icon} />
            <span className={styles.span}>{bathrooms}</span>
          </li>
        </div>
        {/*  */}
        <div>
          <li className={styles.li}>
            <AccessTimeIcon className={styles.icon} />

            <span className={styles.span}>
              {dayjs(date).format("DD-MM-YY , h:m:a")}
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default function Sidebar(props) {
  const { title, subscriptions, onChangeDetails } = props;
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>{title}</span>
      </div>
      <hr className={styles.hr} />
      <div className={styles.center}>
        <ul className={styles.ul}>
          {/* <p className={styles.title}>UPCOMING JOBS</p> */}

          <li className={styles.li}>
            <DashboardIcon className={styles.iconTwo} />
            <span className={styles.spane}> JOBS ALERTS</span>
          </li>
          {!!subscriptions.length &&
            subscriptions.map((value, index) => {
              return (
                <JobCard
                  key={index}
                  index={index}
                  job={value}
                  onChangeDetails={onChangeDetails}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
