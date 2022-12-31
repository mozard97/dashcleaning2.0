import styles from "../styles/FormComponent.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "../utils/context/user";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import axois from 'axios'

export default function FormComponent() {
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [minDateTime, setMinDateTime] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const { userData, signinWithGoogle } = useUser();
  const router = useRouter();


  // check if user is authenticated
  useEffect(() => {
    if (userData) {
      console.log("User is authenticated");
      // get the current user email
      const email = userData.email;
      console.log(email);
    } else {
      console.log("User is not authenticated");
    }
  }, [userData]);

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      address === "" ||
      bedrooms === "" ||
      bathrooms === "" ||
      date === "" ||
      phone === ""
    ) {
      toast.error("Please fill all the fields");
    }
    
   
    const currentDateTime = new Date().getTime();
    const paramDateTime = new Date(date).getTime();
    console.log({ currentDateTime, paramDateTime });
    if (currentDateTime > paramDateTime) {
      toast.error("Select a future date fot getting service");
      return;
    }

    const res = axois.post(
      '/api/sms',
      {
        phone: phone,
        message: "Your quote has been submitted. We will contact you shortly. Thank you for choosing us.",
        address: address,
        bedrooms: bedrooms,
        bathrooms: bathrooms

      }
    )
  
//    const res = await fetch("/api/sms", {
    // sending service data of the form to the context
    const urlParams = new URLSearchParams();
    urlParams.set("address", address);
    urlParams.set("bedrooms", bedrooms);
    urlParams.set("bathrooms", bathrooms);
    urlParams.set("date", date);
    urlParams.set("phone", phone);

    const url = "/quotes?" + urlParams.toString();

    if (!userData) {
      openModal();
      localStorage.setItem("url", url);
      return;
    }

    router.push(url);
  };




  useEffect(() => {
    let intervalRef = setInterval(() => {
      setMinDateTime(new Date().toISOString().slice(0, 16));
    }, 1000);
    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className={styles.heroForm}>
      <div className={styles.formBox}>
        <ToastContainer />
        <form className={styles.ctaForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="address">Home address</label>
            <input
              type="text"
              placeholder="111 n orange ave"
              required
              id="adress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="bedroom">Bedroom</label>
            <select
              id="bedroom"
              required
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">Please choose one</option>
              <option value="0 bedroom">0-Bed</option>
              <option value="1 bedroom">1-Bed</option>
              <option value="2 bedroom">2-Bed</option>
              <option value="3 bedroom">3-Bed</option>
              <option value="4 bedroom">4-Bed</option>
              <option value="5 bedroom">5-Bed</option>
              <option value="6 bedroom">6-Bed</option>
              <option value="7 bedroom">7-Bed</option>
              <option value="8 bedroom">8-Bed</option>
              <option value="9 bedroom">9-Bed</option>
              <option value="10 bedroom">10-Bed</option>
            </select>
          </div>
          <div>
            <label htmlFor="bathroom">Bathroom</label>
            <select
              id="bathroom"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              required
            >
              <option value="">Please choose one</option>
              <option value="0 bathroom">0-Bath</option>
              <option value="1 bathroom">1-Bath</option>
              <option value="2 bathroom">2-Bath</option>
              <option value="3 bathroom">3-Bath</option>
              <option value="4 bathroom">4-Bath</option>
              <option value="5 bathroom">5-Bath</option>
              <option value="6 bathroom">6-Bath</option>
              <option value="7 bathroom">7-Bath</option>
              <option value="8 bathroom">8-Bath</option>
              <option value="9 bathroom">9-Bath</option>
              <option value="10 bathroom">10-Bath</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Date & time</label>
            <input
              type="datetime-local"
              id="date"
              min={minDateTime}
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              required
              placeholder="(123) 456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <input
            style={{ cursor: "pointer" }}
            type="submit"
            value="Get a quote"
          />
        </form>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <p>Sign in before getting a service.</p>
          <div onClick={closeModal}>
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
      </Modal>
    </div>
  );
}
