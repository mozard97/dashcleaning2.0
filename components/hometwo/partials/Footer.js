
import { navigation } from "../../../api/Footer";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-7xl pt-12 pb-8  sm:pl-6 lg:pt-16 lg:pl-8">
                <div className="xl:grid xl:grid-cols-5 xl:gap-8 px-4 md:px-0">
                    <div className="space-y-8 xl:col-span-1 ">
                        <img
                            className="h-10"
                            src="/assets/logo120.png"
                            alt="Company name"
                        />

                    </div>
                    <div className="mt-12 lg:grid lg:grid-cols-2 w-full flex flex-wrap justify-between gap-8 xl:col-span-4 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8 w-full">
                            <div className="">
                                <h3 className="text-base font-medium text-gray-900">Contact us</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.contactus.map((item) => (
                                        <li key={item.name} className="flex items-center">
                                            <item.icon
                                                className={"mr-2 flex-shrink-0 h-6 w-6"}
                                                aria-hidden="true"
                                            />
                                            <a href={item.href} className=" text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">Account</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.account.map((item) => (
                                        <li key={item.name} className="flex items-center">
                                            <item.icon
                                                className={"mr-2 flex-shrink-0 h-6 w-6"}
                                                aria-hidden="true"
                                            />
                                            <a href={item.href} className=" text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8  flex flex-wrap justify-between gap-8  flex-1">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name} className="flex items-center">
                                            <item.icon
                                                className={"mr-2 flex-shrink-0 h-6 w-6"}
                                                aria-hidden="true"
                                            />
                                            <a href={item.href} className=" text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className=" md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">Resources</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name} className="flex items-center">
                                            <item.icon
                                                className={"mr-2 flex-shrink-0 h-6 w-6"}
                                                aria-hidden="true"
                                            />
                                            <a href={item.href} className=" text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">&copy; {currentYear} by MarvCleaning, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
