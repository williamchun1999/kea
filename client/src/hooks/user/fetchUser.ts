import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { axiosInstance  } from "../../axios";

type GetUserResponse = {
  id:string
  fName: string
  lName: string
  userName: string
  email:string
  friends: string[]
  password: string
}

export const useFetchUser = async (
  url: string,
  axiosConfigOptions?: AxiosRequestConfig
):Promise<AxiosResponse<GetUserResponse> | null> => {
    try {
      const response = await axiosInstance.get(url, axiosConfigOptions)
      // console.log('response status is: ', response.status);
      // console.log('response data is: ', response.data);
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

        