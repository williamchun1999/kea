import { AxiosRequestConfig, isAxiosError } from "axios";
import { axiosInstance  } from "../../axios";



export const useUserLogout = async (
  url: string,
  axiosConfigOptions?: AxiosRequestConfig
):Promise<any> => {
    try {
      const response = await axiosInstance.get(url, axiosConfigOptions)
      console.log(response.data)
      console.log('response status is: ', response.status);
      return response.data;
    }
    catch (err) {
      if (isAxiosError(err)) {
        console.log('error message: ', err.message);
        return err.message;
      }
      else {
        console.log('unexpected error: ', err);
        return 'An unexpected error occured';
      }
    }
  }
  
        