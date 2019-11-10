import React from "react";
import AppContainer from "../common/AppContainer/index";
import LeftSidebar from "../Feeds/components/LeftSidebar";
import FeedContent from "../Feeds/components/Feed";
import RightSidebar from "../Feeds/components/RightSidebar";
import { FeedsContainer } from "./styled";
const Feeds = () => {
  return (
    <AppContainer>
      <FeedsContainer>
        <LeftSidebar />
        <FeedContent />
        <RightSidebar />
      </FeedsContainer>
    </AppContainer>
  );
};
export default Feeds;
