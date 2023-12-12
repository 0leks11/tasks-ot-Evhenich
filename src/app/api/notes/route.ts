import { fetchFromAPI } from "@/utils/helpers";
import { NextRequest } from "next/server";

export const notesSearchHandler = async (request: NextRequest) => {
  return fetchFromAPI(request, "notes/search", { size: "20" });
};

export { notesSearchHandler as GET };
