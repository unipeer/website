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
          />
          <br />
          <br />
          <div
            style={{
              width: "176px",
              height: "56px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px",
              backgroundColor: "#fe5e44",
              color: "white",
            }}
          >
            Send me updates
            {/* <a
              href="https://app.unipeer.exchange"
              style={{ backgroundColor: "#fe5e44" }}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Send me updates
            </a> */}
          </div>
        </div>
        <div style={{ width: "200px" }}></div>
        <div style={{ width: "30%" }}>
          <img src="assets/images/Subscribe.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
