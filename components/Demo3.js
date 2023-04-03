export default function Demo3() {
  return (
    <div className="py-12 bg-white" id="overview">
      <div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#eff1ff", padding: "100px" }}
      >
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Why Choose Unipeer ?
          </h3>
          {/* <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            We've built Unipeer for the p2p market as a non-custodial solution
            to buy and sell crypto from each other using traditional payment
            systems in a completely decentralized manner.
          </p> */}
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li
              style={{
                padding: "40px 40px 48px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
                backgroundColor: "white",
              }}
            >
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img src="assets/images/Low_fee.svg" />
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Low Fees
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Low protocol fees that’s not enabled by default. Sellers
                    automatically optimize for payment methods that have
                    zero-to-low fees for p2p transfers bringing the overall
                    trading fees down.
                  </p>
                </div>
              </div>
            </li>
            <li
              className="mt-10 md:mt-0"
              style={{
                padding: "40px 40px 48px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
                backgroundColor: "white",
              }}
            >
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img src="assets/images/Dispute.svg" />
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Trustless Dispute Resolution
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    By using Kleros, an independent arbitration protocol for
                    dispute resolution we maintain credible neutrality and
                    decentralization of all parties.
                  </p>
                </div>
              </div>
            </li>
            <li
              className="mt-10 md:mt-0"
              style={{
                padding: "40px 40px 48px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
                backgroundColor: "white",
              }}
            >
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img src="assets/images/No_KYC.svg" />
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    No KYC
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Since Unipeer is a non-custodial swapping protocol similar
                    to Uniswap, there’s no need for KYC or collecting personal
                    information of users. Non-custody of user funds is enabled
                    by our escrow smart contracts.
                  </p>
                </div>
              </div>
            </li>
            <li
              className="mt-10 md:mt-0"
              style={{
                padding: "40px 40px 48px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)",
                backgroundColor: "white",
              }}
            >
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img src="assets/images/Oracles.svg" />
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Hybrid Oracles
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    We enable a hybrid model where our smart contracts are
                    designed in a manner that lets the community decide on
                    enabling deterministic and objective oracles for specific
                    payment methods and tokens as and when they become available
                    and feasible.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
