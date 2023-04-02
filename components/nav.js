import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <svg
        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg> */}
      <div
        className="relative pt-6 px-4 sm:px-6 lg:px-8"
        style={{ padding: "20px" }}
      >
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img src="assets/images/Unipeer_Logo.png" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div
              className="hidden md:block md:ml-10 md:pr-4"
              style={{ width: "50%" }}
            >
              <a
                href="/#features"
                className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Overview
              </a>
              <a
                href="https://docs.unipeer.exchange"
                target="_blank"
                className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Features
              </a>
              <a
                href="https://docs.unipeer.exchange"
                target="_blank"
                className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                FAQs
              </a>
              <a
                href="https://docs.unipeer.exchange"
                target="_blank"
                className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Docs
              </a>
            </div>
            <div className="rounded-md flex justify-end w-6/12">
              <a
                href="https://app.unipeer.exchange"
                style={{
                  backgroundColor: "#fe5e44",
                }}
                className="text-base w-40 flex border border-transparent font-normal rounded-md text-white transition duration-150 ease-in-out px-3"
              >
                Try on Testnet
              </a>
            </div>
          </div>
        </nav>
      </div>

      <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <a
                    href="/#features"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Features
                  </a>
                </div>
                <div>
                  <a
                    href="/#signup"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
