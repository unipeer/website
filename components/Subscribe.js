import React from "react";

export default function Subscribe() {
  return (
    <div className="relative max-w-[924px] my-16  md:mb-20 mx-auto ">
      <div className="bg-primary-100 mx-5 flex flex-col-reverse justify-center items-center md:flex-row rounded-2xl p-4 sm:p-8 md:p-12 ">
        <div className="w-full flex flex-col justify-center items-center md:justify-start  md:items-start sm:w-8/12">
          <h2 className="font-Jost font-bold text-dark-900 text-2xl flex">
            Subscribe for updates{" "}
            <span className="hidden md:flex">&nbsp;from us</span>
          </h2>
          {/* <h2 className=" font-Jost text-[#020423] w-full text-xl md:text-xl md:hidden block">
            Subscribe for updates
          </h2> */}
          <form
            method="POST"
            className="py-4 w-full flex flex-col justify-center items-center md:justify-start md:items-start "
            name="newsletter"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required={true}
              className="font-Inter text-dark-200  block w-full md:w-[25rem] px-6 md:px-4 py-3 text-base appearance-none border border-dark-100  bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              style={{
                boxShadow: "0 6px 15px 2px rgba(0, 0, 0, 0.06)",
              }}
            />

            <button
              type="submit"
              className="mt-4 md:mt-12 font-Inter md:text-4 px-4 md:px-6 py-3 md:py-4 font-semibold text-white rounded-md bg-primary-500 hover:bg-primary-700 transition ease-in-out duration-150 w-full md:w-auto"
            >
              Send me updates
            </button>
          </form>
        </div>
        <div className="w-4/12 flex flex-row justify-center items-center">
          <img
            className="md:w-[183px]"
            src="assets/images/Subscribe.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
