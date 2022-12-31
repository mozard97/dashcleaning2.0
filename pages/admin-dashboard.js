import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ClaimJob from "../components/ClaimJob";
import DoingJob from "../components/DoingJob";
import Maps from "../components/Maps";
import { useRouter } from "next/router";

import EmployeeNav from "../components/EmployeeNav";
// import Accordion from '../components/Accordion'
import Chart from "../components/Chart";
import Widget from "../components/Widget";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/Dashboard.module.css";
import {
  getAdmin,
  getEmployee,
  getSubscriptions,
  JOB_STATUS,
  updateJob,
} from "../utils/users";
export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [employees, setEmployees] = useState([]);
  const router = useRouter();

  const [detail, setDetails] = useState(null);

  const handleChangeKitchen = (event) => {
    setkitchens({
      ...kitchens,
      [event.target.name]: event.target.checked,
    });
  };

  const [bedrooms, setbedrooms] = React.useState({});
  const [kitchens, setkitchens] = React.useState({});
  const [bathrooms, setbathrooms] = React.useState({});
  const [livingRooms, setlivingRooms] = React.useState({});
  const [dinningRooms, setdinningRooms] = React.useState({});
  const [otherAreas, setotherAreas] = React.useState({});
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleChangebedrooms = (event) => {
    setbedrooms({
      ...bedrooms,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangebathrooms = (event) => {
    setbathrooms({
      ...bathrooms,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangelivingRooms = (event) => {
    setlivingRooms({
      ...livingRooms,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangedinningRooms = (event) => {
    setdinningRooms({
      ...dinningRooms,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeotherAreas = (event) => {
    setotherAreas({
      ...otherAreas,
      [event.target.name]: event.target.checked,
    });
  };

  const handleGetEmployees = () => {
    setLoading(true);

    getEmployee()
      .then((employees) => {
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
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
      });
  };
  const handleGetSubscriptions = () => {
    setLoading(true);

    getSubscriptions()
      .then((subscriptions) => {
        if (!subscriptions.empty) {
          let arr = [];
          subscriptions.docs.forEach((value, index) => {
            if (index === 0) {
              setDetails({
                ...value.data(),
                id: value.id,
              });
              console.log("value.data()", value.data());
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
      .catch(function (err) {
        setLoading(false);
      });
  };
  useEffect(() => {
    let admin = localStorage.getItem("adminId");
    console.log(admin);

    if (admin) {
      console.log(admin, "admin2");
      getAdmin().then((res) => {
        if (res.empty) {
          router.replace("/admin/login");
        } else if (res.docs[0].id === admin) {
          setIsAdmin(true);
        } else {
          router.replace("/admin/login");
        }
      });
    }
    else router.replace("/admin/login");
  }, []);
  useEffect(() => {
    if (isAdmin) {
      handleGetSubscriptions();
      handleGetEmployees();
    }
  }, [isAdmin]);
  const handleJobResponsibilities = (obj) => {
    setlivingRooms(obj.livingRooms);
    setkitchens(obj.kitchens);
    setbedrooms(obj.bedrooms);
    setbathrooms(obj.bathrooms);
    setdinningRooms(obj.dinningRooms);
    setotherAreas(obj.otherAreas);
  };
  const onChangeDetails = (index) => {
    setDetails({ ...subscriptions[index] });
  };
  const assignJob = (status, index) => {
    let employeeId = employees[index].id;
    let employeeEmail = employees[index].email;
    setLoading(true);
    updateJob(detail?.id, {
      status,
      employeeId,
      employeeEmail,
      jobResponsibilities: {
        kitchens: kitchens,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        livingRooms: livingRooms,
        dinningRooms: dinningRooms,
        otherAreas: otherAreas,
      },
    })
      .then(() => {
        setLoading(false);

        handleGetSubscriptions();
        handleGetEmployees();
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
        {/* <Accordion/> */}
        {loading && (
          <center style={{ marginTop: 10 }}>
            {" "}
            <CircularProgress />
          </center>
        )}

        <div className={styles.widgets}>
          {detail && (
            <Widget
              type="admin"
              detail={detail}
              employees={employees}
              assignJob={assignJob}
              kitchens={kitchens}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              livingRooms={livingRooms}
              dinningRooms={dinningRooms}
              otherAreas={otherAreas}
              handleChangebedrooms={handleChangebedrooms}
              handleChangebathrooms={handleChangebathrooms}
              handleChangelivingRooms={handleChangelivingRooms}
              handleChangeKitchen={handleChangeKitchen}
              handleChangedinningRooms={handleChangedinningRooms}
              handleChangeotherAreas={handleChangeotherAreas}
              loading={loading}
            />
          )}
          {/* <Widget type="order" /> */}

          {/* <Widget type="balance" /> */}
        </div>
      </div>
    </div>
  );
}
