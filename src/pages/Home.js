import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import ShopCard from '../components/shop-element'

const Home = (props) => {
  const [data, setData] = useState("");
  const [car, setCar] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const handleCar = (clickElement) => {
    console.log(props.match.path)
    const id = clickElement;
    const selected = data.find(element => element.id === id);
    setCar([...car, selected]);
    props.handleGlobalCar(car);
  }

  const handleDetails = (clickElement) => {
    const id = clickElement;
    const selected = data.find(element => element.id = id);
    props.handleProductId(id);
    props.handleProductElement(selected);
  }

  const handleData = () => {
    if(!isLoaded && props.data) {
      setData(props.data.boots);
      setLoaded(true);
    }
  }

  const renderElements = () => data.map(product => {
    return <ShopCard name={product.name} imageUrl={product.imageUrl} id={product.id} content={product.content} price={product.price} categoryId={product.id} rate={product.rate} handleBuy={handleCar} handleProduct={handleDetails}/>
  })

  return (
    <div className="app">
      <div className="head">
      </div>
      <div className="layout">
      {!data !== "" && handleData() }
      {data !== "" && renderElements() }
      </div>
    </div>
  )
}

export default Home;
