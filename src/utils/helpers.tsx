import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { FC } from "react";
import { signIn, signOut } from "next-auth/react";

export const renderSectionContent = (
  isLoading: boolean,
  items: any[],
  ItemComponent: FC<any>
) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return items.map((item) => <ItemComponent key={item.id} title={item.name} />);
};

export async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  } finally {
    signOut({ callbackUrl: "/" });
  }
}

export async function keycloakSessionSignin() {
  try {
    await fetch(`/api/auth/signin`, { method: "GET" });
  } catch (err) {
    console.error(err);
  } finally {
    signIn();
  }
}

import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function fetchFromAPI(
  request: NextRequest,
  apiEndpoint: string,
  queryParams: URLSearchParams
) {
  const token = await getToken({ req: request });
  if (!token) {
    return NextResponse.json({}, { status: 401 });
  }

  const url =
    `${process.env.API_ROUTE}/${apiEndpoint}?` +
    new URLSearchParams(queryParams);
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.access_token,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: res.statusText }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json({ data }, { status: 200 });
}
