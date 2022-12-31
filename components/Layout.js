import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
Layout.defaultProps = {
  title: "MarvCleaning | professional cleaning services",
  description:
    "Professional cleaning services for your home, office, or business. We offer a variety of cleaning services including general cleaning, deep cleaning, and disinfection.",
  keywords:
    "cleaning, deep cleaning, general cleaning, disinfection, house cleaning, office cleaning, business cleaning, cleaning services, cleaning services in orlando, cleaning services in ocoee, cleaning services in davenport, cleaning services in winter-garden, cleaning services in windermere, cleaning services in maitland florida, cleaning services in clermont florida, cleaning services in tampa, cleaning services in metro-west, cleaning services in downtown orlando, cleaning services in maguire rd orlando, cleaning services in old winter garden rd, cleaning services in daniels rd, cleaning services in new york, cleaning services in los angeles, cleaning services in chicago, cleaning services in philadelphia, cleaning services in dallas, cleaning services in houston, cleaning services in phoenix, cleaning services in san antonio, cleaning services in san jose, cleaning services in san diego, cleaning services in new york, cleaning services in los angeles, cleaning services in chicago, cleaning services in philadelphia, cleaning services in dallas, cleaning services in houston, cleaning services in phoenix, cleaning services in san antonio, cleaning services in san jose, cleaning services in san diego, cleaning services in new york, cleaning services in los angeles, cleaning services in chicago, cleaning services in philadelphia, cleaning services in dallas, cleaning services in houston, cleaning services in phoenix, cleaning services in san antonio, cleaning services in san jose, cleaning services in san diego, cleaning services in new york, cleaning services in los angeles, cleaning services in chicago, cleaning services in philadelphia, cleaning services in dallas, cleaning services in houston, cleaning services in phoenix, cleaning services in san antonio, cleaning services in san jose, cleaning services in san diego, cleaning services in new york, cleaning services in los angeles, cleaning services in chicago, cleaning services in philadelphia, cleaning services in dallas, cleaning services in houston, cleaning services in phoenix, cleaning services in san antonio, cleaning services in san jose, cleaning services in san diego, cleaning services in new york, cleaning services in los angeles, cleaning services in chicago, cleaning services in philadelphia, cleaning services in dallas, cleaning services in houston, cleaning services in phoenix, cleaning services in san antonio, cleaning services in san jose.",
};
