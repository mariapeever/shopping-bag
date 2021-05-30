import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { actionCreators } from './basketRedux'
import List from './List'
import Basket from './Basket'
import ProductSlider from './ProductSlider'
import api from './api'

export default class App extends Component {

  state = {}

  componentWillMount() {
    const {store} = this.props
    var {products} = store.getState();
    // Set product units to 1
    /*products = products.map((product) => { 
      product.units = 1;
      return product; 
    });*/
    this.setState({products})
    /* 
    api.readAll().then((products) => {
      console.log('all products', products)
      this.setState({
        products: products
      })
    }) */
  
    this.unsubscribe = store.subscribe(() => {
      const {products} = store.getState()
      this.setState({products})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddToBasket = (product) => {
    const {store} = this.props
    store.dispatch(actionCreators.add(product))
  }

  onRemoveFromBasket = (product) => {
    const {store} = this.props
    store.dispatch(actionCreators.remove(product))
  }

  calcTotal() {
    const {store} = this.props
    var {products} = store.getState();

    var total = 0;
    products.forEach(e => {
      total += e.units * e.price
    })
    return total;
  }

  render() {
    const {products} = this.state
    return (
      <Container>
        <Title>
          Your Bag
        </Title>
        <List
          list={products}
          onAddToBasket={this.onAddToBasket}
          onRemoveFromBasket={this.onRemoveFromBasket}
        />
        <ProductSlider 
          list={products}
          onAddToBasket={this.onAddToBasket}
        />
        <Basket 
          total={ this.calcTotal().toFixed(2) }
        />
      </Container>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    color: hsl(0, 0%, 0%);
    font-size: 1em;
    line-height: 2em;
    font-family: "Roboto", sans-serif;
    margin-bottom: 6em;
  }
`
const Container = styled.div`
  width: 1152px;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
`
const Title = styled.h1`
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: hsl(0,0%,0%);
  line-height: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 0;
`




