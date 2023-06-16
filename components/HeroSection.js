import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#FFF9F8]" style={{}}>
        <section className=" flex flex-col md:flex-row justify-center items-center gap-2 py-12 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className=" md:w-6/12 sm:text-center lg:text-left">
            <h2 className=" font-Jost text-3xl tracking-tight leading-10 font-extrabold text-[#111827] sm:text-4xl sm:leading-none md:text-5xl">
              Decentralized p2p Exchange.
              <br />
              {/* <span className="font-Jost text-3xl tracking-tight leading-10 font-extrabold text-[#111827]  sm:text-4xl sm:leading-none md:text-5xl"></span> */}
            </h2>
            <p className="font-Inter  py-4 text-xl text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Swap fiat-to-crypto and back directly from peers using your local
              currency with no trusted 3rd party.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-row justify-start items-center gap-4 ">
              <div className="rounded-md shadow">
                <a
                  href="https://app.unipeer.exchange"
                  className=" font-Inter w-full flex  bg-[#fe5e44] hover:bg-[#B62224] items-center justify-center text-base px-4 py-3 border border-transparent  leading-6 font-semibold rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
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
          <div className="md:w-6/12 flex md:flex-row md:justify-end md:items-end">
            <img className="pt-12 md:pt-0" src="Mockup.svg" alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
