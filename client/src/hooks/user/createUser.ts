
import axios from 'axios';
import { useState, useCallback } from 'react';

export const useCreateUser = <T,>(
  url: string,
  headers?: HeadersInit
): {
  post: (data: T) => Promise<void>,
  loading: boolean,
  error: string | null,
  createUserResponse: T | null
} => {

  const [createUserResponse, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const post = useCallback(
    async (data: T) => {
      setLoading(true);

      axios
      
      .post(url, data)

      .then((res: any) => setResponseData(res.data))

      .catch((err: any) => {
        setError(err)
      })

      .finally(() => setLoading(false))
    },
    []
  );

  return { createUserResponse, loading, error, post };
};


