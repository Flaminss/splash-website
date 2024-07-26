"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import { Suspense, useState } from "react";
import "../../styles/leaderboardpage.css";

import Leaderboard from "@/components/leaderboard/Leaderboard";
import { PastWinnersList } from "@/components/leaderboard/PastWinnersList";

export default function Page() {
  const [selectedLeaderboard, setSelectedLeaderboard] = useState("packdraw");

  return (
    <>
      <Header />
      <Hero content={false} img="/images/leaderboard__bg.png" />

      <div className="leaderboard__toggle">
        <button
          className={selectedLeaderboard === "packdraw" ? "active" : ""}
          onClick={() => setSelectedLeaderboard("packdraw")}
        >
          <img
            src="/images/packdraw.png"
            alt="Packdraw"
            className="leaderboard__toggle-image packdraw"
          />
        </button>
        <button
          className={selectedLeaderboard === "csgobig" ? "active" : ""}
          onClick={() => setSelectedLeaderboard("csgobig")}
        >
          <img
            src="/images/csgobig.png"
            alt="CSGOBig"
            className="leaderboard__toggle-image csgobig"
          />
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Leaderboard selectedLeaderboard={selectedLeaderboard} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <PastWinnersList />
      </Suspense>

      <Footer />
    </>
  );
}
