import { Link, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";
import { useState } from "react";

import { NavButton } from "../components/button/button";

export const Navbar = () => {

  const [buttons, setButtons] = useState([
    {
      id: nanoid(),
      d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      isActive: false,
      link: "/home"
    },
    {
      id: nanoid(),
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      isActive: false,
      link: "/friends"
    },
    {
      id: nanoid(),
      d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      isActive: false,
      link:"/"
    },
    {
      id: nanoid(),
      d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      isActive: false,
      link:"/"
    },
  ]);


  function onChange(id: string) {
    setButtons(prev => prev.map(button => {
      return button.id === id ? {...button, isActive: true}
    : {...button, isActive: false}} ))
  }

  //create the buttonElements and its props
  const buttonElements = buttons.map((button) => (
    
    <NavButton
      key={button.id}
      id={button.id}
      onChange={() => onChange(button.id)}
      isActive={button.isActive}
      d={button.d}
    />
  
  ));

  return (
    <>
      <Outlet />
      <div className="btm-nav">{buttonElements}</div>
    </>
  );
};
