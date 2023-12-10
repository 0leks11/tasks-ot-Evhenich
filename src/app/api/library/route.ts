import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const handler = async (req: NextRequest) => {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });
  if (token) {
    // Signed in
    const res = await fetch(`${process.env.API_ROUTE}/document/search`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access_token,
      },
    });
    const result = await res.json();
    console.log({ result });
  } else {
    // Not Signed in
  }
  return NextResponse.json({}, { status: 200 });
};

export { handler as GET };
