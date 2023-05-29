import  {useState, useEffect} from "react";
import axios from "axios";

export const useListUsers = <T,>(
  url: string,
  mapFunction: (rawData: any) => (T | null)[]) => 
  
  {
  const [userData, setUserData] = useState<(T | null)[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true)

    axios
        .get(url)

        .then((res: any) => {
            setUserData(mapFunction(res.data))
        })

        .catch((err: any) => {
            setError(err)
        })

        .finally(() => {
            setLoading(false)
        })

  }, [])


  return { userData, loading, error };
};
