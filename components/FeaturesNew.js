import React from "react";

const FeaturesNew = () => {
  return (
    <>
      <section id="features" className="bg-[#eff1ff] pb-20 pt-20 relative">
        <div className="">
          <h2 className=" font-Jost px-4 sm:px-16 text-left md:text-center lg:text-4xl text-4xl  py-6 font-bold text-[#111827] ">
            Why Choose Unipeer?
          </h2>
        </div>

        {/* sub1 */}
        <div className="flex flex-col justify-center items-center gap-8 md:gap-4 lg:gap-8">
          <div className="w-11/12 sm:w-10/12 mx-auto flex flex-col  md:flex-row justify-center items-center gap-8 md:gap-4 relative z-10">
            <div
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
              }}
              className="relative flex flex-col justify-center max-w-full md:max-w-[544px] h-auto sm:h-[400px] md:h-[450px] xl:h-[334px] bg-white p-8 md:px-8 md:py-4 lg:p-10  w-full  lg:w-6/12 lg:mr-5 rounded-2xl gap-8"
            >
              <img
                className="hidden md:block absolute -top-12 -left-12 w-20 h-20 -z-10"
                src="assets/images/Supporting_element.svg"
                alt=""
              />
              <div className="flex flex-col justify-center">
                <img src="assets/images/Low_fee.svg" className="w-18" alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className=" font-Inter text-dark-900 text-5 font-semibold ">
                  Low Fees
                </h2>
                <p className="font-Inter text-dark-900 text-4 font-normal -mt-2">
                  Low protocol fees that’s not enabled by default. Sellers
                  automatically optimize for payment methods that have
                  zero-to-low fees for p2p transfers bringing the overall
                  trading fees down.
                </p>
              </div>
            </div>
            <div
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
              }}
              className="relative flex flex-col justify-center max-w-full md:max-w-[544px] h-auto sm:h-[400px] md:h-[450px] xl:h-[334px] bg-white p-8 md:px-8 md:py-4 lg:p-10  w-full  lg:w-6/12 lg:mr-5 rounded-2xl gap-8"
            >
              <div className="flex flex-col justify-center">
                <img src="assets/images/Dispute.svg" className="w-18" alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className=" font-Inter text-dark-900 text-5 font-semibold ">
                  Trustless Dispute Resolution
                </h2>
                <p className="font-Inter text-dark-900 text-4 font-normal -mt-2">
                  By using Kleros, an independent arbitration protocol for
                  dispute resolution we maintain credible neutrality and
                  decentralization of all parties.
                </p>
              </div>
            </div>
          </div>

          {/* dot grid fill SVG */}
          {/* <img
          className="hidden md:block absolute top-[96px] left-16 w-20 h-20 z-0"
          src="assets/images/Supporting_element.svg"
          alt=""
        /> */}
          <div className="w-11/12 sm:w-10/12 mx-auto flex flex-col  md:flex-row justify-center items-center gap-8 md:gap-4 relative z-10">
            <div
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
              }}
              className="relative flex flex-col justify-center max-w-full md:max-w-[544px] h-auto sm:h-[400px] md:h-[450px] xl:h-[334px] bg-white p-8 md:px-8 md:py-4 lg:p-10  w-full  lg:w-6/12 lg:mr-5 rounded-2xl gap-8"
            >
              <div className="flex flex-col justify-center">
                <img src="assets/images/No_KYC.svg" className="w-18" alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className=" font-Inter text-dark-900 text-5 font-semibold ">
                  Zero Knowledge KYC
                </h2>
                <p className="font-Inter text-dark-900 text-4 font-normal -mt-2">
                  We use zero-knowledge proofs to keep our uses safe while
                  upholding their privacy. With zkKYC we don't hold any PII,
                  only peers can request each others personal info in cases of dispute.
                </p>
              </div>
            </div>
            <div
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
              }}
              className="relative flex flex-col justify-center max-w-full md:max-w-[544px] h-auto sm:h-[400px] md:h-[450px] xl:h-[334px] bg-white p-8 md:px-8 md:py-4 lg:p-10  w-full  lg:w-6/12 lg:mr-5 rounded-2xl gap-8"
            >
              <div className="flex flex-col justify-center">
                <img src="assets/images/Oracles.svg" className="w-18" alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className=" font-Inter text-dark-900 text-5 font-semibold ">
                  Hybrid Oracles
                </h2>
                <p className="font-Inter text-dark-900 text-4 font-normal -mt-2">
                  We enable a hybrid model where our smart contracts are
                  designed in a manner that lets the community decide on
                  enabling deterministic and objective oracles for specific
                  payment methods and tokens as and when they become available
                  and feasible.
                </p>
              </div>
              <img
                className="hidden md:block absolute -bottom-12 -right-12 w-20 h-20 -z-10"
                src="assets/images/Supporting_element.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesNew;
