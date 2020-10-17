import React, { Component } from "react";
import "./index.css";

export default class NavBar extends Component {

  render() {
    return (
      <div className="layout-column justify-content-center align-items-center">
        <Router>
        <div className="layout-row justify-content-around align-items-center mt-20 links" data-testid="navigation-tabs">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        </div>
        <div className="card w-20 ma-0">
          <section className="card-text" data-testid="tab-content">
          <Switch>
        <Route path="/" ><h1>HOME PAGE</h1></Route>
        <Route path="/news" ><h1>NEWS PAGE</h1></Route>
        <Route path="/contact"><h1>CONTACT PAGE</h1></Route>
        <Route path="/about" ><h1>ABOUT PAGE</h1></Route>
        </Switch>
          </section>
        </div>
        </Router>
      </div>
    );
  }
}