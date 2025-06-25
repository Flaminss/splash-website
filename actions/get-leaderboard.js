"use server";

const buildUrlPackdraw = (month, year) => {
  const API_BASE_URL = "https://packdraw.com/api/v1/affiliates/leaderboard?after=";
  const API_KEY = "e174b184-87d4-47e4-85da-1fac082d9461";
  const time = `${month}-19-${year}`;
  return `${API_BASE_URL}${time}&apiKey=${API_KEY}`;
};

const buildUrlCsgobig = (timestamp) => {
  const API_BASE_URL = "https://csgobig.com/api/partners/wagerStats/gumbocbp3K8GU8vDZY5NjfS";
  return `${API_BASE_URL}?time=${timestamp}`;
};

const callCasinoAffiliateAPI = async (from, to) => {
  const url = "https://example-casino.com/affiliate/creator/get-stats"; // Replace with the real base URL
  const payload = {
    apikey: "92157a2e-8d0a-483b-b220-22d64aa773b0", // Replace with your actual API key
    from: from || "2024-01-01",
    to: to || "2024-01-31",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!data.error) {
      return data;
    } else {
      console.error("Casino API Error:", data.msg);
    }
  } catch (error) {
    console.error("Casino API Request Failed:", error);
  }

  return null;
};

export const getLeaderboard = async (
  selectedLeaderboard,
  month,
  year,
  timestamp,
  fromDate,   // YYYY-MM-DD
  toDate      // YYYY-MM-DD
) => {
  let url;

  if (selectedLeaderboard === "packdraw") {
    url = buildUrlPackdraw(month, year);
  } else if (selectedLeaderboard === "csgobig") {
    url = buildUrlCsgobig(timestamp);
  }

  if (url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.leaderboard?.length > 0) return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  } else if (selectedLeaderboard === "casinoAffiliate") {
    return await callCasinoAffiliateAPI(fromDate, toDate);
  }

  return null;
};
