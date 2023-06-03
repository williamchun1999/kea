// import axios from 'axios';
// import { useState, useCallback } from 'react';




// export const useCreateUser = <T,>(
//   url: string,
//   headers?: T
// ): {
//   post: (data: T) => Promise<void>,
//   loading: boolean,
//   error: string | null,
//   createUserResponse: T | null,
//   setError:(errorMsg: string) => void,
// } => {

//   const [createUserResponse, setResponseData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const post = useCallback(
//     async (data: T) => {
//       console.log('post function called')
   
//         setLoading(true);
  
//         axios
        
//         .post(url, data)
        
//         .then((res: any) => {
//           console.log("run")
//           setResponseData(res.data.message)
//           console.log(createUserResponse)
//         })
  
//         .catch((err: any) => {
//           // console.log(err.response.data.message)
//           // setError(err.response.data.message)
        
//         })
  
//         .finally(() => setLoading(false))
        

//     },
//     []
//   );

//   return { createUserResponse, loading, error, post, setError };
// };


