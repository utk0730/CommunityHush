import React from "react";
import profile from "../../assets/images/profile.jpg";
import { Navbar, Logo, SearchInput, ProfileImg } from "./styled";

const Header = () => {
  return (
    <Navbar>
      <Logo>Hush</Logo>
      <SearchInput type="search" />
      <ProfileImg src={profile} alt="" />
    </Navbar>
  );
};
export default Header;
