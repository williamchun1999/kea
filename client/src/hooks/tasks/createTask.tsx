import axios from 'axios';
import { useState, useCallback } from 'react';

export const useCreateTask = <T,>(
  url: string,
  headers?: HeadersInit
): {
  post: (data: T) => Promise<void>,
  loading: boolean,
  error: string | null,
  createTaskResponse: T | null
} => {

  const [createTaskResponse, setResponseData] = useState<T | null>(null);
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

  return { createTaskResponse, loading, error, post };
};

