import "../../styles/card.css";

export default function Bonuses() {
  return (
    <div className="bonuses__area">
      <div className="container">
        <div className="bonuses">
          <div className="bonuses__img">
            <img src="/images/bonuses-1.png" alt="" className="small" />
            <img src="/images/bonuses-2.png" alt="" className="large" />
            <img src="/images/bonuses-3.png" alt="" className="small" />
          </div>
        </div>

        <div className="card__area">
          <div className="cards bonuses">
            <div className="card card-top">
              <div className="title">
                <img src="/images/csgo-roll.png" alt="CSGO Roll" className="title__img" />
              </div>
              <div className="rewards">
                <h3>Rewards</h3>
                <p>DAILY FREE CASES + RAKEBACK</p>
                <p>5% DEPOSIT BONUS</p>
                <p>DAILY DEPOSIT GIVEAWAYS</p>
              </div>
              <p className="use__code">Use Code</p>
              <div className="card__btn">
                <a href="https://csgoroll.com/r/SPLASHCS" className="btn__card">SPLASHCS</a>
              </div>
            </div>
            <div className="card card-bottom">
              <div className="title">
                <img src="/images/packdraw.png" alt="Packdraw" className="title__img" />
              </div>
              <div className="rewards">
                <h3>Rewards</h3>
                <p>DAILY FREE CASES</p>
                <p>5% DEPOSIT BONUS</p>
                <p>COMPETE IN MONTHLY RACE</p>
              </div>
              <p className="use__code">Use Code</p>
              <div className="card__btn">
                <a href="https://packdraw.com?ref=Splash" className="btn__card">SPLASH</a>
              </div>
            </div>
            <div className="card card-top">
              <div className="title">
                <img src="/images/clash.png" alt="Clash" className="title__img" />
              </div>
              <div className="rewards">
                <h3>Rewards</h3>
                <p>DAILY FREE CASES + RAKEBACK</p>
                <p>5% DEPOSIT BONUS</p>
                <p>COMPETE IN MONTHLY RACE</p>
              </div>
              <p className="use__code">Use Code</p>
              <div className="card__btn">
                <a href="https://clash.gg/r/SPLASHCS" className="btn__card">SPLASHCS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
