export default function Footer() {
  return (
    <div
      className="p-6"
      id="footer"
      style={{
        backgroundColor: "#020423",
        display: "flex",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <img
          src="assets/images/Unipeer_Logo_white.svg"
          alt=""
          style={{ height: "8%", width: "8%" }}
        />
      </div>
      <div
        className="hidden md:block md:ml-10 md:pr-4"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0px 10px 0px",
        }}
      >
        <a
          href="/#features"
          className="ml-8 font-medium text-white-500 transition duration-150 ease-in-out"
        >
          Try on Testnet
        </a>
        <a
          href="https://docs.unipeer.exchange"
          target="_blank"
          className="ml-8 font-medium text-white-500 transition duration-150 ease-in-out"
        >
          Features
        </a>
        <a
          href="https://docs.unipeer.exchange"
          target="_blank"
          className="ml-8 font-medium text-white-500 transition duration-150 ease-in-out"
        >
          FAQs
        </a>
        <a
          href="https://docs.unipeer.exchange"
          target="_blank"
          className="ml-8 font-medium text-white-500 transition duration-150 ease-in-out"
        >
          Docs
        </a>
        <a
          href="https://docs.unipeer.exchange"
          target="_blank"
          className="ml-8 font-medium text-white-500 transition duration-150 ease-in-out"
        >
          Privacy
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderBottom: "0.25px solid grey",
            width: "75%",
            height: "20px",
            marginBottom: "50px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "75%", display: "flex", flexDirection: "row" }}>
          <div
            style={{ width: "50%", display: "flex", justifyContent: "start" }}
          >
            © 2023 Unipeer. All rights reserved
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <img src="assets/images/Telegram.svg" />
            <img src="assets/images/Twitter.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
