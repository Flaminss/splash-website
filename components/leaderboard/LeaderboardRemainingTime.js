"use client";

import { useEffect, useState } from "react";
import { getRemainingDays, getTargetDate } from "@/lib/utils";

export const LeaderboardRemainingTime = ({ selectedLeaderboard }) => {
  const [remainingTime, setRemainingTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      setRemainingTime(getRemainingDays(getTargetDate(selectedLeaderboard)));
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedLeaderboard]);

  return (
    <div className="leaderboard">
      <h3 className="title">Leaderboard is ending</h3>
      <p className="subtitle">
        The winners will be determined when the timer runs out
      </p>
      <div className="times__remaining">
        <div className="day">
          <p className="num">{remainingTime.day}</p>
          <p>Days</p>
        </div>
        <div className="hours">
          <p className="num">{remainingTime.hour}</p>
          <p>Hours</p>
        </div>
        <div className="mins">
          <p className="num">{remainingTime.minute}</p>
          <p>Minutes</p>
        </div>
        <div className="sec">
          <p className="num">{remainingTime.second}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};
