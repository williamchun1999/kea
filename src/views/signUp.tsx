import {useState} from 'react'

import { TextBox } from "../components/Form";
import { Button } from "../components/button/button";


function signUp() {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        passwordC:""
    })
  

    //make controlled inputs from React's end

    function handleChange(event){

        setFormData(prev => {
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    //on pressing the signup button, the info is gathered and sent to db 
    function handleSubmit(event) {
        event.preventDefault()
        //write function to send to the db , for now just console log's the data that was inputted 
        console.log(formData)
    }
    return (
        <div className="div bg-base-200 h-screen">
            <div className="flex flex-col gap-5">
            <h1 className="text-5xl mt-20 ml-10 tracking-wider">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <TextBox title="First Name" name="firstName" value={formData.firstName}  controlInput = {handleChange}/> 
                <TextBox title="Last Name" name="lastName" value={formData.lastName} controlInput = {handleChange}/> 
                <TextBox title="Email" name="email" value={formData.email}  controlInput = {handleChange}/> 
                <TextBox title="Password" name="password" value={formData.password}  controlInput = {handleChange}/> 
                <TextBox title="Password Confirmation" name="passwordC" value={formData.passwordC} controlInput = {handleChange} /> 
                <Button name="Sign Up" color="bg-primary" />
            </form>
            </div>
        </div>
    )
}
  export default signUp;
  
  