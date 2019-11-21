import React from 'react';
import ShopCard from '../components/elementCard/shop-element'

const Car = ({car}) => {
  
  if(!car.length) {
    return(
      <div>
        <h1>Shopping car</h1>
        <h2>Currently your shopping car is empty</h2>
      </div>
    )
  } else {
    // const handleCar = (props) => {
    //   const id = props;
    //   const selected = car.find(element => element.id === id);
    //   car.splice()
    // }

    const renderElements= car.map(product => {
      return <ShopCard name={product.name} imageUrl={product.imageUrl} id={product.id} content={product.content} price={product.price} categoryId={product.id} rate={product.rate}/>
    })
  
    return (
      <div>
        {renderElements}
      </div>
    )
  }
}

export default Car;
