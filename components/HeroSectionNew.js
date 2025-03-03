import React from "react";

const HeroSectionNew = () => {
  return (
    <>
      <div className="flex flex-col items-center py-18 bg-white">
        <section className="flex flex-col justify-center items-center gap-12 lg:gap-18">
          <div className="flex flex-col items-center justify-center w-[90%] lg:w-full">
            <div>
              <h2 className="font-bold font-Jost text-12 text-dark-900 text-center leading-tight">
                Trustless <span className="text-dark-400">P2P</span> exchange
                <br />
                {/* <span className="font-Jost text-3xl tracking-tight leading-10 font-extrabold text-[#111827]  sm:text-4xl sm:leading-none md:text-5xl"></span> */}
              </h2>
            </div>
            <div>
              <p className="font-Inter text-[20px] text-dark-700 font-normal text-center">
                Swap fiat-to-crypto and back via peer-to-peer in your local
                currency.
              </p>
            </div>
            <div className="mt-5 sm:mt-8 flex flex-row justify-center items-center gap-4 flex-wrap">
              <div className="rounded-lg">
                <a
                  href="https://app.unipeer.eth.limo"
                  className="font-Inter w-full flex bg-primary-500 hover:bg-primary-700 items-center justify-center text-[16px] font-semibold px-4 py-3 border border-transparent  leading-6 rounded-md text-white focus:outline-none focus:border-indigo-700  transition duration-150 ease-in-out md:py-4 md:text-lg md:px-6"
                >
                  Try on Testnet
                </a>
              </div>
              <div className=" sm:mt-0 sm:ml-3">
                <a
                  href="https://docs.unipeer.exchange"
                  target="_blank"
                  style={{}}
                  className=" font-Inter w-full text-[#fe5e44]  bg-white hover:bg-[#B62224] flex items-center justify-center px-4 py-3 border-2 border-[#fe5e44] border-solid text-base leading-6 font-semibold rounded-md  hover:text-white  focus:outline-none focus:shadow-outline-indigo focus:border-[#B62224] hover:border-[#B62224] transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start md:flex-row md:justify-end md:items-end w-[95%] lg:w-full">
            <img
              className="pt-12 md:pt-0"
              src="assets/images/hero-mockup.webp"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSectionNew;
