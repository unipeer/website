import React from "react";

export default function Subscribe() {
  return (
    <div
      className="relative max-w-screen-xl mx-auto"
      id="features"
      style={{
        paddingTop: "25px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          //   height: "293px",
          margin: "32px 260px 80px 256px",
          padding: "48px",
          borderRadius: "24px",
          backgroundColor: "#eff1ff",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "70%" }}>
          <h2>Subscribe for updates from us</h2>
          <form
            method="POST"
            className="py-4"
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
              style={{
                width: "403px",
                height: "48px",
                margin: "32px 242px 32px 0",
                padding: "16px",
              }}
              required={true}
              className="block sm:max-w-xs w-full px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />

            <button
              type="submit"
              style={{ backgroundColor: "#fe5e44", color: "white" }}
              className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150"
            >
              Send me updates
            </button>
          </form>
        </div>
        <div style={{ width: "200px" }}></div>
        <div style={{ width: "30%" }}>
          <img src="assets/images/Subscribe.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
