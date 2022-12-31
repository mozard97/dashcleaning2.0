import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "heroicons2/20/solid";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/client";

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
};

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const scrollRight = () => {
  const scrollbar = document.getElementById("customer-review-scrollbar");
  scrollbar.scrollLeft += 690;
};

const scrollLeft = () => {
  const scrollbar = document.getElementById("customer-review-scrollbar");
  scrollbar.scrollLeft -= 690;
};
export default function Reviews({ customerReview }) {
  const [customerReviews2, setCustomerReviews] = useState(customerReview);

  useEffect(() => {
    const query = `*[_type == "customerReview"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                        {
                        name, 
                        image,
                        rating,
                        review
                        }`;
    const datafetching = async () => {
      const reviews = await client.fetch(query);
      setCustomerReviews(reviews);
    };
    if (customerReview) {
      return;
    }
    datafetching();
  }, []);
  return (
    <div className="px-4 md:px-8 xl:px-0">
      <div className="mx-auto max-w-2xl shadow border border-gray-200 rounded-md py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 ">
        <div className="lg:col-span-4 ">
          <h2 className="text-md font-bold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating, i) => (
                  <StarIcon
                    key={i}
                    className={classNames(
                      reviews.average > rating
                        ? "text-yellow-400"
                        : "text-gray-300",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count, i) => (
                <div key={i} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex flex-1 items-center"
                    >
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? "text-yellow-400" : "text-gray-300",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used this product, share your thoughts with other
              customers
            </p>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only text-black">Recent reviews</h3>

          <div className="flow-root relative h-full">
            <div
              id="customer-review-scrollbar"
              className="mt-28 h-full flex overflow-x-auto gap-[3rem] lg:gap-0"
            >
              {customerReviews2?.map((review, i) => (
                <div key={i} className="py-12 flex-shrink-0 w-full flex flex-col items-center">
                  <div className="flex items-center">
                    {/* <img src={urlFor(review.image).url()} alt={`${review.name}.`} className="h-12 w-12 object-cover rounded-full" /> */}
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.name}
                      </h4>
                      <div className="mt-1 flex items-center">
                        {[...Array(5).keys()].map((rating, i) => (
                          <StarIcon
                            key={i}
                            className={classNames(
                              review.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 text-sm max-w-lg text-justify italic text-gray-700 w-[83%] lg:w-auto"
                    dangerouslySetInnerHTML={{ __html: review.review }}
                  />
                </div>
              ))}
            </div>
            <ChevronLeftIcon
              onClick={scrollLeft}
              className="w-10 h-10 md:block hidden absolute top-[50%] cursor-pointer bg-white shadow border border-gray-200 p-1 text-sm text-gray-800 rounded-full"
            />
            <ChevronRightIcon
              onClick={scrollRight}
              className="w-10 h-10 md:block hidden absolute right-0 top-[50%] cursor-pointer bg-white shadow border border-gray-200 p-1 text-sm text-gray-800 rounded-full"
            />
            <ChevronRightIcon
              onClick={scrollRight}
              className="w-10 h-10  md:hidden absolute -right-4 top-[50%] cursor-pointer p-1 text-sm text-gray-800 rounded-full animate-ping pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
