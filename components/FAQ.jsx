import React from "react";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "How many crypto currencies do you support on the app?",
    answer: `We only support stablecoins of the local currency in the regions we are operating in. This helps
             us avoid exchange rate issues even at low liquidity and enable low friction on-boarding of users.
             You can find the latest list of supported coins on the dapp.`,
  },
  {
    question:
      "What are payment policies?",
    answer:
      `Payment policies are documents that govern the rules for dispute resolution in cases of payment issues or fraud by either party.
      See our docs for more details.`,
  },
  {
    question:
      "How do I get started?",
    answer: `See our documentation to learn more at https://docs.unipeer.exchange/start`,
  },
];

export default function FAQ() {
  return (
    <div
      className="relative px-5 md:px-20 xl:px-0 xl:max-w-6xl 2xl:max-w-7xl mx-auto"
      id="faq"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-6xl py-[56px] sm:py-16 lg:py-22">
          <div className="mx-auto divide-y divide-gray-900/10">
            <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 font-Jost text-left">
              Frequently asked questions
            </h2>
            <div className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <div>
                        <Disclosure.Button className="flex w-full items-center justify-between text-left text-gray-900">
                          <span className="w-fit font-Inter font-normal text-[18px] xl:text-[20px] text-dark-600 pr-4">
                            {faq.question}
                          </span>
                          <div className="flex w-[32px] h-[32px] justify-center items-center">
                            {open ? (
                              <img
                                src="assets/images/chevron-down.svg"
                                className="w-[32px] h-[32px] transform rotate-180"
                                alt=""
                              />
                            ) : (
                              <img
                                src="assets/images/chevron-down.svg"
                                className="w-[32px] h-[32px]"
                                alt=""
                              />
                            )}
                          </div>
                        </Disclosure.Button>
                      </div>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="font-Inter font-normal text-[17px] text-dark-500">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
