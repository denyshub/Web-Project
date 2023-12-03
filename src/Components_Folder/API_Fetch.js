import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json(); // Add 'await' here
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(true);
      }
    };

    fetchData();
  }, [url]); // Move the dependency array inside the useEffect

  return { loading, error, data };
};

export default useFetch;
