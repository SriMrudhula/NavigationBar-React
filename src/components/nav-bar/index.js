import React, { Component } from "react";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import "./index.css";

export default class NavBar extends Component {

  render() {
    return (
      <div className="layout-column justify-content-center align-items-center">
        <Router>
        <div className="layout-row justify-content-around align-items-center mt-20 links" data-testid="navigation-tabs">
        <Link to="/home">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        </div>
        <div className="card w-20 ma-0">
          <section className="card-text" data-testid="tab-content">
          <Switch>
        <Route path="/home" render={() =><h1>HOME PAGE</h1>} />
        <Route path="/news" render={() => <h1>NEWS PAGE</h1>} />
        <Route path="/contact" render={() => <h1>CONTACT PAGE</h1>} />
        <Route path="/about" render={() => <h1>ABOUT PAGE</h1>} />
        </Switch>
          </section>
        </div>
        </Router>
      </div>
    );
  }
}