import React from "react";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

export default function Find() {
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ address, bedrooms, bathrooms, date, phone });
  };
  const dj = router.query.bedrooms;
  const marv = router.query.bathrooms;

  {
    return (
      <div>
        <div></div>
        <div>{router.query.bedrooms}</div>
        <div>{router.query.bathrooms}</div>
        <div>{router.query.date}</div>
        <div>{router.query.phone}</div>
      </div>
    );
  }
}
