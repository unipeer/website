import React from "react";

export default function CTATwo() {
  return (
    <div>
      <div>
        <section className="w-full mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-2 mt-10 md:mb-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="md:w-6/12 mx-auto ">
            <img
              className="my-6 md:my-0"
              src="assets/images/Peer_Transfer.svg"
              alt=""
            />
          </div>
          <div className="md:w-6/12 mx-auto sm:text-center lg:text-left">
            <h2 className="font-Jost text-3xl leading-10 font-bold sm:text-[40px] sm:leading-none md:text-5xl text-dark-900">
              Onchain dispute resolution
            </h2>
            <p className=" font-Inter mt-3 text-xl text-dark-900 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Each fiat payment method is backed by a community reviewed policy
              that is used to resolve disputes between parties via the Kleros
              dispute resolution protocol. This ensures there’s no central party
              or a trusted group that is responsible for dispute resolution and
              cannot be backdoored.
            </p>
            <div className="mt-5 sm:mt-10 flex flex-row gap-2 lg:justify-start text-base">
              <a
                href="https://kleros.io"
                target="_blank"
                className="font-semibold font-Inter text-xl text-primary-500"
              >
                Learn more about Kleros
              </a>
              <img src="assets/images/external_link.svg" style={{}} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
