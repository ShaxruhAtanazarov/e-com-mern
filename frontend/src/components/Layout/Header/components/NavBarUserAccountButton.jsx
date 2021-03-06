import React from "react";

// components
import { NavOptionsButton } from "components/Buttons";
// icons
import { AiOutlineUser } from "react-icons/ai";

const NavBarUserAccountButton = () => {
  return (
    <NavOptionsButton link="user-account">
      <AiOutlineUser size={24} />
    </NavOptionsButton>
  );
};

export default NavBarUserAccountButton;
