import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";

import { axiosInstance } from "../../axios";
import { UpdateTaskBody } from "../../common/responseTypes";


export const useUpdateTask = async (
  url: string,
  body: UpdateTaskBody,
  axiosConfigOptions?: AxiosRequestConfig
): Promise<AxiosResponse | null> => {
  if (body.taskName === "") {
    console.log("empty task name");
    return null
  }
  try {
    const response = await axiosInstance.patch(url, body, axiosConfigOptions);
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
