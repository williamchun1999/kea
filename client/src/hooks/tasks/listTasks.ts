import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { axiosInstance  } from "../../axios";

type ListTasksResponse = Array<{
  id: string,
  userId: string,
  taskName: string,
  taskType: string,
  taskCompleted: boolean,
  taskProgress: number | null,
  taskProgressTotal: number | null,
}>

export const useListTasks = async (
  url: string,
  axiosConfigOptions?: AxiosRequestConfig
):Promise<AxiosResponse<ListTasksResponse> | null> => {
    try {
      const response = await axiosInstance.get(url, axiosConfigOptions)
      console.log('response status is: ', response.status);
      return response;
    }
    catch (err) {
      if (isAxiosError(err)) {
        console.log("Axios error: ", err);
        return null;
      } else {
        console.log("unexpected error: ", err);
        return null;
      }
    }
  }
  
        