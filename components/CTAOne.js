import React from "react";

export default function CTAOne() {
  return (
    <div id="overview" className="bg-white">
      <div>
        <section className="flex flex-col md:flex-row justify-center items-center gap-2 mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="md:w-6/12  sm:text-center lg:text-left">
            <h2 className=" font-Jost text-3xl tracking-tight leading-10 font-extrabold  sm:text-4xl sm:leading-none md:text-5xl text-[#111827] ">
              Swap fiat to crypto and vice-versa
            </h2>
            <p className=" font-Inter mt-3 text-xl text-[#111827]  sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Non-custodial peer to peer exchange with a smart contract escrow
              that makes sure your funds are always safe.
            </p>
            <p className="font-Inter mt-3 text-xl text-[#111827]  sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Integrated with various P2P fiat payment methods like PayPal and
              Venmo for fast, regional and safe transfers of fiat.
            </p>
            <div className="mt-5 gap-4  flex justify-start items-center">
              <p className=" font-Inter text-base md:text-xl text-[#133629] font-semibold">
                Powered By
              </p>
              <img src="assets/images/GnosisChain.svg" alt="" />
            </div>
          </div>
          <div className="md:w-6/12  ">
            <img className="my-6" src="assets/images/Transaction.svg" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}