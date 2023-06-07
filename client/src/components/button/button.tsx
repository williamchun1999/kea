import { useState, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useUserLogout } from "../../hooks/user/logoutUser";

type ButtonProp = {
  color?: string;
  name?: string;
};

type NavButtonProp = {
  d: string;
};

type DeleteButtonProp = {
  userName: string;
};

export const Add = () => {
  const [selectedValue, updateSelectedValue] = useState("");

  function handleSelectedValue(event: React.ChangeEvent<HTMLInputElement>) {
    updateSelectedValue(() => event?.target.value);
  }

  function createTask() {
    //popup that deals with adding elements should go here
    console.log("createdTask");
  }

  return (
    <>
      <label
        className="btn btn-circle btn-sm add--text btn-primary text-base-400"
        htmlFor="addTask"
      >
        +
      </label>

      <input type="checkbox" id="addTask" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {/** title and exit button */}
          <div className="top flex flex-1 justify-between">
            <h3 className="font-bold text-lg">Create New Task</h3>
            <label
              className="btn btn-circle bg-transparent border-0"
              htmlFor="addTask"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          {/* new task name input */}
          <label htmlFor="newTaskName" className="block w-full">
            Task Name:
          </label>
          <input
            type="text"
            id="newTaskName"
            placeholder="Type here"
            className="input input-bordered w-full"
          />

          {/* checkbox or progres bar? */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Checkbox</span>
              <input
                type="radio"
                name="taskType"
                id="checkbox"
                value="checkbox"
                className="radio checked:bg-[#e0b0ff]"
                checked={selectedValue === "checkbox"}
                onChange={handleSelectedValue}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Progress Bar</span>
              <input
                type="radio"
                name="taskType"
                id="progressBar"
                value="progressBar"
                className="radio checked:bg-[#e0b0ff]"
                checked={selectedValue === "progressBar"}
                onChange={handleSelectedValue}
              />
            </label>
          </div>

          {selectedValue === "progressBar" && (
            <div className="progressInput flex flex-1 ">
              <input
                type="number"
                placeholder="total"
                min="1"
                className="input input-bordered w-2/4"
              />
            </div>
          )}
          {/* buttons */}
          <div className="modal-action flex-col space-x-0">
            <label
              htmlFor="addTask"
              className="btn btn-block"
              onClick={() => createTask()}
            >
              Create
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export const Button = (design: ButtonProp) => {
  return (
    <>
      <button
        className={`btn btn-wide self-center tracking-widest font-bold ${design.color}  text-base mb-3 rounded-full`}
      >
        {design.name}
      </button>
    </>
  );
};

export const NavButton = (props: NavButtonProp) => {
  return (
    <button className="text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={props.d}
        />
      </svg>
    </button>
  );
};

export const DeleteButton = (props: DeleteButtonProp) => {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="deleteAccount"
        className="btn btn-ghost w-screen border-2 border-primary"
      >
        Delete Account
      </label>

      <input type="checkbox" id="deleteAccount" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box ">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete the account?
          </h3>
          <p className="py-4">
            {`Current Account : ${props.userName}`} <br /> Your account will be
            deleted as well as its data.
          </p>
          {/* modal buttons */}
          <div className="modal-action">
            <label htmlFor="deleteAccount" className="btn">
              Go Back
            </label>
            <Link to="/">
              <label htmlFor="deleteAccount" className="btn btn-primary">
                Confirm
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export const AddFriends = () => {
  const [doneClick, setDoneClick] = useState(true);

  function handleDoneClick(clicked: boolean) {
    setDoneClick(clicked);
  }

  return (
    <>
      <label
        className="btn btn-ghost w-screen border-2 border-primary"
        htmlFor="addFriends"
        onClick={() => handleDoneClick(true)}
      >
        Add Friends
      </label>

      {doneClick && (
        <>
          <input type="checkbox" id="addFriends" className="modal-toggle " />
          <div className="modal">
            <div className="modal-box">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg pt-3">Add Friends</h3>
                <label
                  className="btn btn-circle bg-transparent border-0"
                  htmlFor="addFriends"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>
              {/*<p className="py-4">Add friends by Email</p>*/}
              <input
                type="text"
                placeholder="example@example.com"
                className="input input-bordered w-full mt-4"
              />
              {/* if no user found: <p>No user found. Try again</p>*/}
              <div className="modal-action">
                <label htmlFor="added" className="btn w-full">
                  Add
                </label>
              </div>
            </div>
          </div>

          <input type="checkbox" id="added" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Successfully Added!</h3>
              <p className="py-4"></p>
              <div className="modal-action">
                <label
                  htmlFor="added"
                  className="btn"
                  onClick={() => handleDoneClick(false)}
                >
                  Done
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const LogOutButton = () => {
  return (
    <>
      <Link to="/">
        <button className="btn btn-ghost w-screen border-2 border-primary">
          Log Out
        </button>
      </Link>
    </>
  );
};

export const EditUserButton = () => {
  return (
    <>
      <button className="btn btn-ghost w-screen border-2 border-primary">
        Edit Account
      </button>
    </>
  );
};
