import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { axiosInstance } from "../../axios";
import {BodyData} from "./postUserLogin"

interface signUpBodyData extends BodyData {
  fName: string
  lName: string
  userName: string
  passwordC: string
}

export const useCreateUser = async (
  url: string,
  body: signUpBodyData,
  axiosConfigOptions?: AxiosRequestConfig
): Promise<AxiosResponse | null> => {
  try {
    const response = await axiosInstance.post(url, body, axiosConfigOptions);
    console.log(response.data);
    console.log("response status is: ", response.status);
    return response;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log("Axios error: ", err);
      return null;
    } else {
      console.log("unexpected error: ", err);
      return null;
    }
  }
};
