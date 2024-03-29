import React, { useState } from 'react';
import ShopCard from '../components/elementCard/element-shop.js'

import Layout from '../components/layout/layout'

import '../app/app.scss'

const Home = (props) => {
  const [data, setData] = useState("");
  const [isLoaded, setLoaded] = useState(false);

  const handleCar = (clickElement) => {
    const id = clickElement;
    const selected = data.find(element => element.id === id);
    props.handleGlobalCar(selected);
  }

  const handleRemoveCar = (clickElement) => {
    const id = clickElement;
    props.handleRemove(id);
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
    return <ShopCard name={product.name} imageUrl={product.imageUrl} id={product.id} content={product.content} price={product.price} categoryId={product.id} rate={product.rate} handleBuy={handleCar} handleProduct={handleDetails} handleRemove={handleRemoveCar}/>
  })

  return (
    <Layout type="home">
      {!data !== "" && handleData() }
      {data !== "" && renderElements() }
    </Layout>
  )
}

export default Home;
