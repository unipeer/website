export default function Footer() {
  return (
    <div className="p-6" id="footer">
      <div>
        Join our <br />
        <div className="u-social-links">
          <a href="https://t.me/unipeerx">
            <img src="/assets/images/telegram.png" />
          </a>
          <a href="https://discord.gg/tBFEdh2T8w">
            <img src="/assets/images/discord.png" />
          </a>
        </div>
      </div>
      <div>
        Contact Us <br />
        <br />
        hello@unipeer.exchange
      </div>
      <div className="u-terms-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/aml_kyc_policy">KYC/AML</a>
      </div>
    </div>
  );
}
