import { ChangeEventHandler, FormEventHandler , useState  } from 'react';
import {Link, useNavigate} from "react-router-dom"
import { useCreateUser } from '../hooks/user/createUser';
import { TextBox } from "../components/Form";
import { Button } from "../components/button/button";


export interface Login {
    email: string
    password: string
}


export const Login=()=> {

    
    //hooks for the createUser 
    const url = "http://localhost:3000/login"
    const { error, post} = useCreateUser<Login>(url)
    
    //navigating 
    const navigate = useNavigate()


    /*function mapUserListData(rawData: any): IUser {
        return rawData.map((usersData: any) => {
          const { fName, lName, userName, email, password, friends  } = usersData
    
          return{
            fName: fName,
            lName: lName,
            userName: userName,
            email: email,
            password: password,
            friends: friends
          }
        })
      }*/



    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
  


    //make controlled inputs from React's end
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData(prev => {
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    //on pressing the signup button, the info is gathered and sent to db 
     const handleSubmit: FormEventHandler<HTMLFormElement> = async(event) => {
        event.preventDefault()
       

        //usecallback call 
        await post(formData) 
                
        //if ()
        if (error){
            navigate("/")
            console.log("ERROR")
            return
        } else{
            navigate("/home")
        }


        console.log(formData)
    }
    return (
        <div className="div bg-base-200 h-screen">
            <div className="flex flex-col gap-5">
            <h1 className="text-5xl mt-20 ml-10 tracking-wider">Log In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <TextBox title="Email" name="email" value={formData.email}  controlInput = {handleChange}/> 
                <TextBox title="Password" name="password" value={formData.password}  controlInput = {handleChange}/> 
                <div className="mt-10 flex flex-col">
                    <Button name="Log In" color="bg-primary" />
                <Link to="/signup">
                    <Button name="Sign Up" color="bg-primary" />
                </Link>
                </div>
            </form>
            </div>
        </div>
    )
}

  
  