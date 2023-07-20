
import { useState, ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useUserLogout } from "../../hooks/user/logoutUser";

import { TextBox } from "../Form"

type ButtonProp = {
  color?: string;
  name?: string;
};

type NavButtonProp = {
  d: string;
};

type DeleteButtonProp = {
  userName: string;
  controlDelete: MouseEventHandler<HTMLButtonElement>
};

type EditButtonProp = {
  fName: string;
  lName: string;
  email: string;
  userName: string;
  controlSubmit: FormEventHandler<HTMLFormElement>;
  controlChange: ChangeEventHandler<HTMLInputElement>;

}

export const Add = () => {
  return (
    <label
      className="btn btn-circle btn-sm add--text btn-primary text-base-400"
      htmlFor="addTask"
    >
      +
    </label>
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

// Need to separate Modals from Buttons (REFER TO Add Button)
export const DeleteButton = (props: DeleteButtonProp) => {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="deleteAccount"
        className="btn btn-ghost btn-block border-2 border-primary"
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
            <button onClick={props.controlDelete} className=" btn-ghost">
              <label htmlFor="deleteAccount" className="btn btn-primary">
                Delete
              </label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
// Need to separate Modals from Buttons (REFER TO Add Button)
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
  const handleLogOut = async () => {
    try {
      const result = await useUserLogout("/logout");
      console.log("C: ", result);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
  return (
    <>
      <Link to="/">
        <button
          onClick={handleLogOut}
          className="btn btn-ghost border-2 border-primary"
        >
          Log Out
        </button>
      </Link>
    </>
  );
};
// Need to separate Modals from Buttons (REFER TO Add Button)
export const EditUserButton = ({ fName, lName, userName, email, controlSubmit, controlChange, }: EditButtonProp) => {


  return (
    <>
      <label
        htmlFor="editAccount"
        className="btn btn-ghost btn-block border-2 border-primary"
      >
        Edit Account
      </label>

      <input type="checkbox" id="editAccount" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box ">
          <form onSubmit={controlSubmit} className="flex flex-wrap justify-center md:justify-start md:gap-2">

            <TextBox
              title="First Name"
              name="fName"
              value={fName}
              controlInput={controlChange}
              type="text"
            />
            <TextBox
              title="Last Name"
              name="lName"
              value={lName}
              controlInput={controlChange}
              type="text"
            />
            <TextBox
              title="Email"
              name="email"
              value={email}
              controlInput={controlChange}
              type="text"
            />
            <TextBox
              title="Username"
              name="userName"
              value={userName}
              controlInput={controlChange}
              type="text"
            />
            <button type="submit" className=" btn-ghost">
              <label htmlFor="editAccount" className="btn btn-primary">
                Update Info
              </label>
            </button>
          </form>
          {/* modal buttons */}
          <div className="modal-action">
            <label htmlFor="editAccount" className="btn">
              Go Back
            </label>
          </div>
        </div>
      </div>

    </>
  );
};
