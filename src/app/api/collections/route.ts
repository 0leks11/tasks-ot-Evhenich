import { fetchFromAPI } from "@/utils/helpers";
import { NextRequest } from "next/server";

export const documentCollectionsSearchHandler = async (
  request: NextRequest
) => {
  return fetchFromAPI(request, "document-collections/search", { size: "20" });
};

export { documentCollectionsSearchHandler as GET };
