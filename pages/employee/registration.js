// import Layout from "./components/layout";

import Head from "next/head";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import firebase from "../../utils/firebase";
import { addEmployee, checkEmployeeExist } from "../../utils/users";
import CircularProgress from "@mui/material/CircularProgress";

import { CustomizedSnackbars } from "../../components/CustomizedSnackbars";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

export default function HomePage() {
  const theme = createTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    localStorage.clear();
  }, [])
  const signinWithGoogle = (data) => {
    setLoading(true);
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        checkEmployeeExist(result.additionalUserInfo.profile.email).then(
          (employee) => {
            if (employee.empty) {
              addEmployee({ ...result.additionalUserInfo.profile, ...data })
                .then(() => {
                  localStorage.setItem(
                    "employee",
                    JSON.stringify(result.additionalUserInfo.profile)
                  );
                  router.replace("/employee/employee-dashboard");
                })
                .catch((error) => {
                  console.log("error", error);
                });
            } else {
              console.log("result", result);

              localStorage.setItem(
                "employee",
                JSON.stringify(result?.additionalUserInfo?.profile)
              );
              router.replace("/employee/employee-dashboard");
            }
            setLoading(false);
          }
        );
      })
      .catch((error) => {
        setLoading(false);

        console.log({ error });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let name = data.get("Name");
    let mobile = data.get("Mobile");
    console.log(name === "");
    if (name === "" || mobile === "") {
      //   toast.error("Please complete the details");
      return;
    }

    signinWithGoogle({
      name: data.get("Name"),
      mobile: data.get("Mobile"),
    });
  };
  return (
    <>
      <Head>
        <html lang="en-US" />
        <title>MarvCleaning</title>
        <meta
          name="description"
          content=" MarvCleaning is a home cleaning service in Orlando FL, near you that have verified professionals to help clean your home. Get an affordable quote and book your home cleaning services today. "
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:title" content="Marvcleaning" />
        <meta
          // keyword="Recommendation for Housekeepers/home cleaning service , home cleaning around orlando , home cleaning around ocoee , home cleaning around davenport , home cleaning around winter-garden , home cleaning around windermere , home cleaning around maitland florida , home cleaning around clermont florida , home cleaning around tampa , home cleaning around metro-west , home cleaning around downtown orlando , home cleaning around maguire rd orlando , home cleaning around old winter garden rd , home cleaning around daniels rd ,home cleaning around davenport, home cleaning service near me , home cleaning business , home cleaning cost , home cleaning companies near me
          // home cleaning in my area , home cleaning job description , home cleaning maid."
          content="MarvCleaning recommended for housekeepers/home cleaning service , home cleaning around orlando , home cleaning around ocoee , home cleaning around davenport , home cleaning around winter-garden , home cleaning around windermere , home cleaning around maitland florida , home cleaning around clermont florida , home cleaning around tampa , home cleaning around metro-west , home cleaning around downtown orlando , home cleaning around maguire rd orlando , home cleaning around old winter garden rd , home cleaning around daniels rd ,home cleaning around davenport, home cleaning service near me , home cleaning business , home cleaning cost , home cleaning companies near me"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Employee
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="Mobile"
                    label="Mobile"
                    name="Mobile"
                    autoComplete="mobile"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                DONE
                {/* {loading && <CircularProgress color={"warning"} />} */}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

  // Create the container element     and attach it to the 
