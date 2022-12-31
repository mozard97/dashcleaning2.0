import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { UserCircleIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { useUser } from "../utils/context/user";
import Modal from "react-modal";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [modalIsOpenForTip, setIsOpenForTip] = useState(false);
  const [tip, setTip] = useState("");

  const { userData, signinWithGoogle, signoutWithGoogle } = useUser();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const info = {
      email: userData.email,
      price: parseFloat(tip),
      type: "tip",
    };

    // call the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      info,
    });

    // redirect user to stripe checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) alert(result.error.message);
  };

  function openModalForTip() {
    setIsOpenForTip(true);
  }

  function closeModalForTip() {
    setIsOpenForTip(false);
  }

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.brandName}>
          <div className={styles.logoWrapper}>
            <Image
              className={styles.logo}
              src="/assets/logo12.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <button
          className={styles.hamburger}
          name="hamburgurButton"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? <XIcon /> : <MenuIcon />}
        </button>
        <div
          className={
            isNavExpanded
              ? `${styles.navigationMenu} ${styles.expanded}`
              : `${styles.navigationMenu}`
          }
        >
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/ourServices">
                <a>Our Service</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <span onClick={openModalForTip}>Give a tip</span>
            </li>
            {!userData ? (
              <li>
                <div className={styles.authClass}>
                  <span onClick={() => signinWithGoogle()}>Sign In</span>
                </div>
              </li>
            ) : (
              <>
                <li>
                  <div className={styles.user}>
                    <UserCircleIcon className={styles.featureIcon} />{" "}
                    <p className={styles.userName}>
                      {userData.displayName.split(" ")[0]}
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.authClass}>
                    <span onClick={() => signoutWithGoogle()}>Sign out</span>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpenForTip}
        onRequestClose={closeModalForTip}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!userData ? (
          <div className="modal">
            <p>Sign in before giving tip.</p>
            <div onClick={closeModalForTip}>
              <XIcon />
            </div>
            <button
              onClick={() => {
                signinWithGoogle();
              }}
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className="modal">
            <p>How much tip do you want to give.</p>
            <div onClick={closeModalForTip}>
              <XIcon />
            </div>
            <input
              type="number"
              min="1"
              step="1"
              value={tip}
              onChange={(e) => setTip(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                createCheckoutSession();
              }}
            >
              GIVE A TIP
            </button>
          </div>
        )}
      </Modal>
    </header>
  );
}
