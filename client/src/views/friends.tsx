import { FriendMenu } from "../components/FriendMenu";
import { friendsTaskResponse } from "../common/fakeData";
import { User } from "../common/types";
import { useState } from "react";
import { TextBox } from "../components/Form";

// const buttonStyle =
//   "bg-base-200 btn btn-outline btn-primary btn-square sm:btn-sm md:btn-md lg:btn-lg no-animation";
// export const Friends = () => {
//   const [displayData, setDisplayData] = useState<Array<User>>(
//     friendsTaskResponse.slice(0, 3)
//   );
const handleSubmit = () => {};
const handleChange = () => {};

export const Friends = () => {
  const [formData, setFormData] = useState({
    userName: "",
  });
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
            <h2 className="flex content-center flex-wrap">Add Friend</h2>
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

/* <div className="btn-group flex mt-auto">
        <button className={`${buttonStyle}`} onClick={prevPage}>
          «
        </button>
        <div className="bg-base-200 grow flex justify-center content-center flex-wrap">{`Page ${currentPage}`}</div>
        <button className={`${buttonStyle}`} onClick={nextPage}>
          »
        </button>
      </div> */
