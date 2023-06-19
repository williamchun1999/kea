import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { axiosInstance } from "../../axios";

export interface UserData {
  fName: string
  lName: string
  userName: string
  email: string ;
  password: string;
  friends: string[];
}


export const useUpdateUser = async (
  url: string,
  body: UserData,
  axiosConfigOptions?: AxiosRequestConfig
): Promise<AxiosResponse | null> => {
  try {
    const response = await axiosInstance.put(url, body, axiosConfigOptions);
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
