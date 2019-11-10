import React, { useEffect } from "react";
import { connect } from "react-redux";
import AppContainer from "../common/AppContainer/index";
import LeftSidebar from "../Feeds/components/LeftSidebar";
import Feed from "../Feeds/components/Feed";
import RightSidebar from "../Feeds/components/RightSidebar";
import { FeedsContainer } from "./styled";
import Loader from "react-loader-spinner";

import { getFeedsAction } from "./duck";
const Feeds = ({ fecthAllFeeds, allFeeds, loading }) => {
  useEffect(() => {
    fecthAllFeeds();
  }, []);

  const renderFeeds = () => {
    return allFeeds.map(feed => <Feed key={feed.id} feed={feed} />);
  };
  return (
    <AppContainer>
      <FeedsContainer>
        <LeftSidebar />
        <div className="flex flex-col" style={{ width: "60%" }}>
          {loading ? (
            <Loader
              className="mx-auto"
              visible={loading}
              type="ThreeDots"
              color="blue"
              height={80}
              width={80}
            />
          ) : allFeeds && allFeeds.length ? (
            renderFeeds()
          ) : (
            <div className="bg-white p-5 text-blue-600">
              no feeds to display
            </div>
          )}
        </div>

        <RightSidebar />
      </FeedsContainer>
    </AppContainer>
  );
};
export default connect(
  state => ({
    allFeeds: state.feedsReducer.allFeeds,
    loading: state.feedsReducer.loading
  }),
  {
    fecthAllFeeds: getFeedsAction
  }
)(Feeds);
