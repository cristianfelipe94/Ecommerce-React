import React, { useState } from 'react';

import Payment from '../components/buyForm/buyForm'
import ShopCard from '../components/elementCard/element-shop';
import Layout from '../components/layout/layout'

import '../app/app.scss'

const Product = (props) => {
  const [data, setData] = useState("");
  const [isLoaded, setLoaded] = useState(false);

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

  const handleData = () => {
    if(!isLoaded && props.data) {
      setData(props.data.boots);
      setLoaded(true);
    }
  }

  const renderElements = () => {
    return(
      <ShopCard 
        name={props.data.name}
        imageUrl={props.data.imageUrl}
        id={props.data.id}
        content={props.data.content}
        price={props.data.price}
        categoryId={props.data.id}
        rate={props.data.rate}
        btnType= {1}
        handleBuy={handleAction}
        handleProduct={handleAction}
      />
  )}

  return (
    <Layout type="product">
      {!data !== "" && handleData()}
      {data !== "" && renderElements()}
      <div className={`modal ${modalState}`}>
        <Payment action={handleAction} data={props.data}/>
      </div>
    </Layout>
  )
}

export default Product;