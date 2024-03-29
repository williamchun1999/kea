/* eslint-disable react-hooks/rules-of-hooks */
import { NavLink, Outlet } from "react-router-dom";

import { NavButton } from "../components/button/button";



export const Navbar = () => {

  //data for the buttons
  const buttons = [
    {
      d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      link: "/kea/home",
    },
    {
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      link: `/kea/profile`,
    },
    {
      d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      link: "/kea/friends",
    },
    {
      d: "m19.622 10.395l-1.097-2.65L20 6l-2-2l-1.735 1.483l-2.707-1.113L12.935 2h-1.954l-.632 2.401l-2.645 1.115L6 4L4 6l1.453 1.789l-1.08 2.657L2 11v2l2.401.655L5.516 16.3L4 18l2 2l1.791-1.46l2.606 1.072L11 22h2l.604-2.387l2.651-1.098C16.697 18.831 18 20 18 20l2-2l-1.484-1.75l1.098-2.652l2.386-.62V11l-2.378-.605Z",
      link: "/kea/settings",
    },
  ];

  //create the buttonElements and its props
  const buttonElements = buttons.map((button) => (
    <NavLink to={`${button.link}`}>
      <NavButton d={button.d} />
    </NavLink>
  ));

  return (
    <>
      <div className="mb-16">
        <Outlet />
      </div>
      <div className="btm-nav">{buttonElements}</div>
    </>
  );
};
