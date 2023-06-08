import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { axiosInstance  } from "../../axios";
import { Task } from "../../common/types";

export const useListTasks = async (
  url: string,
  axiosConfigOptions?: AxiosRequestConfig
):Promise<AxiosResponse<Array<Task>> | null> => {
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
  
        