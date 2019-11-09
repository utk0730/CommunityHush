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

const Loading = () => <div>loading.....</div>;

const RootComponent = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Feeds} />
            <Route path="/detail" component={FeedDetail} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default RootComponent;
