"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

async function keycloakSessionSignin() {
  try {
    await fetch(`/api/auth/signin`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function AuthStatus() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (status == "loading") {
    return <div className="еext-black">Loading...</div>;
  } else if (session) {
    return (
      <div className="flex flex-col">
        <span className="text-black">Logged in as</span>
        <span className="text-black">{session?.user?.email}</span>
        <button
          className="bg-black font-bold text-white py-1 px-2 rounded border border-gray-50"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <span className="text-black">Not logged in.</span>
      <button
        className="bg-black font-bold text-white py-1 px-2 rounded border border-gray-50"
        onClick={() => keycloakSessionSignin().then(() => signIn())}
      >
        Log in
      </button>
    </div>
  );
}
