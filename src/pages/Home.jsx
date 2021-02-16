import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Register";
import "./style.css";

const Home = () => {
  return (
    <Router>
      <div className="main"> 
        
        <Link to="/register"><button className="button">Register</button></Link>
        <Link><button className="button">Login</button></Link>

        <Switch>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
