/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "heroicons2/24/outline";
import { useRouter } from "next/router";
import { useUser } from "../../../utils/context/user";
import Link from "next/link";

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },

  {
    title: "Blogs",
    href: "/blogs",
  },
];
export default function NewNavbar() {
  // const { userData, signinWithGoogle, signoutWithGoogle } = useUser();

  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-4">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    onClick={() => router.push("/")}
                    src="/assets/logo120.png"
                    alt="Marvcleaning Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    onClick={() => router.push("/")}
                    src="/assets/logo120.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map((val, i) => (
                    <Link href={val.href} key={i}>
                      <a
                        key={i}
                        className={`${
                          router.route == val.href
                            ? "border-indigo-500"
                            : "border-transparent"
                        } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900`}
                      >
                        {val.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden text-sm lg:ml-4 lg:flex lg:items-center">
                <button
                  type="submit"
                  className="block w-full text-white rounded-md bg-indigo-500 py-2.5 px-4 font-medium shadow hover:bg-indigo-600 focus:outline-none"
                >
                  352-306-4415
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              {navigation.map((val, i) => (
                <Disclosure.Button
                  as="a"
                  onClick={() => {
                    router.push(val.href);
                  }}
                  key={i}
                  className="block cursor-pointer border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                  {val.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
