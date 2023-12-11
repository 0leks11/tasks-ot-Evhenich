import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const handler = async (request: NextRequest) => {
  const token = await getToken({ req: request });
  const session = await getServerSession();
  console.log("handler: ", token?.id_token);
  if (session && token) {
    // Signed in
    const res = await fetch(
      `${process.env.KEYCLOACK_ISSUER}/protocol/openid-connect/logout?` +
        new URLSearchParams({
          id_token_hint: `${token?.id_token}`,
        })
    );
    return NextResponse.json({}, { status: 200 });
  } else {
    // Not Signed in
    return NextResponse.json({}, { status: 401 });
  }
};

export { handler as GET };
