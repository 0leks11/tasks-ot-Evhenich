import { useEffect, useState } from "react";

export const useDataFetching = (setData: any, endpoint: string) => {
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setData, endpoint]);

  return { loading };
};
