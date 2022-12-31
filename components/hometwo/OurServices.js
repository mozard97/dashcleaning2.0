import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
} from "heroicons2/20/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/client";

const scrollRight = () => {
  const scrollbar = document.getElementById("service-scrollbar");
  scrollbar.scrollLeft += 560;
};

const scrollLeft = () => {
  const scrollbar = document.getElementById("service-scrollbar");
  scrollbar.scrollLeft -= 560;
};

export default function OurServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const query = `*[_type == "services"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                    {
                        _id,
                    name,
                    slug, 
                    image,
                    minPrice,
                    maxPrice
                    }`;
    const datafetching = async () => {
      const reviews = await client.fetch(query);
      setServices(reviews);
    };
    datafetching();
  }, []);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8  overflow-hidden">
        <div className="space-y-12 relative ">
          <div className="space-y-5 text-gray-900 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              Our Services
            </h2>
          </div>
          <ul
            id={"service-scrollbar"}
            role="list"
            className="overflow-x-auto md:px-4 rounded-md flex items-center gap-4 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {services?.map((person) => (
              <Link
                key={person?.name}
                href={
                  person?.slug.current === "home-cleaning" ||
                  person?.slug.current === "airbnb-cleaning"
                    ? "/marv?slug=" + person?.slug.current
                    : "/"
                }
                shallow={false}
              >
                <a
                  id={person?.name}
                  className="shadow cursor-pointer pb-4 px rounded-md border border-gray-100"
                >
                  <div className="space-y-4">
                    <div className="w-64">
                      <img
                        className="rounded-t-md h-64 object-cover border-b border-gray-200"
                        src={urlFor(person?.image).url()}
                        alt=""
                      />
                    </div>
                    <div className="space-y-2 text-left px-4">
                      <div className="space-y-1 text-gray-800 text-lg leading-6">
                        <h3 className="mb-2 font-medium">{person?.name}</h3>
                        <h4 className="text-sm flex items-center pb-2 text-gray-600">
                          <CurrencyDollarIcon className="w-5 h-5 text-indigo-500 mr-1" />
                          Avg. price :
                          <span className="font-medium ">
                            ${person?.minPrice} - ${person?.maxPrice}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
            <ChevronLeftIcon
              onClick={scrollLeft}
              className="w-10 h-10 absolute left-0 top-[50%] cursor-pointer bg-white shadow border border-gray-200 p-1 text-lg text-gray-800 rounded-full"
            />
            <ChevronRightIcon
              onClick={scrollRight}
              className="w-10 h-10 absolute right-0 top-[50%] cursor-pointer bg-white shadow border border-gray-200 p-1 text-lg text-gray-800 rounded-full"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
