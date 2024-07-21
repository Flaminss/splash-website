import Card from "@/components/common/Card";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import "../../styles/bonuses.css";
import "../../styles/card.css";

export default function Bonuses() {
  return (
    <>
      <Header />
      <Hero content={false} img="/images/hero__bonuses.png" />

      <div className="partners">
        <div className="container">
          <div className="partner">
            <img src="/images/partners__title.png" alt="" />

            <div className="partner__card">
              <div className="card card-top">
                <div className="title">
                  <img
                    src="/images/csgo-roll.png"
                    alt="CSGO Roll"
                    className="title__img csgo-roll"
                  />
                </div>
                <div className="rewards">
                  <h3>Rewards</h3>
                  <p>DAILY FREE CASES + RAKEBACK</p>
                  <p>5% DEPOSIT BONUS</p>
                  <p>DAILY DEPOSIT GIVEAWAYS</p>
                </div>
                <p className="use__code">Use Code</p>
                <div className="card__btn">
                  <a href="https://csgoroll.com/r/SPLASHCS" className="btn__card">
                    SPLASHCS
                  </a>
                </div>
              </div>
              <div className="card card-bottom">
                <div className="title">
                  <img
                    src="/images/packdraw.png"
                    alt="Packdraw"
                    className="title__img packdraw"
                  />
                </div>
                <div className="rewards">
                  <h3>Rewards</h3>
                  <p>DAILY FREE CASES</p>
                  <p>5% DEPOSIT BONUS</p>
                  <p>COMPETE IN MONTHLY RACE</p>
                </div>
                <p className="use__code">Use Code</p>
                <div className="card__btn">
                  <a href="https://packdraw.com?ref=Splash" className="btn__card">
                    SPLASH
                  </a>
                </div>
              </div>
              <div className="card card-top">
                <div className="title">
                  <img
                    src="/images/clash.png"
                    alt="Clash"
                    className="title__img clash"
                  />
                </div>
                <div className="rewards">
                  <h3>Rewards</h3>
                  <p>DAILY FREE CASES + RAKEBACK</p>
                  <p>5% DEPOSIT BONUS</p>
                  <p>COMPETE IN MONTHLY RACE</p>
                </div>
                <p className="use__code">Use Code</p>
                <div className="card__btn">
                  <a href="https://clash.gg/r/SPLASHCS" className="btn__card">
                    SPLASHCS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="others">
        <div className="container">
          <div className="other">
            <img src="/images/other.png" alt="" />

            <div className="other__card">
              <div className="other__card--item">
                <div className="card card-top">
                  <div className="title">
                    <img
                      src="/images/stake.png"
                      alt="Stake"
                      className="title__img stake"
                    />
                  </div>
                  <div className="rewards">
                    <h3>Rewards</h3>
                    <p>DAILY $1 RELOAD</p>
                    <p>DAILY 10,000 GOLD COINS</p>
                    <p>INSTANT RAKEBACK + BONUSES</p>
                  </div>
                  <p className="use__code">Use Code</p>
                <div className="card__btn">
                  <a href="https://stake.us/?c=Splash" className="btn__card">
                      SPLASH
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamble__area">
        <div className="container">
          <div className="gamble">
            <h3>Gamble Responsibly</h3>
            <p>
              For more information and advice visit{" "}
              <a href="#">begambleaware.org</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
