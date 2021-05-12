import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import TopMenu from "./components/topMenu"; 
import Contact from "./components/contact-us"  ;



export default function App() {
  return (
    <Router>
    <div>
      <TopMenu />
  <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" exact component={Contact} />
            <Redirect to="/not-found" />
          </Switch>
        </div>  
          </div>
          </Router>
  
  );

}
