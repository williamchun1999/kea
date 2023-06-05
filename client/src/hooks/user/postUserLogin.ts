import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";
import { axiosInstance } from "../../axios";
export interface BodyData {
  email: string | null;
  password: string | null;
}

export const usePostUserLogin = async (
  url: string,
  body: BodyData,
  axiosConfigOptions?: AxiosRequestConfig
): Promise<AxiosResponse | null> => {
  try {
    const response = await axiosInstance.post(url, body, axiosConfigOptions);
    console.log(response.data);
    console.log("response status is: ", response.status);
    return response;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log("error message: ", err.message);
      return null;
    } else {
      console.log("unexpected error: ", err);
      return null;
    }
  }
};
