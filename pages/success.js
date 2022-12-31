import styles from "../styles/Success.module.css";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Head from "next/head";

const Success = () => {
  const router = useRouter();

  return (
    <div className={styles.successPage}>
      <Head>
        <title>Marv Cleaning - Success</title>
        <meta name="description" content="Marv Cleaning's success page" />
        <meta property="og:title" content="Marv Cleaning - Success" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className={styles.successMessage}>
        <CheckCircleIcon style={{ height: "25px", color: "#e67e22" }} />
        <h1>Thank you, your order has been confirmed.</h1>
      </div>
      <button
        className={styles.backHomeButton}
        onClick={() => router.push("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Success;
