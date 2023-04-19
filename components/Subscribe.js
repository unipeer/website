import React from "react";

export default function Subscribe() {
  return (
    <div className="relative w-10/12 my-16  md:mb-10 mx-auto " id="features">
      <div className="bg-[#eff1ff] py-6  flex flex-col-reverse justify-center items-center md:flex-row rounded-2xl md:px-8 ">
        <div className="w-8/12 flex flex-col justify-center items-center md:justify-start  md:items-start ">
          <h2 className="font-Jost text-[#020423] text-4xl hidden md:block">
            Subscribe for updates from us
          </h2>
          <h2 className=" font-Jost text-[#020423] w-full text-xl md:text-xl md:hidden block">
            Subscribe for updates
          </h2>
          <form
            method="POST"
            className="py-4 flex flex-col justify-center items-center md:justify-start md:items-start"
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
              className="block md:w-[25rem] px-6 md:px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />

            <button
              type="submit"
              style={{ backgroundColor: "#fe5e44", color: "white" }}
              className=" font-Inter py-3 md:py-5 w-full md:w-8/12 px-6 md:px-4 mt-6 relative   block   border-transparent  text-base md:text-xl font-semibold leading-snug  text-white rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150"
            >
              Send me updates
            </button>
          </form>
        </div>
        <div className="w-4/12 flex flex-row justify-center items-center">
          <img className="md:w-40" src="assets/images/Subscribe.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
