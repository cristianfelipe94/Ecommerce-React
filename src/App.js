import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import Home from './Home';
import NotFound from './NotFound';
import Service from './service/products.js'
import ProductJson from './service/products.json'

import './App.css';

const App = () => {
  const [gotData, setData] = useState("");

  async function getData() {
    if(gotData === "") {
      const data = await Service(ProductJson);
      console.log("Async response: ", data);
      setData(data);
    }
  };

  getData();

  return(
    <div>
      <Router>
        <nav>
          <NavLink to="/" style={{color: "white", padding: "20px"}}>Home</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} data={gotData}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
