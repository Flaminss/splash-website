export const getTargetDate = (selectedLeaderboard) => {
  const date = new Date();
  if (selectedLeaderboard === "packdraw") {
    date.setUTCDate(date.getUTCDate() + 14); // Set for PackDraw
  } else if (selectedLeaderboard === "csgobig") {
    date.setUTCDate(date.getUTCDate() + 7); // Set for CSGOBig
  }
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
  return date;
};

export const getRemainingDays = (targetDate) => {
  const now = new Date();
  const diff = targetDate - now;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((diff / 1000 / 60) % 60);
  const second = Math.floor((diff / 1000) % 60);
  return { day, hour, minute, second };
};
