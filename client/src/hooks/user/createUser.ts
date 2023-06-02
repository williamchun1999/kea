import axios from 'axios';
import { useState, useCallback } from 'react';




export const useCreateUser = <T,>(
  url: string,
  headers?: T
): {
  post: (data: T) => Promise<void>,
  loading: boolean,
  error: string | null,
  createUserResponse: T | null,
} => {

  const [createUserResponse, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const post = useCallback(
    async (data: T) => {
      console.log('post function called')
      setLoading(true);

      axios
      
      .post(url, data)
      
      .then((res: any) => {
        console.log("run")
        setResponseData(res.data.message)
        //console.log(createUserResponse)
      })

      .catch((err: any) => {
        console.log("error")
        const msg = err.response.data.message
        setError(msg)
    
      })

      .finally(() => setLoading(false))
    },
    []
  );

  return { createUserResponse, loading, error, post };
};


