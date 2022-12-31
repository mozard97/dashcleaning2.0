

export default function AboutCustomer() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
             
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          MarvCleaning Professional and Reliable Employees
          </h2>
          <p className="mt-6 text-lg text-gray-500">
           {`
           At MarvCleaning, we take pride in the fact that our employees are highly trained professionals
            who have been thoroughly background checked. 
            We understand the importance of providing top-notch service that meets our customers’ needs, 
           so we make sure to select only individuals with a proven record of excellence.
           `}
          </p>

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


          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Delivery</dt>
                <dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">{`24/7`}</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Pepperoni</dt>
                <dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">{`99.9%`}</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Calories</dt>
                <dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">{`100k+`}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
