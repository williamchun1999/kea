import { AxiosRequestConfig, isAxiosError } from "axios";
import { axiosInstance  } from "../../axios";
export interface BodyData {
  email: string | null
  password: string | null
}

type PostUserLoginResponse = {
  message: string;
}


export const usePostUserLogin = async (
  url: string,
  body: BodyData,
  axiosConfigOptions?: AxiosRequestConfig
):Promise<PostUserLoginResponse | string> => {
    try {
      const response = await axiosInstance.post(url, body, axiosConfigOptions)
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
  
        