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

function useHandleAuthErrors(session, status) {
  useEffect(() => {
    if (status !== "loading" && session?.error === "RefreshAccessTokenError") {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);
}

function AuthActionButton({ session }) {
  const handleLogout = async () => {
    await keycloakSessionLogOut();
    signOut({ callbackUrl: "/" });
  };

  const handleLogin = async () => {
    await keycloakSessionSignin();
    signIn();
  };

  return session ? (
    <button
      className="bg-black font-bold text-white py-1 px-2 rounded border border-gray-50"
      onClick={handleLogout}
    >
      Log out
    </button>
  ) : (
    <button
      className="bg-black font-bold text-white py-1 px-2 rounded border border-gray-50"
      onClick={handleLogin}
    >
      Log in
    </button>
  );
}

export default function AuthStatus() {
  const { data: session, status } = useSession();

  useHandleAuthErrors(session, status);

  if (status === "loading") {
    return <div className="еext-black">Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <span className="text-black">{session ? "Logged in as" : "Not logged in."}</span>
      {session && <span className="text-black">{session.user.email}</span>}
      <AuthActionButton session={session} />
    </div>
  );
}