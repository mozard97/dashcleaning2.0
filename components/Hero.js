import styles from "../styles/Hero.module.css";
import FormComponent from "./FormComponent";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.heroImgText}>
        <div className={styles.heroText}>
          <h1>Count On Us for a Five-Star Cleaning Experience</h1>
          <p>Finding and booking your perfect cleaner has never been easier</p>
        </div>
      </div>
      <FormComponent />
    </div>
  );
}
