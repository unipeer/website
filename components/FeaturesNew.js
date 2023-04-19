import React from "react";

const FeaturesNew = () => {
  return (
    <>
      <section className="bg-[#eff1ff] pb-20 pt-4 relative">
        <div className="">
          <h2 className=" font-Jost pl-6 lg:pl-0 text-left lg:text-3xl text-4xl lg:text-center py-6 font-bold text-[#111827] ">
            Why Choose Unipeer?
          </h2>
        </div>

        {/* sub1 */}
        <div className=" w-10/12 mx-auto flex flex-col  md:flex-row justify-center items-center mb-8 gap-8 md:gap-2 relative z-10">
          <div className="bg-white px-8 md:py-4 lg:h-[19rem] py-8  w-full  lg:w-6/12 lg:mr-5 rounded-lg  ">
            <img src="assets/images/Low_fee.svg" alt="" />
            <h2 className=" font-inter text-[#111827] ">Low Fees</h2>
            <p className="text-xl font-inter text-[#0A0F3F] ">
              Low protocol fees that’s not enabled by default. Sellers
              automatically optimize for payment methods that have zero-to-low
              fees for p2p transfers bringing the overall trading fees down.
            </p>
          </div>
          <div className="bg-white px-8 md:py-4 lg:h-[19rem] py-8  w-full  lg:w-6/12 lg:ml-5 rounded-lg ">
            <img src="assets/images/Dispute.svg" alt="" />
            <h2 className=" font-inter text-[#111827] ">
              Trustless Dispute Resolution
            </h2>
            <p className="text-xl  font-inter text-[#0A0F3F]">
              By using Kleros, an independent arbitration protocol for dispute
              resolution we maintain credible neutrality and decentralization of
              all parties.
            </p>
          </div>
        </div>

        {/* dot grid fill SVG */}
        <img
          className="hidden md:block absolute top-[96px] left-16 w-20 h-20 z-0"
          src="assets/images/Supporting_element.svg"
          alt=""
        />
        <div className=" w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center mb-8 gap-8 md:gap-2 relative z-10">
          <div className="bg-white px-8 md:py-4 lg:h-[22rem] py-8  w-full  lg:w-6/12 lg:mr-5 rounded-lg ">
            <img src="assets/images/No_KYC.svg" alt="" />
            <h2 className=" font-inter text-[#111827] ">No KYC</h2>
            <p className="text-xl  font-inter text-[#0A0F3F]">
              Since Unipeer is a non-custodial swapping protocol similar to
              Uniswap, there’s no need for KYC or collecting personal
              information of users. Non-custody of user funds is enabled by our
              escrow smart contracts.
            </p>
          </div>
          <div className="bg-white px-8 md:py-4 lg:h-[22rem] py-8   w-full   lg:w-6/12 lg:ml-5 rounded-lg">
            <img src="assets/images/Oracles.svg" alt="" />
            <h2 className=" font-inter text-[#111827] ">Hybrid Oracles</h2>
            <p className="text-xl  font-inter text-[#0A0F3F]">
              We enable a hybrid model where our smart contracts are designed in
              a manner that lets the community decide on enabling deterministic
              and objective oracles for specific payment methods and tokens as
              and when they become available and feasible.
            </p>
          </div>
        </div>
        <img
          className="hidden md:block absolute bottom-16 right-16 w-20 h-20 z-0"
          src="assets/images/Supporting_element.svg"
          alt=""
        />
      </section>
    </>
  );
};

export default FeaturesNew;
