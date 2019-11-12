import styled from "styled-components";
export const FeedWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    margin-bottom: 5px;
  }
`;
export const FeedOwnerImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const IconWrapper = styled.div`
  cursor: pointer;
`;
export const CompanyTags = styled.div``;
export const ActionButtonsWrapper = styled.div``;
export const ActionButtonHover = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  top: -50px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  transition: all ease-in-out 0.5s;
`;
export const Tags = styled.span`
  padding: 5px 8px;
  background: #def3fa;
  margin-right: 5px;
  border-radius: 2px;
  color: gray;
  font-size: 12px;
`;
