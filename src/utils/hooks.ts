import { useEffect } from "react";

export const useDataFetching = (setData: any, endpoint: string) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`api/${endpoint}`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setData(data.data.content);
      } catch (error) {
        console.error(`Error with ${endpoint}:`, error);
      }
    };

    fetchData();
  }, [setData, endpoint]);
};
