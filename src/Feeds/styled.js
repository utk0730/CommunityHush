import styled from "styled-components";

export const FeedsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledDiv = styled.div`
  display: flex;
  cursor: pointer;
  width: 60%;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
