import  {useState, useEffect} from "react";
import axios from "axios";


export const useDeleteTask = <T>(
  url: string,
  
)=> {

  const[deleteTaskResponse, setResponseData] = useState<T| null>(null)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    axios
      .delete(url)

      .then((res: any) => {
        setResponseData(res.data)
      })

      .catch((err: any) =>{
        setError(err)
      }
      )
  }, [])


  return { deleteTaskResponse, error }
}

