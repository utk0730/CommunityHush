import React, { Suspense, lazy } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter
} from "react-router-dom";
import { compose } from "redux";
import Header from "./common/Header";
const Feeds = lazy(() => import("./Feeds"));
const FeedDetail = lazy(() => import("./FeedDetail"));

import Loader from "react-loader-spinner";

const Loading = () => (
  <Loader
    className="static left-auto top-auto"
    visible={true}
    type="ThreeDots"
    color="blue"
    height={100}
    width={100}
  />
);

const RootComponent = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Feeds} />
            <Route path="/feeds" component={Feeds} />
            <Route path="/:id" component={FeedDetail} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default RootComponent;
