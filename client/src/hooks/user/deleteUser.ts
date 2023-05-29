import  {useState, useEffect} from "react";
import axios from "axios";



export const useDeleteUser = <T>(
  url: string,
  
)=> {

  const[deleteUserData, setResponseData] = useState<T| null>(null)
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


  return { deleteUserData, error }
}

