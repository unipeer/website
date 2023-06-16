import React from "react";

export default function CTAOne() {
  return (
    <div id="overview" className="bg-white">
      <div>
        <section className="flex flex-col md:flex-row justify-center items-start gap-2 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="md:w-6/12  sm:text-center lg:text-left">
            <h2 className="font-Jost text-[32px] leading-9   md:text-[40px] text-left md:leading-10 font-bold sm:leading-none md:text-5xl text-dark-900">
              Swap fiat to crypto and vice-versa
            </h2>
            <p className=" font-Inter font-normal text-left mt-3 text-xl text-dark-600 sm:mt-5 sm:text-xl sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
              Non-custodial peer to peer exchange with a smart contract escrow
              that makes sure your funds are always safe.
            </p>
            <p className="font-Inter text-left mt-3 text-xl text-text-dark-900  sm:mt-5 sm:text-xl sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
              Integrated with various P2P fiat payment methods like PayPal and
              Venmo for fast, regional and safe transfers of fiat.
            </p>
            <div className="mt-10 gap-4  flex justify-start items-center md:justify-start">
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
