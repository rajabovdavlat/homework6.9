import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000"; 

const params = "/condidate";

function useAxios() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL + params);
      setData(response.data)
    } catch (error) {
       setError(error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  return { data, error, loading };
};

export default useAxios;
