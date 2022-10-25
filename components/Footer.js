export default function Footer() {
  return (
    <div className="p-6" id="footer">
      <div>
        Join our <br />
        <div className="u-social-links">
          <a href="https://t.me/unipeerx">
            <img src="/assets/images/telegram.png" />
          </a>
          {/*
          <a href="https://discord.gg/CBvGgQak5J">
            <img src="/assets/images/discord.png" />
          </a>
            */}
          <a href="https://github.com/unipeer">
            <img src="/assets/images/github.png" />
          </a>
        </div>
      </div>
      <div>
        Contact Us <br />
        <br />
        hello@unipeer.exchange
      </div>
    </div>
  );
}
