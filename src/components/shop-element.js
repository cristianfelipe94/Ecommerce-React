import React from 'react'

const ShopCard = ({ name, imageUrl, id, content, price, categoryId, rate, handleBuy}) => {
  return (
    <div data-id={id} data-category={categoryId}>
      <h2>{name}</h2>
      <p>{content}</p>
      <p>{price}</p>
      <p>{rate}</p>
      <img src={imageUrl} alt="stock products"/>
      <button onClick={() => handleBuy(id)}>Add to car</button>
    </div>
  )
}

export default ShopCard;