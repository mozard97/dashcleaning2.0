import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Herosection = ({ services }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const filteredService =
    query === ""
      ? []
      : services?.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  const handleSearch = (name) => {
    const slug = name.trim().split(" ").join("-").toLowerCase();
    // remove this condition when other routes will be fixed
    if (slug === "airbnb-cleaning" || slug === "home-cleaning") {
      router.push(`./marv?slug=${slug}`);
    }
  };
  return (
    <div className="relative ">
      <main>
        <div className="bg-white  ">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">
                      MarvCleaning - We take the hassle out
                    </span>
                    <span className="block text-indigo-400">
                      {" "}
                      of home care.
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    how can we help you?
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1 relative">
                          <label htmlFor="search" className="sr-only">
                            search address
                          </label>
                          <input
                            id="search"
                            type="search"
                            value={query}
                            autoComplete="off"
                            onChange={(e) => {
                              setQuery(e.target.value);
                            }}
                            placeholder="Search services.."
                            className="block shadow border border-gray-200 w-full rounded-md px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none  "
                          />
                          {/* search result  */}
                          {!query == "" && (
                            <ul className="w-full absolute bg-white py-4 shadow border border-gray-200 flex flex-col">
                              {filteredService?.map((val) => {
                                return (
                                  <a
                                    key={val._id}
                                    // href={`#${val.name}`}
                                    onClick={() => handleSearch(val.name)}
                                    className="text-sm cursor-pointer text-gray-700 py-2 px-4 hover:bg-indigo-400 hover:text-gray-50"
                                  >
                                    {val.name}
                                  </a>
                                );
                              })}
                              {filteredService.length == 0 && (
                                <p className="px-4">No Result Found </p>
                              )}
                            </ul>
                          )}
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            href={"#" + query}
                            className="flex justify-center sm:py-0 w-full text-[100%] text-white rounded-md bg-indigo-500 py-4 items-center h-full px-4 font-medium shadow hover:bg-indigo-600 focus:outline-none"
                          >
                            Search
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:relative lg:mb-0 hidden lg:block">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img className="w-full " src="/assets/cleaning6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
};
export default Herosection;
