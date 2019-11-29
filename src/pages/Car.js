import React, { useState } from 'react';
import ShopCard from '../components/elementCard/element-shop'
import Layout from '../components/layout/layout'

import '../app/app.scss'
import Payment from '../components/buyForm/buyForm';

const Car = ({car}) => {
  const [isInBuy, setIsInBuy] = useState(false);
  const [modalState, setModalState] = useState("modal--close")

  const handleAction = () => {
    if(!isInBuy) {
      setIsInBuy(!isInBuy)
      setModalState("modal--open");
      setInitialScroll();
    } else if (isInBuy) {
      setIsInBuy(!isInBuy)
      setModalState("modal--close");
      setInitialScroll();
    }
  }

  const setInitialScroll = () => {
    window.scrollTo(0, 0);
  }
  
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
      return (
        <ShopCard
          name={product.name}
          imageUrl={product.imageUrl}
          id={product.id}
          content={product.content}
          price={product.price}
          categoryId={product.id}
          rate={product.rate}
          btnType= {2}
        />
      )
    })

    return (
      <Layout type="car">
        {renderElements}
        <button onClick={handleAction} className="payment--all">Buy all</button>
        <div className={`modal ${modalState}`}>
          <Payment action={handleAction} data={car}/>
        </div>
      </Layout>
    )
  }
}

export default Car;
