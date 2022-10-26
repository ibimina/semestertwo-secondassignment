import { useState, useEffect, useRef } from "react";
import { useErrorHandler } from "react-error-boundary";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const errorFun = useErrorHandler();

  useEffect(() => {
    const abortConst = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { signal: abortConst.signal });
        const data = await res.json();
        setLoading(false);
        setUsers(data.results);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("abort");
          setLoading(false);
        } else {
          errorFun(error.message);
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      abortConst.abort();
    };
  }, [url]);
  const filterNat = (nat) => {
    if (nat !== undefined) {
      setUsers((prev) => prev.filter((user) => nat.includes(user.nat) ));
      setUsers(prev=>prev.length==0?'':prev)
     
    }
  };

  const filterGen = (gen) => {
    setUsers((prev) => prev.filter((user) => gen.includes(user.gender)));
  
  };

  return { loading, users, filterNat, filterGen};
}
