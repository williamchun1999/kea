import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { axiosInstance  } from "../../axios";


export const useDeleteUserFromFriendsList = async (
  url: string,
  axiosConfigOptions?: AxiosRequestConfig
):Promise<AxiosResponse | null> => {
    try {
      const response = await axiosInstance.delete(url, axiosConfigOptions)
      console.log('response status is: ', response.status);
      console.log('response data is: ', response.data);
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
  
        