import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

// Pages
import Home from '../pages/Home';
import Car from '../pages/Car';
import Product from '../pages/Product';
import NotFound from '../NotFound';

// Get data
import Service from '../service/products.js'
import ProductJson from '../service/products.json'

import './app.scss';

const App = () => {
  const [gotData, setData] = useState("");
  const [gotCar, setCar] = useState("");
  const [gotProductId, setProductId] = useState("");
  const [gotProductElement, setProductElement] = useState("");


  async function getData() {
    if(gotData === "") {
      const data = await Service(ProductJson);
      setData(data);
    }
  };

  function globalCar(props) {
    setCar(props)
  }

  function globalProductId(props) {
    console.log("Setting ID: ", props);
    setProductId(props)
  }

  function globalProductElement(props) {
    console.log("Setting Element: ", props);
    setProductElement(props)
  }

  getData();

  return(
    <div>
      <Router>
        <nav className="nav">
          <div>
            <NavLink to="/" className="nav__links">Home</NavLink>
            <NavLink to="/car" className="nav__links">Car</NavLink>
          </div>
          <div>
            {gotCar.length}
            <div className="car__icon"/>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} data={gotData} car={gotCar} handleGlobalCar={globalCar} handleProductId={globalProductId} handleProductElement={globalProductElement}/>}/>
          <Route exact path="/car" render={(props) => <Car {...props} car={gotCar}/>}/>
          <Route exact path={`/product/:${gotProductId}`} render={(props) => <Product {...props} data={gotProductElement}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
