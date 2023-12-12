import CenterContent from "@/components/CenterContent";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { getServerSession } from "next-auth";
import Head from "next/head";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      <Head>
        <title>Responsive Layout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        {session && <LeftSidebar />}
        <CenterContent />
        {session && <RightSidebar />}
      </div>
    </>
  );
}
