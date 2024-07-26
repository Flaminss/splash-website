import Link from "next/link";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer__area">
      <div className="container">
        <div className="footer">
          <div className="footer__left">
            <Link href="/">Home</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/bonuses">Bonuses</Link>
          </div>
          <div className="footer__middle">
            <img src="/images/footer__logo.png" alt="" />
          </div>
          <div className="footer__right">
            <a href="#">Challenges</a>
            <a href="#">Social</a>
            <a href="#">Register</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            18+ | Gamble Responsibly | BeGambleAware. Most people gamble for fun
            and enjoyment. Do not think of gambling as a way to make money.
          </p>

          <div className="footer__bottom--right">
            <p>Site by</p>
            <a href="https://biggzie.net/" target="_blank" rel="noopener noreferrer">
              <img src="/images/footer__bottom--logo.png" alt="Site by Biggzie" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
