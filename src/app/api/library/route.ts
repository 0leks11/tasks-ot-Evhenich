import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const handler = async (request: NextRequest) => {
  const token = await getToken({ req: request });
  if (token) {
    // Signed in
    const res = await fetch(
      `${process.env.API_ROUTE}/documents/search?` +
        new URLSearchParams({
          size: "20",
          isDefault: "true",
        }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.access_token,
        },
      }
    );
    if (!res.ok)
      return NextResponse.json(
        { error: res.statusText },
        { status: res.status }
      );
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } else {
    // Not Signed in
    return NextResponse.json({}, { status: 401 });
  }
};

export { handler as GET };
