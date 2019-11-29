import React, { useState, useEffect } from "react"

const Payment = ({action, data}) => {
  console.log(data, action)
  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState("message--error");

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    creditCard: ""
  });

  useEffect(() => {
    setInitialScroll();
  }, []);

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
          action()
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

  const renderElements = () => {
    if (data.length) {
      const generateProductsData = data.map((element) => {
        return (
          <div>
            <p>Product name: <span className="highlight">{element.name}</span></p>
            <p>Price: <span className="highlight">${element.price}</span></p>
          </div>
        )
      })
      return generateProductsData
    } else {
      return (
        <div>
          <p>Product name: <span className="highlight">{data.name}</span></p>
          <p>Price: <span className="highlight">{data.price}</span></p>
        </div>
      )
    }
  }

  return (
    <div className="form__wrapper">
      <h2>Ready to buy?</h2>
      {renderElements()}

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
          <button className="payment--buy" type="submit" onBlur={() => setMessage("")}>Buy</button>
          <button className="payment--close" onClick={() => action()} onBlur={() => setMessage("")}>Close</button>
        </div>
      </form>
      <p className={messageState}>{message}</p>
    </div>
  )
}

export default Payment