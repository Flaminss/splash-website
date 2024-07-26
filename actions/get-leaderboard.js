"use server";

const buildUrlPackdraw = (month, year) => {
  const API_BASE_URL =
    "https://packdraw.com/api/v1/affiliates/leaderboard?after=";
  const API_KEY = "e174b184-87d4-47e4-85da-1fac082d9461";
  const time = `${month}-19-${year}`;
  return `${API_BASE_URL}${time}&apiKey=${API_KEY}`;
};

const buildUrlCsgobig = (timestamp) => {
  const API_BASE_URL =
    "https://csgobig.com/api/partners/wagerStats/gumbocbp3K8GU8vDZY5NjfS?time=1685577600000";
  return `${API_BASE_URL}?time=${timestamp}`;
};

export const getLeaderboard = async (
  selectedLeaderboard,
  month,
  year,
  timestamp
) => {
  let url;
  if (selectedLeaderboard === "packdraw") {
    url = buildUrlPackdraw(month, year);
  } else if (selectedLeaderboard === "csgobig") {
    url = buildUrlCsgobig(timestamp);
  }
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data?.leaderboard?.length > 0) {
      return data;
    } else {
      // console.log("Error", data);
    }
  } catch (error) {
    // console.error(error);
  }
  return null;
};
