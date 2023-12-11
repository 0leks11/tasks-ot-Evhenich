import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const handler = async (request: NextRequest) => {
  const token = await getToken({ req: request });
  if (token) {
    // Signed in
    const res = await fetch(
      `${process.env.API_ROUTE}/conversations?` +
        new URLSearchParams({
          size: "20",
        }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.access_token,
        },
      }
    );
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } else {
    // Not Signed in
    return NextResponse.json({}, { status: 401 });
  }
};

export { handler as GET };
