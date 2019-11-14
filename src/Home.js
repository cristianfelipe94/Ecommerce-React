import React, { Component } from 'react';
// import Service from './service/products.js'
// import ProductJson from './service/products.json'

import ShopCard from './components/shop-element'
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      car: [],
      isLoaded: false
    }
    this.handleCar=this.handleCar.bind(this);
    this.handleData=this.handleData.bind(this);
  }
  
  // async componentDidMount() {
  //   const data = await Service(ProductJson);
  //   this.setState({
  //     data: data.Product
  //   })
  // }

  handleCar(props) {
    const id = props;
    const selected = this.state.data.find(element => element.id === id);
    this.setState({
      car: [...this.state.car, selected]
    })
  }

  handleData() {
    if(!this.state.isLoaded && this.props.data) {
      console.log("Just one")
      this.setState({
        data: this.props.data.Product,
        isLoaded: true
      })
    }
  }
  
  render () {

    const renderElements= this.state.data.map(product => {
      return <ShopCard name={product.name} imageUrl={product.imageUrl} id={product.id} content={product.content} price={product.price} categoryId={product.id} rate={product.rate} handleBuy={this.handleCar}/>
    })

    return (
      <div>
        <h1>Hello Ecommerce.</h1>
        {!this.state.data.length ? this.handleData() : <p>Loading...</p>}
        {this.state.data ? renderElements : ""}
      </div>
    )
  }
}

export default Home;
