import { AxiosRequestConfig, isAxiosError } from "axios";
import { axiosInstance  } from "../../axios";

type GetUserResponse = {
  id:string
  fName: string
  lName: string
  userName: string
  email:string
  friends: string[]
}

export const useFetchUser = async (
  url: string,
  axiosConfigOptions?: AxiosRequestConfig
):Promise<GetUserResponse | string> => {
    try {
      const response = await axiosInstance.get(url, axiosConfigOptions)
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
  
        