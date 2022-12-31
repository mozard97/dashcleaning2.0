/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function AboutEmployee() {
    return (
      <div className="overflow-hidden bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <h2 className="text-lg font-semibold text-indigo-600">MarvCleaning</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Professional and Reliable Employees
            </p>
          </div>
          <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
            <p className="text-lg text-gray-500">
            {`
           At MarvCleaning, we take pride in the fact that our employees are highly trained professionals
            who have been thoroughly background checked. 
            We understand the importance of providing top-notch service that meets our customers’ needs, 
           so we make sure to select only individuals with a proven record of excellence.
           `}
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="relative z-10">
              <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
                <p className="mt-6 text-lg text-gray-500">
              {`
           The first step in ensuring quality service is to hire people who are well-versed in their respective fields.
            At MarvCleaning, each individual employee has at least three years of experience in his or her field,
             and they all have a proven track record of success. Additionally, each employee is required to pass a
              comprehensive background check before being hired by MarvCleaning. This helps 
           ensure that our customers can trust the individuals they will be working with when they utilize our services.  
           
           `}
                </p>
                
                <p className="mt-6 text-lg text-gray-500">
                 
                {`
           We also believe it is important to employ individuals who can deliver excellent customer service.
            Each one of our employees is trained extensively on how to interact with customers
             in an engaging and professional manner. We strive to make sure every customer feels comfortable
              and cared for during their interactions with our staff members. We do not believe in providing 
              robotic customer service; instead, we want each customer interaction to be personable and memorable
               so that the customer will feel satisfied when using our services. 
           
           `}

                </p>
               
                
              </div>
              <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
                <div className="rounded-md shadow">
                  <a
                    href="marv?slug=home-cleaning"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Get A Quote
                  </a>
                </div>
                <div className="ml-4 rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
              </svg>
              <blockquote className="relative rounded-lg bg-white shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <img
                    src="/assets/logo12.png"
                    alt="Workcation"
                    className="h-8"
                  />
                  <div className="relative mt-8 text-lg font-medium text-gray-700">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      {`
                      I love my job at MarvCleaning. I never feel like it's work - it's always enjoyable and fulfilling.
                       The team is wonderful, and we always work together to get the job done.
                        We're respectful of each other and our clients, and we always go above and beyond to make sure everyone is happy.
                         It's truly a joy to be a part of this company, and I know that I'm lucky to have found such a great place to work.
                       Thank you, MarvCleaning, for giving me the chance to be a part of your team!
                      
                      `}
                    </p>
                  </div>
                </div>
                <cite className="relative flex items-center rounded-b-lg bg-indigo-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                  <span className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                    <img
                      className="h-12 w-12 rounded-full bg-indigo-300 sm:h-20 sm:w-20"
                      src="https://i.postimg.cc/rwGwQ9fB/Blue-Modern-Home-Cleaning-Service-Instagram-Post.png"
                      alt=""
                    />
                  </span>
                  <span className="relative ml-4 font-semibold leading-6 text-indigo-300 sm:ml-24 sm:pl-1">
                    <span className="font-semibold text-white sm:inline">Cascie Aderny</span>{' '}
                    <span className="sm:inline">Employee of the month</span>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
  