import SessionProviderWrapper from "@/utils/SessionProviderWrapper";
import AuthStatus from "./AuthStatus";

export default async function CenterContent() {
  return (
    <div className="flex justify-center items-center flex-grow flex-col p-4 overflow-auto ">
      <p className="text-black">Ryght</p>
      <SessionProviderWrapper>
        <AuthStatus />
      </SessionProviderWrapper>
    </div>
  );
}
