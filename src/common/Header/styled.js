import styled from "styled-components";

export const Navbar = styled.nav`
  height: 60px;
  background: white;
  padding: 5px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1024px) {
    padding: 10px 20px;
    height: 110px;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
  width: 15%;
  color: #364dcb;
`;

export const ProfileImgWrapper = styled.div``;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const SearchInputWrapper = styled.div`
  width: 50%;
  margin-right: 20%;
  @media (max-width: 1024px) {
    position: absolute;
    top: 60px;
    width: 90%;
    margin: auto;
  }
`;
