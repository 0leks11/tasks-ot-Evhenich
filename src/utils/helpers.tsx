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
