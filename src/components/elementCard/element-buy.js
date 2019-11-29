import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Payment  from "../buyForm/buyForm"

import './shop-element.scss'

const BuyCard = ({ name, imageUrl, id, content, price, categoryId, rate}) => {
  const [isInBuy, setIsInBuy] = useState(false);
  const [modalState, setModalState] = useState("modal--close")
  // const [message, setMessage] = useState("");
  // const [messageState, setMessageState] = useState("message--error")

  // const [formFields, setFormFields] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   creditCard: ""
  // })

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

  // function handleFormFields(event) {
  //   setFormFields({
  //     ...formFields,
  //     [event.target.name]: event.target.value
  //   })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (formFields.firstName !== "" && formFields.lastName !== ""  && formFields.creditCard !== ""  && formFields.email !== "" ) {
  //     processPayment();
  //   } else {
  //     setMessage("Error, to purchase this item please make sure you complete the form with the requested information.")
  //     setMessageState("message--error")
  //   }
  // }

  // const processPayment = () => {
  //   setMessage("Processing your information")
  //   setMessageState("message--process")
  //   const paymentState = Math.floor(Math.random() * 2);
  //   setTimeout(() => {
  //     if(paymentState === 1) {
  //       setMessageState("message--success")
  //       setMessage("Payment success")
  //       setTimeout(() => {
  //         handleAction()
  //       }, 1000)
  //     } else {
  //       setMessage("Payment error, please try it again.")
  //       setMessageState("message--error")
  //     }
  //   }, 2000)
  // }

  const setInitialScroll = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div>
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
        <div className="product__actions" onClick={() => handleAction()} >
          <Link to={`/product/:${id}`} className="image__container">
            <img src={imageUrl} alt="stock products" className="image"/>
          </Link>
          <button className="product__btn">Buy product</button>
        </div>
      </div>
      <div className={`modal ${modalState}`}>
        <Payment/>
      </div>
    </div>
  )
}

export default BuyCard;