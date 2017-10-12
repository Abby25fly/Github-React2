import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

const Home = () => (
  <div className="main-content">
    <h1>Github Battle: Battle your friends... and stuff.</h1>
    <NavLink to="/battle">           
      <button>Battle</button>
    </NavLink>
     
  </div>
)

const Battle = () => (
  <div className="main-content container text-center">
    <div className="row"> 
      <div className="col-md-6 col-sm-6">
        <h2>Player One</h2>
        <input placeholder="Github Username" />
        <button>Submit</button>
      </div>
      <div className="col-md-6 col-sm-6">
        <h2>Player Two</h2>
        <input placeholder="Github Username" />
        <button>Submit</button>
      </div>
    </div>
  </div>
)

const ALL = () => {
  return (
    <div>
    
  </div>
  );
}

const HTML = () => {
  return (
    <div>
    
  </div>
  );
}

const CSS = () => {
  return (
    <div>
    
  </div>
  );
}

const JavaScript = () => {
  return (
    <div>
  </div>
  );
}

const Popular = () => {
  return (
    <center>
    <div className="main-content">
      <ul className="course-nav">
        <li className="courseBtn">  <NavLink exact to="/popular/all"> All</NavLink> </li>
        <li className="courseBtn">  <NavLink to="/popular/html"> HTML </NavLink> </li>
        <li className="courseBtn">  <NavLink to="/popular/css"> CSS </NavLink> </li>
        <li className="courseBtn">  <NavLink to="/popular/javascript"> JavaScript </NavLink> </li>
      </ul>
      

      <Switch>
        <Route exact path="/popular"
          render={() => <Redirect to="/popular/all" />} />

        <Route path="/popular/all" component={ALL} />
        <Route path="/popular/html" component={HTML} />
        <Route path="/popular/css" component={CSS} />
        <Route path="/popular/javascript" component={JavaScript} />
      </Switch>
    </div>
    </center>
  );
}

const NotFoundPage = (props) => {
  return (
    <div> <h2> Error 404! </h2> </div>
  );
}

const App = () => (
  <BrowserRouter>
    <div>
      <div className="header">
        <menu>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/battle">Battle</NavLink></li>
            <li><NavLink to="/popular">Popular</NavLink></li>
          </ul>
        </menu>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/battle" component={Battle} />
        <Route path="/popular" component={Popular} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)


export default App;
