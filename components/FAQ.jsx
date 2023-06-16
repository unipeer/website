import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How many crypto currencies do you support on the app?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
  },
  {
    question:
      "Lorem ipsum dolor sit amet. Sed minus reiciendis est tempore facilis et laboriosam ",
    answer:
      "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet. Sed minus reiciendis est tempore facilis et laboriosam ",
    answer: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
  },
];

// function AccordionIcon() {
//   return (
//     <>
//       {" "}
//       <img
//         src="assets/images/chevron-down.svg"
//         className="w-[32px] h-[32px]"
//         alt=""
//       />
//     </>
//   );
// }

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
