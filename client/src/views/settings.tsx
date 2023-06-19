import { useAsync } from "react-async-hook";
import { useFetchUser } from "../hooks/user/fetchUser";
import {
  DeleteButton,
  AddFriends,
  LogOutButton,
  EditUserButton,
} from "../components/button/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEventHandler } from "react";
import { useUpdateUser } from "../hooks/user/updateUser";
import { useDeleteUser } from "../hooks/user/deleteUser";

export const Settings = () => {
  //error
  const [isError, setIsError] = useState(false);
  const [isUpdateDone, setIsUpdateDone] = useState(false);
  const [showPopup, setShowPopup] = useState(0);
  const [isDeleteComplete, setIsDeleteComplete] = useState(false)

  //navigating
  const navigate = useNavigate();

  //make controlled input
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    userName: "",
    email: "",
    password: "",
    friends: [] as string[],
  });

  //API calls

  const { error, result, loading } = useAsync(async () => {
    // Get User Info API Call
    const userResponse = await useFetchUser("http://localhost:3000/settings");
    if (userResponse === null || userResponse.status !== 200) {
      throw new Error("Failed to fetch user");
    }
    return userResponse.data;
  }, []); 

  //setting the form to display current information fetched from the db
  useEffect(() => {
    if (result) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        fName: result.fName,
        lName: result.lName,
        userName: result.userName,
        email: result.email,
        password: result.password,
        friends: result.friends,
      }));
    }
  }, [result]);

  //make controlled inputs from React's end
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  

  //update user info API Call
  const handleSubmit = async (event) => {
    //hooks for the useUpdateUser
    const url = "http://localhost:3000/settings/updateUser";
    event.preventDefault();

    try {
      const result = await useUpdateUser(url, formData);
      // console.log('result', result);
      if (result === null || result.status !== 200) {
        setIsError(true);
      } else {
        setIsUpdateDone(true);
      }
    } catch (error) {
      setIsError(true);
      console.log("ERROR: ", error);
    }

    //for the popup message that the user info was changed
  };
  useEffect(() => {
    let timeout: number;
    if (isUpdateDone) {
      setShowPopup(1);
      timeout = setTimeout(() => {
        setShowPopup(0);
        setIsUpdateDone(false);
      }, 2000);
    }
    return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or isUpdateDone changes
  }, [isUpdateDone])

  //deleteUser API call 
  const handleDelete = async (event) => {
   

    event.preventDefault()
    
    try {
      const result = await useDeleteUser("http://localhost:3000/settings/deleteUser");
      // console.log('result', result);
      if (result === null || result.status !== 200) {
        setIsError(true);
      } else {
        setIsError(false)
        setIsDeleteComplete(true)
      }
    } catch (error) {
      setIsError(true);
      console.log("ERROR: ", error);
    }

  }

  //redirecting the user to the login page
  useEffect(() => {
    if (isDeleteComplete) {
      setShowPopup(2)
      const redirectTimeout = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => {
        clearTimeout(redirectTimeout);
      };
    }
  }, [isDeleteComplete, navigate]);
  return (
    <div>
      {error && <div>ERROR</div>}
      {showPopup && (
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
          <span>{showPopup == 1 ? "User Info Updated!" : "Account deleted Successfully!"}</span>
        </div>
      )}
      {result && (
        <>
          <h1 className="text-4xl pt-14 pb-5 mb-10 text-center bg-primary shadow-md">
            More
          </h1>
          <div className="flex flex-col gap-3">
            <EditUserButton
              fName={formData.fName}
              lName={formData.lName}
              email={formData.email}
              password={formData.password}
              userName={formData.userName}
              controlSubmit={handleSubmit}
              controlChange={handleChange}
            />
            <AddFriends />
            <DeleteButton userName={result.userName} controlDelete={handleDelete}/>
            <LogOutButton />
          </div>
        </>
      )}
    </div>
  );
};
