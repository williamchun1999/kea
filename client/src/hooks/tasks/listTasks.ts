import { useState, useEffect } from "react";
import axios from "axios";

import { Task } from "../../common/types";

export const useListTasks = (url: string) => {
  const [taskList, setTaskList] = useState<(Task | null)[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)

      .then((res) => {
        setTaskList(res.data);
      })

      .catch((err: any) => {
        setError(err);
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { taskList, loading, error };
};
