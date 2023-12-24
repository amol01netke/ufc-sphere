import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Events from "./pages/Events/Events";
import EventDetails from "./pages/EventDetails/EventDetails";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/events" exact>
        <Events />
      </Route>
      <Route path="/event-details/:eventId" exact>
        <EventDetails />
      </Route>
      <Redirect to="/events" />
    </Switch>
  );

  return (
    <Router>
      <div className="App">{routes}</div>
    </Router>
  );
};

export default App;
