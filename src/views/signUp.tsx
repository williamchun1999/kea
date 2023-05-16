import { ChangeEventHandler, FormEventHandler , useState  } from 'react';


import { TextBox } from "../components/Form";
import { Button } from "../components/button/button";


export const SignUp=()=> {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
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
        //write function to send to the db , for now just console log's the data that was inputted 
        console.log(formData)
    }
    return (
        <div className="div bg-base-200 h-screen">
            <div className="flex flex-col gap-5">
            <h1 className="text-5xl mt-20 ml-10 tracking-wider">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <TextBox title="First Name" name="firstName" value={formData.firstName}  controlInput = {handleChange}/> 
                <TextBox title="Last Name" name="lastName" value={formData.lastName} controlInput = {handleChange}/> 
                <TextBox title="Email" name="email" value={formData.email}  controlInput = {handleChange}/> 
                <TextBox title="Password" name="password" value={formData.password}  controlInput = {handleChange}/> 
                <TextBox title="Password Confirmation" name="passwordC" value={formData.passwordC} controlInput = {handleChange} /> 
                <div className="mt-10">
                    <Button name="Sign Up" color="bg-primary" />
                </div>
            </form>
            </div>
        </div>
    )
}

  
  