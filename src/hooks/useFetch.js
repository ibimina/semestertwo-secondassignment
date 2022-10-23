import { useState, useEffect } from "react";
import { useErrorHandler } from "react-error-boundary";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const errorFun = useErrorHandler();
 
  useEffect(() => {
   const abortConst = new AbortController();
   const fetchData = async () => {
     try {
       setLoading(true);
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

  return { loading, users };
}
