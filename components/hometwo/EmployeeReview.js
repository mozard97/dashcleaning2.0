import React from "react";
import { CheckBadgeIcon, ChevronLeftIcon, ChevronRightIcon, StarIcon } from "heroicons2/24/solid";
import { useEffect, useState } from 'react';
import { client, urlFor } from "../../lib/client";
import { classNames } from "./Reviews";

const scrollRight = () => {
    const scrollbar = document.getElementById("employee-review-scroll");
    scrollbar.scrollLeft += 560
}

const scrollLeft = () => {
    const scrollbar = document.getElementById("employee-review-scroll");
    scrollbar.scrollLeft -= 560
}

export default function EmployeeReview({ employeeReview }) {
    const [employeeReview2, setEmployeeReviews] = useState(employeeReview)
    useEffect(() => {
        const query = `*[_type == "employeeReview"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                        {
                        name, 
                        image,
                        rating,
                        review,
                        jobs
                        }`
        const datafetching = async () => {
            const reviews = await client.fetch(query)
            setEmployeeReviews(reviews)
        }
        if (employeeReview) {
            return
        }
        datafetching()
    }, [])
    return (
        <div className="px-4">
            <div className="relative mx-auto text-sm max-w-7xl py-12  sm:py-16 sm:px-4 lg:px-6">
                <div className=" max-w-3xl mx-auto text-center pb-12 flex flex-col gap-2">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Here are some of MarvCleaning best cleaning professionals </h2>
                    <p className='text-center text-gray-500 text-base'>With MarvCleaning, no matter what service you need done in your home, you will always have a great team of professionals available to assist you.</p>
                </div>
                <ul id={"employee-review-scroll"} className=" flex gap-4 overflow-x-auto">
                    {employeeReview2?.map((val, i) =>
                        <li key={i} className="bg-white flex-shrink-0 rounded-md w-80 h-96 overflow-hidden flex flex-col shadow border border-gray-200 p-4">
                            <div className="flex pb-4 border-b border-gray-200">
                                <img
                                    src={urlFor(val.image).url()}
                                    className="w-20 h-20 rounded-full mr-2 object-cover"
                                />
                                <div className="flex flex-col gap-1 mt-2">
                                    <h1 className=" font-medium text-base">{val.name}</h1>
                                    <div className="flex ">
                                        {[...Array(5).keys()].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    val.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckBadgeIcon className="w-5 h-5 text-yellow-500 " />
                                        <p className=" text-gray-900">{val.jobs} jobs completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4">
                                <p className="text-center text-gray-500 leading-5">&quot;{val.review}&quot;</p>
                            </div>
                        </li>
                    )
                    }
                    <ChevronLeftIcon onClick={scrollLeft} className="w-10 h-10 absolute left-0 top-[60%] cursor-pointer bg-white shadow border border-gray-200 p-1 text-lg text-gray-800 rounded-full" />
                    <ChevronRightIcon onClick={scrollRight} className="w-10 h-10 absolute right-0 top-[60%] cursor-pointer bg-white shadow border border-gray-200 p-1 text-lg text-gray-800 rounded-full" />
                </ul>
            </div>
        </div>
    )
}
