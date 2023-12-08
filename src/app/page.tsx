import CenterContent from "@/components/CenterContent";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive Layout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main container */}
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        {/* Left sidebar - hidden on small screens */}
        <LeftSidebar />

        {/* Center content */}
        <CenterContent />

        {/* Right sidebar - hidden on medium screens */}
        <RightSidebar />
      </div>
    </>
  );
}
