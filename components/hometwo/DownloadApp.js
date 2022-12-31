export default function DownloadApp() {
    return (
        <div className=" py-4 md:py-6">
            <div className=" mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">

                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <img
                        src="/assets/mockup.png"
                        className="md:max-w-2xl rounded-md"
                    />
                </div>
                <div className="lg:px-10 flex flex-col gap-6">
                    <img src="/assets/logo120.png"
                        className="w-56"
                    />
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">The premier home care service app</span>
                    </h2>
                    <p className="">{`With MarvCleaning services, you can easily take care of all of your home's needs with our user friendly app.`}</p>
                    <div className="flex items-center gap-4  ">
                        <img
                            src="/assets/playstore.png"
                            className="w-[9.5rem] cursor-pointer"
                        />
                        <img
                            src="/assets/appstore.png"
                            className="w-32 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
