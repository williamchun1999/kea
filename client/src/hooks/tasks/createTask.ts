import axios, { AxiosHeaders } from "axios";
import { useState, useCallback } from "react";

import { CreateTaskBody } from "../../common/responseTypes";

export const useCreateTask = (
  url: string,
  headers?: AxiosHeaders
): {
  post: (data: CreateTaskBody) => Promise<void>;
  loading: boolean;
  error: string | null;
  createTaskResponse: CreateTaskBody | null;
} => {
  const [createTaskResponse, setCreateTaskResponse] =
    useState<CreateTaskBody | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const post = useCallback(async (data: CreateTaskBody) => {
    setLoading(true);

    axios

      .post(url, data, { headers })

      .then((res: any) => setCreateTaskResponse(res.data))

      .catch((err: any) => {
        setError(err);
      })

      .finally(() => setLoading(false));
  }, []);

  return { createTaskResponse, loading, error, post };
};
