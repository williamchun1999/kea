import axios from "axios";
import { useState, useCallback } from "react";

export const useUpdateTask = <T,>(
    url: string,
    headers?: HeadersInit
  ): {
    patch: (data: T) => Promise<void>,
    loading: boolean,
    error: string | null,
    updateTaskResponse: T | null
  } =>


  {

    const [updateTaskResponse, setResponseData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const patch = useCallback(
      async (data: T) => {
        setLoading(true);
  
        axios
        
        .patch(url, data)
  
        .then((res: any) => setResponseData(res.data))
  
        .catch((err: any) => {
          setError(err)
        })
  
        .finally(() => setLoading(false))
      },
      []
    );
  
    return { updateTaskResponse, loading, error, patch };
  };