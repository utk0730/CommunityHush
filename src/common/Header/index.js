import React from "react";
import profile from "../../assets/images/profile.jpg";
import {
  Navbar,
  Logo,
  SearchInputWrapper,
  ProfileImgWrapper,
  ProfileImg
} from "./styled";

const Header = () => {
  return (
    <Navbar>
      <Logo>Hush</Logo>
      <SearchInputWrapper>
        <input
          placeholder="search"
          className="border border-2 p-2 rounded w-full border-blue-300"
        />
      </SearchInputWrapper>
      <ProfileImgWrapper>
        <ProfileImg src={profile} alt="" />
      </ProfileImgWrapper>
    </Navbar>
  );
};
export default Header;
