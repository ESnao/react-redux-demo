import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import config from "./config";

const Routes = config.map(route => {
  const {
    path, component, exact, routes
  } = route;
  return path ? (
    <Route
      exact={exact}
      key={path}
      path={path}
      routes={routes}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  ) : (
    <Route component={component} key="nofound" />
  );
});

const MainRouter = () => (
    <Switch>
      {Routes}
    </Switch>
  );

export default withRouter(connect(state=>state)(MainRouter));
