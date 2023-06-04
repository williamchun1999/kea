import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { usePostUserLogin } from '../hooks/user/postUserLogin';
import { TextBox } from "../components/Form";
import { Button } from "../components/button/button";

export interface ResponseData {
    message: string
}


export const Login = () => {
    //navigating 
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    //hooks for the createUser 
    const url = "http://localhost:3000/login"

    //make controlled inputs from React's end
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    //on pressing the signup button, the info is gathered and sent to db 
    const handleSubmit: FormEventHandler<HTMLFormElement> = async(event) => {
        event.preventDefault()
        try {
            const result =  await usePostUserLogin(url, formData);
            console.log(formData)
            console.log('C: ', result)
            navigate("/home")
        }
       catch (error) {
        navigate("/")
        console.log("ERROR: ", error)
       }
        
    }
    return (
        <div className="div bg-base-200 h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl mt-20 ml-10 tracking-wider">Log In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <TextBox title="Email" name="email" value={formData.email} controlInput={handleChange} />
                    <TextBox title="Password" name="password" value={formData.password} controlInput={handleChange} />
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


