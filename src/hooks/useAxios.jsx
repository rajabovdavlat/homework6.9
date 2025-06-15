import React, { useEffect, useState } from "react";

function useFetchData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Ошибка при загрузке");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, error, loading };
}

export default useFetchData;
