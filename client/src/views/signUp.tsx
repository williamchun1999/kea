import { ChangeEventHandler, FormEventHandler , useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import { useCreateUser } from '../hooks/user';
import { TextBox } from "../components/Form";
import { Button } from "../components/button/button";



  export interface User {
    fName: string
    lName: string
    userName: string
    email: string
    password: string
  }
  

export const SignUp=()=> {
    //hooks for the createUser 
    const url = "http://localhost:3000/signup"
    const { error, post} = useCreateUser<User>(url)

    //navigating 
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fName:"",
        lName:"",
        userName:"",
        email:"",
        password:"",
        passwordC:""
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
     const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {


        event.preventDefault()

        
        //usecallback call 
         post(formData) 
        
        
        //if ()
            if (error){
                //error page 
                console.log("ERROR")
            }
            navigate("/")
        

        console.log(formData)
    }

    return (
        <div className="div bg-base-200 h-screen">
            <div className="flex flex-col gap-5 bg-base-200">
            <h1 className="text-5xl mt-10 ml-10 tracking-wider">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <TextBox title="First Name" name="fName" value={formData.fName}  controlInput = {handleChange}/> 
                <TextBox title="Last Name" name="lName" value={formData.lName} controlInput = {handleChange}/> 
                <TextBox title=" username" name="userName" value={formData.userName} controlInput = {handleChange}/> 
                <TextBox title="Email" name="email" value={formData.email}  controlInput = {handleChange}/> 
                <TextBox title="Password" name="password" value={formData.password}  controlInput = {handleChange}/> 
                <TextBox title="Password Confirmation" name="passwordC" value={formData.passwordC} controlInput = {handleChange} /> 
                <div className="mt-10 flex flex-col">
                <Button name="Sign Up" color="bg-primary" />
                <Link to="/login">
                    <Button name="Login" color="bg-primary" />
                </Link>
                </div>
            </form>
            </div>
        </div>
    )
}

  
  