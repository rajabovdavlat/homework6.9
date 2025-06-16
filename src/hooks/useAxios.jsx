import axios from "axios";
import React, { useEffect, useState } from "react";

let BASE_URL = "";

const params = "/data/data.json";

function useAxios() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    BASE_URL = `${window.location.origin}`;
  }, []);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL + params);
      setData(response.data.condidate);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  return { data, error, loading };
}

export default useAxios;
