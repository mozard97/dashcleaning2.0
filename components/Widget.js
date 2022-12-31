import React from "react";
import styles from "../styles/Widget.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  AccountBalanceOutlined,
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
  SportsRugbySharp,
} from "@mui/icons-material";
import { brown } from "@mui/material/colors";
import { CircularLoader } from "./Loader";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import StickyHeadTable from "./StickyHeadTable";
import Button from "@mui/material/Button";
import { JOB_STATUS } from "../utils/users";
import { JOB_RESPONSIBILITY } from "../utils/lib/jobResponsibility";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import BusinessIcon from "@mui/icons-material/Business";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
const JobData = ({ data, type }) => {
  console.log("darshan", data);
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Name</b>
          </div>
          <div className={styles.infoDetail}>{data?.name}</div>
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Address</b>
          </div>
          <div className={styles.infoDetail}>{data?.servicesInfo?.address}</div>
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Date</b>
          </div>
          <div className={styles.infoDetail}>
            {dayjs(data?.servicesInfo?.date).format("DD-MM-YY , h:m:a")}
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Bedrooms</b>
          </div>
          <div className={styles.infoDetail}>
            {data?.servicesInfo?.bedrooms}
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Bathrooms</b>
          </div>
          <div className={styles.infoDetail}>
            {data?.servicesInfo?.bathrooms}
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Duration</b>
          </div>
          <div className={styles.infoDetail}>{data?.duration}</div>
        </Grid>
        {type == "admin" && (
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <div>
              <b className={styles.infoHeading}>Frequency</b>
            </div>
            <div className={styles.infoDetail}>{data?.frequency}</div>
          </Grid>
        )}
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Request</b>
          </div>
          <div className={styles.infoDetail}>{data?.servicesInfo?.request}</div>
        </Grid>
        {type == "admin" && (
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <div>
              <b className={styles.infoHeading}>Price</b>
            </div>
            <div className={styles.infoDetail}>{data?.price.toFixed(1)}</div>
          </Grid>
        )}
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <div>
            <b className={styles.infoHeading}>Phone</b>
          </div>
          <div className={styles.infoDetail}>{data?.servicesInfo?.phone}</div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <div>
            <b className={styles.infoHeading}>Email</b>
          </div>
          <div className={styles.infoDetail} style={{ textTransform: "none" }}>
            {data?.email}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const JOBRESPONSIBILITYVIEW = ({
  handleChangebedrooms,
  kitchens,
  handleChangeKitchen,
  bedrooms,
  bathrooms,
  handleChangebathrooms,
  handleChangelivingRooms,
  livingRooms,
  handleChangedinningRooms,
  dinningRooms,
  handleChangeotherAreas,
  otherAreas,
  type,
}) => {
  return (
    <Grid
      container
      spacing={2}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Grid item xs={12} sm={4}>
        <b style={{ fontSize: 12 }}> {JOB_RESPONSIBILITY.kitchen.title}</b>
        <FormGroup>
          {JOB_RESPONSIBILITY.kitchen.tasks.map((val, index) => {
            return (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={type == "employee"}
                      checked={
                        kitchens && kitchens[index] && kitchens[index] == true
                          ? true
                          : false
                      }
                      onChange={handleChangeKitchen}
                      name={index}
                    />
                  }
                  label={val.title}
                />
                {val.detail && !!val.detail.length && (
                  <div>
                    {val.detail.map((val, index) => (
                      <div key={index} style={{ marginLeft: 30 }}>
                        - {val}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={4}>
        <b style={{ fontSize: 12 }}> {JOB_RESPONSIBILITY.bedrooms.title}</b>
        <FormGroup>
          {JOB_RESPONSIBILITY.bedrooms.tasks.map((val, index) => {
            return (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={type == "employee"}
                      checked={
                        bedrooms && bedrooms[index] && bedrooms[index] == true
                          ? true
                          : false
                      }
                      onChange={handleChangebedrooms}
                      name={index}
                    />
                  }
                  label={val.title}
                />
                {val.detail && !!val.detail.length && (
                  <div>
                    {val.detail.map((val, index) => (
                      <div key={index} style={{ marginLeft: 30 }}>
                        - {val}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </FormGroup>
      </Grid>
      <Grid item xs={12} sm={4}>
        <b style={{ fontSize: 12 }}> {JOB_RESPONSIBILITY.bathrooms.title}</b>
        <FormGroup>
          {JOB_RESPONSIBILITY.bathrooms.tasks.map((val, index) => {
            return (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={type == "employee"}
                      checked={
                        bathrooms &&
                        bathrooms[index] &&
                        bathrooms[index] == true
                          ? true
                          : false
                      }
                      onChange={handleChangebathrooms}
                      name={index}
                    />
                  }
                  label={val.title}
                />
                {val.detail && !!val.detail.length && (
                  <div>
                    {val.detail.map((val, index) => (
                      <div key={index} style={{ marginLeft: 30 }}>
                        - {val}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={4}>
        <b style={{ fontSize: 12 }}> {JOB_RESPONSIBILITY.livingRooms.title}</b>
        <FormGroup>
          {JOB_RESPONSIBILITY.livingRooms.tasks.map((val, index) => {
            return (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={type == "employee"}
                      checked={
                        livingRooms &&
                        livingRooms[index] &&
                        livingRooms[index] == true
                          ? true
                          : false
                      }
                      onChange={handleChangelivingRooms}
                      name={index}
                    />
                  }
                  label={val.title}
                />
                {val.detail && !!val.detail.length && (
                  <div>
                    {val.detail.map((val, index) => (
                      <div key={index} style={{ marginLeft: 30 }}>
                        - {val}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={4}>
        <b style={{ fontSize: 12 }}> {JOB_RESPONSIBILITY.dinningRooms.title}</b>
        <FormGroup>
          {JOB_RESPONSIBILITY.dinningRooms.tasks.map((val, index) => {
            return (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={type == "employee"}
                      checked={
                        dinningRooms &&
                        dinningRooms[index] &&
                        dinningRooms[index] == true
                          ? true
                          : false
                      }
                      onChange={handleChangedinningRooms}
                      name={index}
                    />
                  }
                  label={val.title}
                />
                {val.detail && !!val.detail.length && (
                  <div>
                    {val.detail.map((val, index) => (
                      <div key={index} style={{ marginLeft: 30 }}>
                        - {val}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={4}>
        <b style={{ fontSize: 12 }}> {JOB_RESPONSIBILITY.otherAreas.title}</b>
        <FormGroup>
          {JOB_RESPONSIBILITY.otherAreas.tasks.map((val, index) => {
            return (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={type == "employee"}
                      checked={
                        otherAreas &&
                        otherAreas[index] &&
                        otherAreas[index] == true
                          ? true
                          : false
                      }
                      onChange={handleChangeotherAreas}
                      name={index}
                    />
                  }
                  label={val.title}
                />
                {val.detail && !!val.detail.length && (
                  <div>
                    {val.detail.map((val, index) => (
                      <div key={index} style={{ marginLeft: 30 }}>
                        - {val}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default function Widget(props) {
  const { type = "employee", detail, employees, assignJob, loading } = props;
  return (
    <div className={styles.widget}>
      <div>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularLoader></CircularLoader>
          </div>
        ) : (
          <span className={styles.counter}>
            <div
              style={{
                fontSize: 10,
                backgroundColor: "gray",
                borderRadius: 8,
                padding: 4,
                color: "white",
                width: "100px",
                marginBottom: 10,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {detail?.status}
            </div>

            {type === "employee" && (
              <>
                <Button
                  onClick={() => {
                    if (
                      detail?.employeeEmail ||
                      detail?.status == JOB_STATUS.CLAIMED
                    )
                      assignJob(
                        detail?.status == JOB_STATUS.CLAIMED
                          ? JOB_STATUS.COMPLETED
                          : JOB_STATUS.CLAIMED
                      );
                  }}
                  style={{ fontSize: 15, marginBottom: 10 }}
                  variant="contained"
                  disabled={
                    (detail?.status == JOB_STATUS.ASSIGNED ||
                      detail?.status == JOB_STATUS.CLAIMED) &&
                    !loading
                      ? false
                      : true
                  }
                >
                  {detail?.status == JOB_STATUS.CLAIMED ? "Completed" : "Claim"}
                </Button>

                <Button
                  onClick={() => {
                    if (detail?.employeeEmail) assignJob(JOB_STATUS.DECLINED);
                  }}
                  style={{ fontSize: 15, marginBottom: 10, marginLeft: 10 }}
                  variant="contained"
                  color="error"
                  disabled={
                    detail?.status == JOB_STATUS.ASSIGNED && !loading
                      ? false
                      : true
                  }
                >
                  Decline
                </Button>
              </>
            )}
            <JobData data={detail} type={type} />
          </span>
        )}
      </div>

      <Divider style={{ marginTop: 10, marginBottom: 10 }} />

      <JOBRESPONSIBILITYVIEW {...props} />

      {type === "admin" && (
        <>
          {loading && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularLoader></CircularLoader>
            </div>
          )}
          <StickyHeadTable
            employees={employees}
            assignJob={assignJob}
            detail={detail}
            loading={loading}
          />
        </>
      )}
    </div>
  );
}
