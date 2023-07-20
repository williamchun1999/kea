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
    const [isError, setIsError] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    //hooks for the createUser 
    const url = "/login"

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
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        console.log('submitting');
        try {
            const result = await usePostUserLogin(url, formData);
            console.log('result', result);
            if (result === null || result.status !== 200) {
                setIsError(true);
            }
            else {
                navigate("/kea/home")
            }

        }
        catch (error) {
            setIsError(true);
            console.log("ERROR: ", error)
        }

    }
    return (
        <div className="div bg-base-200 h-screen">
            <div className="flex flex-col gap-5 p-4">
                <h1 className="text-5xl mt-40 tracking-wider text-center">Log In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
                    <TextBox title="Email" name="email" value={formData.email} controlInput={handleChange} type="text" />
                    <TextBox title="Password" name="password" value={formData.password} controlInput={handleChange} type="password" />
                    <div className="mt-10 flex flex-col">
                        <Button name="Log In" color="bg-primary" />
                        <Link to="/signup">
                            <Button name="Sign Up" color="bg-primary" />
                        </Link>
                    </div>
                </form>
            </div>
            {isError &&
                <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Login Failed</span>
                </div>
            }
        </div>
    )
}


