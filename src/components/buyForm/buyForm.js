import React, { useState } from "react"

const Payment = ({name, price, handleAction}) => {
  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState("message--error");

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    creditCard: ""
  });

  function handleFormFields(event) {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formFields.firstName !== "" && formFields.lastName !== ""  && formFields.creditCard !== ""  && formFields.email !== "" ) {
      processPayment();
    } else {
      setMessage("Error, to purchase this item please make sure you complete the form with the requested information.")
      setMessageState("message--error")
    }
  }

  const processPayment = () => {
    setMessage("Processing your information")
    setMessageState("message--process")
    const paymentState = Math.floor(Math.random() * 2);
    setTimeout(() => {
      if(paymentState === 1) {
        setMessageState("message--success")
        setMessage("Payment success")
        setTimeout(() => {
          handleAction()
        }, 1000)
      } else {
        setMessage("Payment error, please try it again.")
        setMessageState("message--error")
      }
    }, 2000)
  }

  const setInitialScroll = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="form__wrapper">
      <h2>Ready to buy it?</h2>
      <p>Product name: <span className="highlight">{name}</span></p>
      <p>Price: <span className="highlight">{price}</span></p>

      <form onSubmit={handleSubmit} className="form">
        <div className="form__field">
          <label htmlFor="formFirstName">First name:</label>
          <input
            type="text"
            value={formFields.firstName}
            onChange={handleFormFields}
            name="firstName"
            id="formFirstName"
            onBlur={() => setMessage("")}
          />
        </div>
        <div className="form__field">
          <label htmlFor="formLastName">Last name:</label>
          <input
            type="text"
            value={formFields.lastName}
            onChange={handleFormFields}
            name="lastName"
            id="formLastName"
            onBlur={() => setMessage("")}
          />
        </div>
        <div className="form__field">
          <label htmlFor="formEmail">Email:</label>
          <input
            type="email"
            value={formFields.email}
            onChange={handleFormFields}
            name="email"
            id="formEmail"
            onBlur={() => setMessage("")}
          />
        </div>
        <div className="form__field">
          <label htmlFor="formCreditCard">Credit card:</label>
          <input
            type="number"
            value={formFields.creditCard}
            onChange={handleFormFields}
            name="creditCard"
            id="formCreditCard"
            onBlur={() => setMessage("")}
          />
        </div>
        <div className="btn__wrapper">
          <button className="payment--buy" type="submit">Buy</button>
          <button className="payment--close" onClick={() => handleAction()}>Close</button>
        </div>
      </form>
      <p className={messageState}>{message}</p>
    </div>
  )
}

export default Payment