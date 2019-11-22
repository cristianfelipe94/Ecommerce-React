import React from 'react';
import ShopCard from '../components/elementCard/shop-element'
import '../app/app.scss'

const Car = ({car}) => {
  
  if(!car.length) {
    return(
      <div className="app">
        <div className="head--car"/>
        <div className="layout">
          <h1>Shopping car</h1>
          <h2>Currently your shopping car is empty</h2>
        </div>
      </div>
    )
  } else {
    const renderElements= car.map(product => {
      return <ShopCard name={product.name} imageUrl={product.imageUrl} id={product.id} content={product.content} price={product.price} categoryId={product.id} rate={product.rate}/>
    })
  
    return (
      <div className="app">
        <div className="head head--car"/>
        <div className="layout">
          {renderElements}
        </div>
      </div>
    )
  }
}

export default Car;
