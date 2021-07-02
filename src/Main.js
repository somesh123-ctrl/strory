import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Stories from "./Stories";
import Riddles from "./Riddles";
import Jokes from "./Jokes";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>

       
          


          <ul className="header">
          <h1><NavLink exact to="/">Home</NavLink></h1>
            <li><h2><NavLink to="/stories">stories</NavLink></h2></li>
            <li><h2><NavLink to="/Riddles">Riddles</NavLink></h2></li>
            <li><h2><NavLink to="/Jokes">Jokes</NavLink></h2></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stories" component={Stories}/>
            <Route path="/Riddles" component={Riddles}/>
            <Route path="/Jokes" component={Jokes}/>

          </div>
        </div>
      </HashRouter>
    );
  }
}


export default Main;