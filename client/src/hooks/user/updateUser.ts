import axios from "axios";
import { useState, useCallback } from "react";


import {User} from "./createUser"

export const useUpdateTask = <T extends User,>(
    url: string,
    headers?: HeadersInit
  ): {
    patch: (data: T) => Promise<void>,
    loading: boolean,
    error: string | null,
    updateUserResponse: T | null
  } =>


  {

    const [updateUserResponse, setResponseData] = useState<T | null>(null);
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
  
    return { updateUserResponse, loading, error, patch };
  };