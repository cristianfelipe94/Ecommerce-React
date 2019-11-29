import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

// Pages
import Home from '../pages/Home';
import Car from '../pages/Car';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

// Get data
import Service from '../service/products.js'
import ProductJson from '../service/products.json'

// Styles
import './app.scss';

const App = () => {
  const [gotData, setData] = useState("");
  const [gotCar, setCar] = useState([]);
  const [gotProductId, setProductId] = useState("");
  const [gotProductElement, setProductElement] = useState("");

  useEffect(() =>  {
    const data = Service(ProductJson);
    setData(data);
  }, [])

  function globalCar(props) {
    setCar([...gotCar, props])
  }

  function globalProductId(props) {
    setProductId(props)
  }

  function globalProductElement(props) {
    setProductElement(props)
  }

  return(
    <div className="app__layout">
      <Router>
        <nav className="nav">
          <div>
            <NavLink exact to="/" className="nav__links" activeClassName="nav__links--active">Home</NavLink>
            <NavLink to="/car" className="nav__links" activeClassName="nav__links--active">Car</NavLink>
          </div>
          <div className="nav__car">
            <p className="nav_counter">{gotCar.length ? gotCar.length : 0}</p>
            <div className="car__icon"/>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} data={gotData} handleGlobalCar={globalCar} handleProductId={globalProductId} handleProductElement={globalProductElement}/>}/>
          <Route exact path="/car" render={(props) => <Car {...props} car={gotCar}/>}/>
          <Route exact path={`/product/:${gotProductId}`} render={(props) => <Product {...props} data={gotProductElement}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
