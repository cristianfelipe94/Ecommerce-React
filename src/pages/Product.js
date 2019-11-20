import React, { useState } from 'react';
import ShopCard from '../components/shop-element'

const Product = (props) => {
  const [data, setData] = useState("");
  const [isLoaded, setLoaded] = useState(false);

  const handleData = () => {
    if(!isLoaded && props.data) {
      setData(props.data.boots);
      setLoaded(true);
    }
  }
  
  const handleCar = () => {
    console.log("Shopping");
  }

  const handleDetails = () => {
    console.log("Details");
  }

  const renderElement = () => {
    return(
    <ShopCard 
      name={props.data.name}
      imageUrl={props.data.imageUrl}
      id={props.data.id}
      content={props.data.content}
      price={props.data.price}
      categoryId={props.data.id}
      rate={props.data.rate}
      handleBuy={handleCar}
      handleProduct={handleDetails}
    />
  )}

  return (
    <>
      {!data !== "" && handleData() }
      {data !== "" && renderElement() }
    </>
  )
}

export default Product;