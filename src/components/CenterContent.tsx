import SessionProviderWrapper from "@/utils/SessionProviderWrapper";
import AuthStatus from "./AuthStatus";
import Image from "next/image";

export default async function CenterContent() {
  return (
    <div className="flex justify-center items-center flex-grow flex-col p-4 overflow-auto ">
      <Image
        className="my-10"
        src="https://registry-dev.syntheticabio.net/assets/images/ry_logo.svg"
        alt="Description"
        width="200"
        height="100"
      />
      <SessionProviderWrapper>
        <AuthStatus />
      </SessionProviderWrapper>
    </div>
  );
}
