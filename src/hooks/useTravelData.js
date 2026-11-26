import { useState, useEffect } from "react";

function useTravelData() {
  const [travelData, setTravelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTravelData() {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}data/travelData.json`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch travel data");
        }

        const data = await response.json();

        setTravelData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTravelData();
  }, []);

  return { travelData, loading, error };
}

export default useTravelData;
