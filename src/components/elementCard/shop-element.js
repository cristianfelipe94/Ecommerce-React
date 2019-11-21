import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './shop-element.scss'

const ShopCard = ({ name, imageUrl, id, content, price, categoryId, rate, handleBuy, handleProduct, handleRemove}) => {
  const [isInCar, setIsInCar] = useState(false);

  const handleAction = () => {
    if(!isInCar) {
      setIsInCar(!isInCar)
      handleBuy(id)
    } else if (isInCar) {
      setIsInCar(!isInCar)
      handleRemove(id)
    }
  }
  
  return (
    <div data-id={id} data-category={categoryId} className="product">
      <div className="product__details">
        <div className="glitch__container">
          <h2 className="product__title glitch--one highlight">{name}</h2>
          <h2 className="product__title glitch--two highlight">{name}</h2>
          <h2 className="product__title glitch--three highlight">{name}</h2>
        </div>
        <p>{content}</p>
        <p>Price: <span className="highlight">{price}</span></p>
        <p>Shopping Rate: <span className="highlight">{rate}</span></p>
      </div>
      <div className="product__actions">
        <Link to={`/product/:${id}`} className="image__container">
          <img src={imageUrl} alt="stock products" className="image" onClick={() => handleProduct(id)}/>
        </Link>
        <button onClick={() => handleAction()} className="product__btn">{isInCar ? "Remove from car" : "Add to your car"}</button>
      </div>
    </div>
  )
}

export default ShopCard;