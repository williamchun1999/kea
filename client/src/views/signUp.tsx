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
    const url = "http://localhost:4000/signup"
    const { error, post } = useCreateUser<User>(url)

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
        <div className="div bg-base-200 md:h-screen pt-8 md:pt-0 flex justify-center items-center">
      <div className="flex flex-col bg-base-200 ">
        <h1 className="text-5xl mb-10 tracking-wider text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex w-screen flex-wrap justify-center md:justify-start md:gap-2"
        >

        <div className="top md:flex md:flex-col md:items-center md:w-screen md:justify-center md:gap-4">
            <div className="firstrow md:flex">
                <div className="flex flex-col gap-4">
                <TextBox title="First Name" name="fName" value={formData.fName} controlInput={handleChange} type="text"/>
                </div>
                <div className="flex flex-col gap-4">
                <TextBox title="Last Name" name="lName" value={formData.lName} controlInput={handleChange} type="text"/>
                </div>
            </div>

            <div className="secondrow md:flex">
            <TextBox title="Email" name="email" value={formData.email} controlInput={handleChange} type="text"/>
            <TextBox title="Username" name="userName" value={formData.userName} controlInput={handleChange} type="text"/>
            </div>

            <div className="thirdrow md:flex">
            <TextBox title="Password" name="password" value={formData.password} controlInput={handleChange} type="password"/>
            <TextBox title="Password Confirmation" name="passwordC" value={formData.passwordC} controlInput={handleChange} type="password"/>
            </div>
            
        </div>

        <div className="bottom mt-10 w-screen">
            <div className="flex flex-col items-center">
                <Button name="Sign Up" color="bg-primary" />
                <Link to="/login">
                    <Button name="Login" color="bg-primary" />
                </Link>
            </div>
        </div>
       
        </form>
      </div>
    </div>
  );
};
