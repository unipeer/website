import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div
      className="bg-[#020423] w-full px-6 py-16 flex flex-col justify-center  items-start md:items-center"
      id="footer"
    >
      <div>
        <img
          className="md:w-48"
          src="assets/images/Unipeer_Logo_white.svg"
          alt=""
        />
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-6 md:gap-6">
        <a
          href="https://app.unipeer.exchange/"
          target="https://app.unipeer.exchange/"
          className="font-Inter px-2 font-medium text-xl text-white-500 transition duration-150 ease-in-out"
        >
          Try on Testnet
        </a>
        <a
          href="/#features"
          className="font-Inter px-2 font-medium text-xl text-white-500 transition duration-150 ease-in-out"
        >
          Features
        </a>
        <a
          href="/#faq"
          className="font-Inter px-2 font-medium text-xl text-white-500 transition duration-150 ease-in-out"
        >
          FAQs
        </a>
        <a
          href="https://docs.unipeer.exchange"
          target="https://docs.unipeer.exchange"
          className="font-Inter px-2 font-medium text-xl text-white-500 transition duration-150 ease-in-out"
        >
          Docs
        </a>
      </div>

      <div className="w-[96%] md:w-11/12 mx-auto">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>

      <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8  md:gap-0">
        <div className="">
          <p className="font-Inter text-left md:text-xl font-bold text-base">
            &copy; {new Date().getFullYear()} Unipeer. All rights reserved
          </p>
        </div>
        <div className="flex felx-row justify-start items-start gap-6">
          <a
            href="https://twitter.com/unipeerdoteth"
            target="_blank"
            rel="noopener noreferr
            er"
          >
            <div className="flex flex-row justify-center items-center  w-10 h-10 dsdsd bg-[#1B1D38]  rounded-full">
              <BsTwitter className=" text-white  p-2 w-10 h-10  text-2xl md:text-2xl" />
            </div>
          </a>

          <a
            href="https://t.me/unipeerx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row justify-center items-center  w-10 h-10 dsdsd bg-[#1B1D38]  rounded-full">
              <FaTelegramPlane className=" text-white  p-2 w-10 h-10  text-2xl md:text-2xl" />
            </div>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row justify-center items-center  w-10 h-10 dsdsd bg-[#1B1D38]  rounded-full">
              <BsGithub className=" text-white  p-2 w-10 h-10  text-2xl md:text-2xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
