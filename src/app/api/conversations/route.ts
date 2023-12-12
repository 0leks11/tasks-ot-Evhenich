import { fetchFromAPI } from "@/utils/helpers";
import { NextRequest } from "next/server";

export const conversationsHandler = async (request: NextRequest) => {
  return fetchFromAPI(request, "conversations", { size: "20" });
};

export { conversationsHandler as GET };
