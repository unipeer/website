import React from "react";

export default function Demo1() {
  return (
    <div id="overview">
      <div
        // className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        style={{ width: "100%", padding: "30px" }}
      >
        <main
          className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div
            className="sm:text-center lg:text-left"
            style={{ width: "100%" }}
          >
            <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
              Swap fiat to crypto and
              {/* <br className="xl:hidden" /> */}
              <br />
              <span className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
                vice-versa
              </span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Non-custodial peer to peer exchange with a smart contract escrow
              that makes sure your funds are always safe.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Integrated with various P2P fiat payment methods like PayPal and
              Venmo for fast, regional and safe transfers of fiat.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              Powered By
              <img
                src="assets/images/GnosisChain.svg"
                alt=""
                style={{ marginLeft: "10px" }}
              />
              {/* <div className="rounded-md shadow">
                <a
                  href="https://app.unipeer.exchange"
                  style={{ backgroundColor: "#fe5e44" }}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Try on Testnet
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://docs.unipeer.exchange"
                  target="_blank"
                  style={{
                    color: "#fe5e44",
                    border: "2px solid #fe5e44",
                    backgroundColor: "white",
                  }}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
          <div
            // className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              // className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              // src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              src="assets/images/Transaction.svg"
              alt=""
            />
          </div>
        </main>
      </div>
    </div>
  );
}
