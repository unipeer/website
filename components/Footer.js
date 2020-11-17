export default function Footer() {
  return (
    <div className="p-6" id="footer">
      <div>
        Join our <br />
        <div className="u-social-links">
          <img src="/assets/images/telegram.png" />
          <img src="/assets/images/discord.png" />
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
