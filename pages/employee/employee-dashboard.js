import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import EmployeeNav from "../../components/EmployeeNav";
// import Accordion from '../components/Accordion'
import Widget from "../../components/Widget";

import styles from "../../styles/Dashboard.module.css";
import {
  getEmployee,
  getSubscriptions,
  JOB_STATUS,
  updateJob,
} from "../../utils/users";
import CircularProgress from "@mui/material/CircularProgress";

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const [detail, setDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const [bedrooms, setbedrooms] = React.useState({});
  const [kitchens, setkitchens] = React.useState({});
  const [bathrooms, setbathrooms] = React.useState({});
  const [livingRooms, setlivingRooms] = React.useState({});
  const [dinningRooms, setdinningRooms] = React.useState({});
  const [otherAreas, setotherAreas] = React.useState({});


  const handleGetEmployees = () => {
    getEmployee().then((employees) => {
      if (!employees.empty) {
        let arr = [];
        employees.docs.forEach((value, index) => {
          arr.push({
            ...value.data(),
            id: value.id,
          });
        });
        setEmployees(arr);
        console.log("simran", arr);
      }
    });
  };

  const handleJobResponsibilities = (obj) => {
    setlivingRooms(obj.livingRooms);
    setkitchens(obj.kitchens);
    setbedrooms(obj.bedrooms);
    setbathrooms(obj.bathrooms);
    setdinningRooms(obj.dinningRooms);
    setotherAreas(obj.otherAreas);
  };

  const handleGetSubscriptions = (email) => {
    setLoading(true);

    getSubscriptions(email)
      .then((subscriptions) => {
        if (!subscriptions.empty) {
          let arr = [];
          subscriptions.docs.forEach((value, index) => {
            if (index === 0) {
              setDetails({
                ...value.data(),
                id: value.id,
              });

              if (value.data()?.jobResponsibilities) {
                handleJobResponsibilities(value.data()?.jobResponsibilities);
              }
            }
            arr.push({
              ...value.data(),
              id: value.id,
            });
          });
          setSubscriptions(arr);
          console.log(arr);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
     
    // handleGetEmployees();
    const employee = JSON.parse(localStorage.getItem("employee"));
    if (employee && employee.email) {
      setUserDetails(employee);
      handleGetSubscriptions(employee.email);
    }
  }, []);
  console.log("userDetails", userDetails);
  const onChangeDetails = (index) => {
    setDetails({ ...subscriptions[index] });
  };
  const assignJob = (status) => {
    setLoading(true);

    updateJob(detail?.id, {
      status,
    })
      .then(() => {
        setLoading(false);

        handleGetSubscriptions(userDetails?.email);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div className={styles.dashboard}>
      <Sidebar
        className={styles.Sidebar}
        title={"Employee"}
        subscriptions={subscriptions}
        onChangeDetails={onChangeDetails}
      />
      <div className={styles.dashboardContainer}>
        <EmployeeNav />
        {loading && (
          <center style={{ marginTop: 10 }}>
            {" "}
            <CircularProgress />
          </center>
        )}
        {/* <Accordion/> */}
        <div className={styles.widgets}>
          {detail && (
            <Widget
              type="employee"
              detail={detail}
              employees={employees}
              assignJob={assignJob}
              kitchens={kitchens}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              livingRooms={livingRooms}
              dinningRooms={dinningRooms}
              otherAreas={otherAreas}
            />
          )}
          {/* <Widget type="order" /> */}
          

          {/* <Widget type="balance" /> */}
        </div>
      </div>
    </div>
  );
}
// <div className = "row" style={{ marginTop: 10 }}> 
