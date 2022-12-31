import { useEffect, useState, useMemo } from "react";
import styles from "../styles/Quotes.module.css";
import NewNavbar from "../components/hometwo/partials/Navbar";
import Collapsible from "../components/Collapsible";
import { questions } from "../utils/lib/questions";
import { useUser } from "../utils/context/user";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";
import { db } from "../utils/firebase";
import { JOB_STATUS } from "../utils/users";
import { CircularProgress } from "@mui/material";



export const testOrder = async (info) => {
  const session = { amount_total: info.price, id: info.id };

  if (info.type === "purchase" && info.duration) {
    let expiryDate = new Date();

    if (info.duration === "Months3") {
      expiryDate.setMonth(expiryDate.getMonth() + 3);
    } else if (info.duration === "Months6") {
      expiryDate.setMonth(expiryDate.getMonth() + 6);
    } else if (info.duration === "Months12") {
      expiryDate.setMonth(expiryDate.getMonth() + 12);
    }

    const data = {
      price: session.amount_total,
      frequency: info.frequency,
      duration: info.duration,
      servicesInfo: info.servicesInfo,
      expiryDate,
      timestamp: new Date(),
      status: JOB_STATUS.INITIATE,
    };
    console.log({ data });

  }
};
export default function Quotes() {
  const [frequency, setFrequency] = useState("Monthly");
  const [duration, setDuration] = useState("Months12");
  const [price, setPrice] = useState("");
  const [oneTimePrice, setOneTimePrice] = useState("");
  const [Month3Discount, setMonth3Discount] = useState(0);
  const [Month6Discount, setMonth6Discount] = useState(0);
  const [Month12Discount, setMonth12Discount] = useState(0);
  const handleFrequencyPrice = (key, value) => {
    setFrequencyPrice({ ...frequencyPrice, [key]: value });
  };
  const [finalPrice, setFinalPrice] = useState("");
  const [request, setRequest] = useState("");
  const [hoursOfService, setHoursOfService] = useState();
  const [loading, setLoading] = useState(false);
  const [bedroomsNo, setBedroomsNo] = useState(0);
  const [bathroomsNo, setBathroomsNo] = useState(0);
  const [discount, setDiscount] = useState(0);
  const bedroomPrice = [100, 120, 130, 140, 150, 160, 170, 180, 190, 200];
  const bathroomPrice = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const discountCriteria = [
    { freq: "Biweekly", Biweekly: { Months3: 10, Months6: 15, Months12: 20 } },
    { freq: "Weekly", Weekly: { Months3: 15, Months6: 20, Months12: 25 } },
    { freq: "Monthly", Monthly: { Months3: 5, Months6: 10, Months12: 15 } },
  ];

  const router = useRouter();
  const { userData } = useUser();



  const value = useMemo(() => {
    const url = localStorage.getItem("quoteData");
    return paramsToObject(new URLSearchParams(url).entries());
  }, [router.asPath]);

  const userEmail = value.email;


  console.log(value);



  const createCheckoutSession = async () => {

    const stripePromise = loadStripe(`pk_live_51KzQ3bIJzOKvndwpvpcp3cMZWBXNmdaSVruKrggT6D4bzsTor04dS7JkTjAY8J6Pk0VVoXhV6s18IMmH1uChdmfR00hwvB93Cy`);
      // "pk_test_51KzQ3bIJzOKvndwpS2mBnGrxsoQ3N3NXtKtxRnMzEVTuXDNv6wR2QslMFLz3jldyafwJCga7mLq2FlEryD2EBAQP00MOy7najX"
      
    

    setLoading(true);
    const info = {
      price: parseInt(finalPrice),
      ...(duration !== "onetime" && { frequency, duration }),
      servicesInfo: { ...value, request },
      type: "purchase",
    };
    try {
      const stripe = await stripePromise;

      // call the backend to create a checkout session
      const checkoutSession = await axios.post("/api/create-checkout-session", {
        info,
        userEmail,
      });

      // redirect user to stripe checkout
      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

     const doc = await db.collection("checkout").add(value);


      setLoading(false);
      testOrder(info);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    const currentDateTime = new Date().getTime();
    const paramDateTime = new Date(value.date).getTime();
    if (!paramDateTime || currentDateTime > paramDateTime) {
      router.push("/");
    }
  });

  useEffect(() => {
    var discountPrice = 0;
    if (duration !== "onetime") {
      discountPrice = discountCriteria.filter(
        (val) => val.freq === frequency
      )[0];
      setMonth3Discount(discountPrice[frequency]["Months3"]);
      setMonth6Discount(discountPrice[frequency]["Months6"]);
      setMonth12Discount(discountPrice[frequency]["Months12"]);
    }
  }, [price, frequency]);

  useEffect(() => {
    const bedrooms = Number(value.bedrooms.split(" ")[0]);
    const bathrooms = Number(value.bathrooms.split(" ")[0]);
    if (bedrooms > 3 || bathrooms > 3) {
      setHoursOfService(4);
    } else {
      setHoursOfService(2);
    }
    const price = bathroomPrice[bathrooms - 1] + bedroomPrice[bedrooms - 1];
    setPrice(price);
    setOneTimePrice(price);
    var discountPrice = 0;
    if (duration !== "onetime") {
      discountPrice = discountCriteria.filter(
        (val) => val.freq === frequency
      )[0][frequency][duration];
    }
    const discount = duration === "onetime" ? 0 : discountPrice;
    setDiscount(discount);
    const total = price - discount;
    setFinalPrice(total.toString());
  }, [value, frequency, duration, router]);

  if (!price) {
    return;
  }

  return (
    <>
      <Head>
        <title>Quotes</title>
        <meta name="description" content="Quotes" />
        <meta property="og:title" content="Quotes" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <NewNavbar />
      <div className={`quotes ${styles.container}`}>
        <div className={styles.containerOfQuotes}>
          <div className={styles.quotesForm}>
            <form>
              <div className={styles.quotesTitle}>
                <h1 className={styles.headingPrimary}>
                  Set your cleaning service today
                </h1>
              </div>
              <div className={styles.quotesContent1}>
                <h3 className={styles.subheading}>choose your frequency </h3>
                <p className={styles.textDescription}>
                  Cleaning services can be changed, rescheduled, or saved for a
                  later time.
                </p>
              </div>
              <div className={styles.quotesFrequency}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (duration !== "onetime") {
                      setFrequency("Monthly");
                    }
                  }}
                  className={
                    frequency === "Monthly"
                      ? styles.quotesBtnClick
                      : styles.quotesBtn
                  }
                >
                  Monthly
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (duration !== "onetime") {
                      setFrequency("Biweekly");
                    }
                  }}
                  className={
                    frequency === "Biweekly"
                      ? styles.quotesBtnClick
                      : styles.quotesBtn
                  }
                >
                  Bi-weekly
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (duration !== "onetime") {
                      setFrequency("Weekly");
                    }
                  }}
                  className={
                    frequency === "Weekly"
                      ? styles.quotesBtnClick
                      : styles.quotesBtn
                  }
                >
                  Weekly
                </button>
              </div>
              <div className={styles.QuotesSaving}>
                <div
                  className={`${styles.subheadingWithToolTip} ${styles.tooltip}`}
                >
                  MORE SAVINGS
                  <p className={styles.tooltiptext}>
                    Save more by choosing a six month plan
                  </p>
                </div>
                <div
                  className={`${styles.subheadingWithToolTip} ${styles.tooltip}`}
                >
                  HOW IT WORKS
                  <p className={styles.tooltiptext}>
                    To make the booking process easier for you, we offer
                    cleaning service plans. Early termination results in a
                    cancellation fee.
                  </p>
                </div>
              </div>
              <div className={styles.quotesContentSaving}>
                <p className={styles.textDescription}>
                  With our 100% satisfaction guarantee, you can save even more
                  by committing to a longer plan.
                </p>
              </div>
              <div className={styles.priceDiv}>
                <p className={styles.subheading}> Price per cleaning period</p>
              </div>
              <div className={styles.quotesFrequency}>
                <button
                  className={
                    duration === "onetime"
                      ? styles.quotesBtnClick
                      : styles.quotesBtn
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setDuration("onetime");
                    setFrequency("onetime");
                  }}
                >
                  One time {""}
                  {oneTimePrice}$
                </button>
                <button
                  className={
                    duration === "Months3"
                      ? styles.quotesBtnClick
                      : styles.quotesBtn
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (duration === "onetime") {
                      setFrequency("Monthly");
                    }
                    setDuration("Months3");
                  }}
                >
                  3 month {""}${price - Month3Discount}
                </button>
                <button
                  className={
                    duration === "Months6"
                      ? styles.quotesBtnClick
                      : styles.quotesBtn
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (duration === "onetime") {
                      setFrequency("Monthly");
                    }
                    setDuration("Months6");
                  }}
                >
                  6 month {""}${price - Month6Discount}
                </button>
                <button
                  className={
                    duration === "Months12"
                      ? styles.quotesBtnClick
                      : styles.quotesBtn
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (duration === "onetime") {
                      setFrequency("Monthly");
                    }
                    setDuration("Months12");
                  }}
                >
                  1 year {""}${price - Month12Discount}
                </button>
              </div>
            </form>
          </div>
          <div className={styles.quotesPlanBox}>
            <div className={styles.quoteCleaningPlan}>
              <div className={styles.sumarize}>
                <div>
                  <h3 className={styles.subheading}>
                    {frequency} cleaning plan
                  </h3>
                </div>
                <div>
                  <p className={styles.footerHeading}>
                    {duration === "onetime"
                      ? "One Time Service"
                      : duration === "Months3"
                      ? "Minimum 3 months"
                      : duration === "Months6"
                      ? "Minimum 6 months"
                      : "Minimum 12 months"}
                  </p>
                </div>
                <div>
                  <p className={styles.footerHeading}>
                    {new Date(value.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    @ {new Date(value.date).toLocaleTimeString()}
                  </p>
                </div>
                <div>
                  <p className={styles.footerHeading}>
                    {" "}
                    {value.bedrooms}, {value.bathrooms} (up to {hoursOfService}{" "}
                    hours)
                  </p>
                </div>
                <div className={styles.quotesCleaning}>
                  <div className={styles.quoteTextPlan}>
                    <p className={styles.footerHeading}> Per cleaning</p>
                  </div>
                  <div>
                    <p className={styles.footerHeading}>${price} </p>
                  </div>
                </div>
                <div className={styles.quotesCleaning}>
                  <div>
                    <p className={styles.footerHeading}> Discount</p>
                  </div>
                  <div>
                    <p className={styles.footerHeading}>- ${discount}</p>
                  </div>
                </div>

                <hr />
                <div className={styles.quotesCleaning}>
                  <div>
                    <p className={styles.footerHeading}> Today total</p>
                  </div>
                  <div>
                    <p className={styles.footerHeading}>${finalPrice}</p>
                  </div>
                </div>

                <p htmlFor="request" className={styles.requestlabel}>
                  ANY SPECIAl REQUEST TYPE HERE LET US KNOW
                </p>
                <input
                  className={styles.requestInput}
                  id="request"
                  type="text"
                  value={request}
                  onChange={(e) => {
                    e.preventDefault();
                    setRequest(e.target.value);
                  }}
                  placeholder="PLEASE ENTER A SPECIAL REQUEST"
                />
                <button
                  className={styles.btnCheckout}
                  onClick={(e) => {
                    e.preventDefault();
                    createCheckoutSession();
                  }}
                >
                  {loading ? (
                    <CircularProgress color={"success"} />
                  ) : (
                    "Checkout"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerOfFaq}>
          <h1>FAQ</h1>
          <div className={styles.faqContainer}>
            {questions.map((question, index) => {
              return <Collapsible question={question} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function paramsToObject(entries) {
  const result = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}
