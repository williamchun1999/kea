import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useEffect,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUser } from "../hooks/user/createUser";
import { TextBox } from "../components/Form";
import { Button } from "../components/button/button";

export const SignUp = () => {
  //error handling states
  const [isError, setIsError] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  //navigating
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    userName: "",
    email: "",
    password: "",
    passwordC: "",
  });

  //hooks for the createUser
  const url = "http://localhost:3000/signup";

  //make controlled inputs from React's end
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  //on pressing the signup button, the info is gathered and sent to db
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      const result = await useCreateUser(url, formData);
      console.log("result", result);
      if (result === null || result.status !== 200) {
        setIsError(true);
      } else {
        setIsError(false);
        setIsSignupComplete(true);
      }
    } catch (error) {
      setIsError(true);
      console.log("ERROR:", error);
    }
  };

  //redirecting the user to the login page
  useEffect(() => {
    if (isSignupComplete) {
      const redirectTimeout = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => {
        clearTimeout(redirectTimeout);
      };
    }
  }, [isSignupComplete, navigate]);

  return (
    <div className="div bg-base-200 md:h-screen pt-8 md:pt-0 flex justify-center items-center">
      <div className="flex flex-col bg-base-200 ">
        <h1 className="text-5xl mb-10 tracking-wider text-center">Sign Up</h1>
        {isError && (
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>SignUp Failed</span>
          </div>
        )}
        {isSignupComplete && (
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Success! Redirecting back to landingpage...</span>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex w-screen flex-wrap justify-center md:justify-start md:gap-2"
        >
          <div className="top md:flex md:flex-col md:items-center md:w-screen md:justify-center md:gap-4">
            <div className="firstrow md:flex">
              <div className="flex flex-col gap-4">
                <TextBox
                  title="First Name"
                  name="fName"
                  value={formData.fName}
                  controlInput={handleChange}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <TextBox
                  title="Last Name"
                  name="lName"
                  value={formData.lName}
                  controlInput={handleChange}
                  type="text"
                />
              </div>
            </div>

            <div className="secondrow md:flex">
              <TextBox
                title="Email"
                name="email"
                value={formData.email}
                controlInput={handleChange}
                type="text"
              />
              <TextBox
                title="Username"
                name="userName"
                value={formData.userName}
                controlInput={handleChange}
                type="text"
              />
            </div>

            <div className="thirdrow md:flex">
              <TextBox
                title="Password"
                name="password"
                value={formData.password}
                controlInput={handleChange}
                type="password"
              />
              <TextBox
                title="Password Confirmation"
                name="passwordC"
                value={formData.passwordC}
                controlInput={handleChange}
                type="password"
              />
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
