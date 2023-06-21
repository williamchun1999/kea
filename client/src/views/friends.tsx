import { FriendMenu } from "../components/FriendMenu";
import { friendsTaskResponse } from "../common/fakeData";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export const Friends = () => {
  const [formData, setFormData] = useState({
    userName: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    // Add Friend API here
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
    <>
      <div className="bg-primary h-24 mb-4 sticky top-0 z-10">
        <div className="flex flex-col sm:flex-row h-full mx-4">
          <h1 className="flex grow content-center flex-wrap font-bold text-xl lg:text-3xl">
            Friends
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex content-center flex-wrap gap-x-4"
          >
            <button className="flex content-center flex-wrap">Add Friend</button>
            <input
              type="text"
              placeholder="username"
              name="userName"
              className="input input-bordered input-primary"
              onChange={handleChange}
              value={formData.userName}
            />
          </form>
        </div>
      </div>
      <div className="h-screen relative sm:mx-16 lg:mx-24">
        <div>
          <FriendMenu content={friendsTaskResponse} />
        </div>
      </div>
    </>
  );
};

