import  {useState, useEffect} from "react";
import axios from "axios";

export const useListTasks = <T,>(
  url: string,
  mapFunction: (rawData: any) => (T | null)[]) => 
  
  {
  const [taskData, setData] = useState<(T | null)[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true)

    axios
        .get(url)

        .then((res) => {
            setData(mapFunction(res.data))
        })

        .catch((err : any) => {
            setError(err)
        })

        .finally(() => {
            setLoading(false)
        })

  }, [])

  
  return { taskData, loading, error };
};
