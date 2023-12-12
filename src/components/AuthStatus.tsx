"use client";

import { keycloakSessionLogOut, keycloakSessionSignin } from "@/utils/helpers";
import { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

function useHandleAuthErrors(session: Session | null, status: string) {
  useEffect(() => {
    if (status !== "loading" && session?.error === "RefreshAccessTokenError") {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);
}

function AuthActionButton({ session }: { session: Session | null }) {
  return session ? (
    <button
      className="bg-black font-bold text-white py-1 px-2 rounded border border-gray-50"
      onClick={keycloakSessionLogOut}
    >
      Log out
    </button>
  ) : (
    <button
      className="bg-black font-bold text-white py-1 px-2 rounded border border-gray-50"
      onClick={keycloakSessionSignin}
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
      <span className="text-black">
        {session ? "Logged in as:" : "Not logged in."}
      </span>
      {session && (
        <span className="text-black font-bold">{session?.user?.email}</span>
      )}
      <AuthActionButton session={session} />
    </div>
  );
}
