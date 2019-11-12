import React from "react";
import {
  Navbar,
  Logo,
  SearchInputWrapper,
  ProfileImgWrapper,
  ProfileImg
} from "./styled";
import brandlogo from "../../assets/images/hushlogo.png";
import brandtext from "../../assets/images/hushtext.png";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <Navbar>
      <Logo className="flex items-center">
        <img className="h-10 w-10 mr-2" src={brandlogo} alt="" />
        <img className="h-6" src={brandtext} alt="" />
      </Logo>
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
