import { getLeaderboard } from "@/actions/get-leaderboard";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * @param {import("next/server").NextRequest} request
 */
export const POST = async (request) => {
  try {
    const body = await request.json();

    const {
      source,       // "packdraw", "csgobig", "casinoAffiliate"
      month,
      year,
      timestamp,
      fromDate,     // for casinoAffiliate: "YYYY-MM-DD"
      toDate        // for casinoAffiliate: "YYYY-MM-DD"
    } = body;

    const data = await getLeaderboard(
      source,
      month,
      year,
      timestamp,
      fromDate,
      toDate
    );

    return NextResponse.json({
      message: "Success",
      data,
    });
  } catch (error) {
    console.error("POST /api/leaderboard error:", error);
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      { status: 500 }
    );
  }
};
