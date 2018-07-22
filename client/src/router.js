import React from "react";
import { Switch, Route } from "react-router-dom";
import ActivityMainPage from "./components/ActivityMainPage";
import CreateActivity from "./components/CreateActivity";
import EditActivity from "./components/EditActivity";

export default (
  <Switch>
    <Route component={ActivityMainPage} exact path="/" />
    <Route component={CreateActivity} path="/activities/create" />
    <Route component={EditActivity} path="/activities/update" />
  </Switch>
);
