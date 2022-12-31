import { StarIcon } from "heroicons2/20/solid";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { urlFor } from "../../lib/client";
import { classNames } from "../hometwo/Reviews";
import Autocomplete from "react-google-autocomplete";
import axois from 'axios'

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const MarvHero = ({ services }) => {
  console.log();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [time, setTime] = useState();
  const [isValidTime, setIsValidTime] = useState(false);
  const [formData, setFormData] = useState({
    homeAddress: "",
    noOfBeds: "1 bedroom",
    noOfBath: "1 bathroom",
    phoneNo: "",
    email: "",
  });

  const handleInputData = (key, value, e) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleQuoteForm = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("address", formData.homeAddress);
    urlParams.set("bedrooms", formData.noOfBeds);
    urlParams.set("bathrooms", formData.noOfBath);
    urlParams.set("date", time);
    urlParams.set("phone", formData.phoneNo);
     urlParams.set("email", formData.email);
    

    //  
    const res = axois.post(
      '/api/sms',
      {
        phone: formData.phoneNo,
        message: "Your quote has been submitted. We will contact you shortly. Thank you for choosing us.",
        address: formData.homeAddress,
        bedrooms: formData.noOfBeds,
        bathrooms: formData.noOfBath,
        email: formData.email,
        

      }
    )
    // 

    localStorage.setItem("quoteData", urlParams.toString());
    router.push("/quotes");
  };

  useEffect(() => {
    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const currentLocalTimeDate = now.toISOString().slice(0, 16);
    setIsValidTime(currentLocalTimeDate < time);
  }, [time]);

  
  
  const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyCLfNyBEG0YHf8AGJCdKoht3DhoDWETTFU"; 

  return (
    <div className="relative pb-12  lg:pb-16">
      <main>
        <div>
          <div className="bg-black">
            <img
              src={urlFor(services?.image)?.url()}
              alt={services?.name}
              className="w-full h-96 object-cover object-center opacity-70"
            />
          </div>
          <div className="mx-auto max-w-5xl lg:px-8 bg-white py-12 rounded-none lg:rounded-md -mt-44 z-10 relative border-shadow">
            <form
              onSubmit={handleQuoteForm}
              className="flex flex-col items-center gap-y-4 w-full  px-4"
            >
              <h1 className=" text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl xl:text-5xl">
                <span className="block">{services?.name}</span>
              </h1>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating, i) => (
                  <StarIcon
                    key={i}
                    className={classNames(
                      5 >= 5 ? "text-yellow-400" : "text-gray-300",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                ))}
                {/* <span className=" underline ml-2">
                  {services?.Review?.length ? services?.Review?.length : "0"}{" "}
                  Reviews
                </span> */}
              </div>
              <div className="grid column-gap-none grid-cols-3 gap-x-1 w-full">
                <div className=" col-span-3 row-span-1 sm:col-span-1">
                  {/* <input
                    id="home-address"
                    name="home-address"
                    type="text"
                    required={true}
                    autoComplete="home-address"
                    placeholder="Home address   "
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      handleInputData("homeAddress", e.target.value);
                    }}
                  /> */}
                  <Autocomplete
                    apiKey={YOUR_GOOGLE_MAPS_API_KEY}
                    // onPlaceSelected={(place) => console.log(place)}
                    // when the user select a place send the address to handleInputData("homeAddress", place.formatted_address)
                    onPlaceSelected={(place) => {
                      handleInputData("homeAddress", place.formatted_address);
                    }}
                    options={{
                      types: ["address"],
                      componentRestrictions: { country: "us" },
                  }}
                      // change placeholder text
                  placeholder="Enter Your Street Address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    style={
                      {
                          width: "100%",
                          height: "40px",
                          paddingLeft: "16px",
                          marginTop: "2px",
                          // create a border around the input
                          border: "1px solid #d3d3d3",
                          borderRadius: "3px",
                          
                  }
                  }
                  />

                </div>
                <div className="flex w-full col-span-3 row-span-1 sm:col-span-1">
                  <div className=" w-full">
                    <select
                      id="bed"
                      name="bed"
                      required={true}
                      autoComplete="bed-name"
                      className="block w-full rounded-l border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        handleInputData("noOfBeds", e.target.value);
                      }}
                    >
                      {Array(10)
                        .fill(undefined)
                        .map((val, i) => {
                          return (
                            <option value={i + 1 + " bedroom"} key={i}>
                              {i + 1}-Bed
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="w-full col-span-3 row-span-1 sm:col-span-1">
                    <select
                      id="bath"
                      name="bath"
                      required={true}
                      autoComplete="bath-name"
                      className="block w-full rounded-r border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        handleInputData("noOfBath", e.target.value);
                      }}
                    >
                      {Array(10)
                        .fill(undefined)
                        .map((val, i) => {
                          return (
                            <option value={i + 1 + " bathroom"} key={i}>
                              {i + 1}-Bath
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className=" col-span-3 row-span-1 sm:col-span-1">
                  <input
                    id="date"
                    name="date"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    type="datetime-local"
                    required={true}
                    autoComplete="date"
                    placeholder="ZIP Code"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {!isValidTime && (
                    <p className="text-red-600 mt-3">
                      Please set valid date and time..!
                    </p>
                  )}
                </div>
              </div>
              <div className="grid column-gap-none grid-cols-3 gap-6 w-full">
                <div className="col-span-3 row-span-1 sm:col-span-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    placeholder="Phone Number"
                    required={true}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      handleInputData("phoneNo", e.target.value);
                    }}
                  />
                </div>
                <div className="col-span-3 row-span-1 sm:col-span-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required={true}
                    autoComplete="email"
                    placeholder="Email address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      handleInputData("email", e.target.value);
                    }}
                  />
                </div>
                <div className="col-span-3 row-span-1 sm:col-span-1">
                  <button
                    disabled={!isValidTime}
                    type="submit"
                    className="block w-full py-4 sm:py-0 text-white rounded-md bg-indigo-500 h-full px-4 font-medium shadow hover:bg-indigo-600 focus:outline-none"
                  >
                    Get a Price
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
};
export default MarvHero;
