import React, { Component } from 'react';
import Service from './service/products.js'
import ProductJson from './service/products.json'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    const data = await Service(ProductJson);
    this.setState({
      data: data.Product
    })
  }

  render () {
    return (
      <div>
        <h1>Hello Ecommerce.</h1>
      </div>
    )
  }
}

export default App;
