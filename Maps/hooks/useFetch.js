import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    try {
      const { data: response } = await axios.get(url);
      setData(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, loading, error };
}
