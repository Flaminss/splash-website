import "../../styles/leaderboard.css";
import Link from "next/link";

export default function Leaderboard() {
  return (
    <div className="leaderboard__area">
      <div className="leaderboard">
        <div className="container">
          <img src="/images/leaderboard.png" alt="" />
          <div className="leaderboard__btn">
            <Link href="/leaderboard" className="btn__round">
              View Leaderboards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
