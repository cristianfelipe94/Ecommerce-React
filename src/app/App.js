import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

// Pages
import Home from '../pages/Home';
import Car from '../pages/Car';
import Product from '../pages/Product';
import NotFound from '../NotFound';

// Components
import Footer from '../components/footerComponent/footer'

// Get data
import Service from '../service/products.js'
import ProductJson from '../service/products.json'

import './app.scss';

const App = () => {
  const [gotData, setData] = useState("");
  const [gotCar, setCar] = useState([]);
  const [gotProductId, setProductId] = useState("");
  const [gotProductElement, setProductElement] = useState("");

  async function getData() {
    if(gotData === "") {
      const data = await Service(ProductJson);
      setData(data);
    }
  };

  function globalCar(props) {
    setCar([...gotCar, props])
  }

  function globalProductId(props) {
    setProductId(props)
  }

  function globalProductElement(props) {
    setProductElement(props)
  }

  function handleGlobalRemover(props) {
    gotCar.map(element => {
      if(element.id === props) {
        const indexToRemove = gotCar.indexOf(element);
        gotCar.splice(indexToRemove, 1);
      }
    })
  }

  function orderBy(event) {
    const clickedElement = event.target.id;
    const filtered = gotData.boots.filter(element => element.category === clickedElement);
    setData(filtered);
  }

  getData();

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
          <div className="filter">
            <button id="girls" onClick={orderBy}>Girls</button>
            <button id="boys" onClick={orderBy}>Boys</button>
            <button id="all" onClick={orderBy}>Aliens</button>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} data={gotData} handleGlobalCar={globalCar} handleProductId={globalProductId} handleProductElement={globalProductElement} handleRemove={handleGlobalRemover}/>}/>
          <Route exact path="/car" render={(props) => <Car {...props} car={gotCar}/>}/>
          <Route exact path={`/product/:${gotProductId}`} render={(props) => <Product {...props} data={gotProductElement}/>}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
