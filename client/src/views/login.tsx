import { ChangeEventHandler, FormEventHandler , useState  } from 'react';
import {Link} from "react-router-dom"

import { TextBox } from "../components/Form";
import { Button } from "../components/button/button";


export const Login=()=> {

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
     const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        //write function to send to the db , for now just console log's the data that was inputted 
        console.log(formData)
    }
    return (
        <div className="div bg-base-200 h-screen">
            <div className="flex flex-col gap-5">
            <h1 className="text-5xl mt-40 tracking-wider text-center">Log In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
                <TextBox title="Email" name="email" value={formData.email}  controlInput = {handleChange} type="text"/> 
                <TextBox title="Password" name="password" value={formData.password}  controlInput = {handleChange} type="password"/> 
                <div className="mt-10 flex flex-col">
                <Link to="/home">
                    <Button name="Log In" color="bg-primary" />
                </Link>
                <Link to="/signup">
                    <Button name="Sign Up" color="bg-primary" />
                </Link>
                </div>
            </form>
            </div>
        </div>
    )
}

  
  