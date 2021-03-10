import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import {Home} from "./pages/Home";
import {Contacts} from "./pages/Contacts";
import {About} from "./pages/About";

import {Navbar} from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container col-12">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/contacts"  component={Contacts}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
