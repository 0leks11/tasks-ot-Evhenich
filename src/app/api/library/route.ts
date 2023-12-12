import { fetchFromAPI } from "@/utils/helpers";
import { NextRequest } from "next/server";

export const documentsSearchHandler = async (request: NextRequest) => {
  return fetchFromAPI(request, "documents/search", {
    size: "20",
    isDefault: "true",
  });
};

export { documentsSearchHandler as GET };
