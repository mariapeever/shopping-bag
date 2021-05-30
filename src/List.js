import React, { Component } from 'react';
import styled from 'styled-components'

import { Image, Size, Quantity, Price } from './elements'

function Product(props) {
  return(
    <ProductBox>
      <ImageContainer>
        <Image
          source={ props.image }
        />
      </ImageContainer>
      <ProductDescription>
        <ProductHeading>
          <ProductTitle>
            { props.title }
          </ProductTitle>
          <ProductSubtitle>
            { props.subtitle }
          </ProductSubtitle>
        </ProductHeading>
        <Size
          sizes={ props.sizes }
        />
        <Quantity
          onRemoveFromBasket={ props.onRemoveFromBasket }
          onAddToBasket={ props.onAddToBasket }
          units={ props.units }
        />
      </ProductDescription>
      <ProductPrice>
        { '£' + props.price.toFixed(2) }
      </ProductPrice>
    </ProductBox> 
  );
}

export default class List extends Component {

  renderItem = (product, i) => {
    const { onAddToBasket, onRemoveFromBasket } = this.props;

    return (
      <div>
        <Product
          image = { product.image }
          title = { product.title }
          subtitle = { product.subtitle }
          price = { product.price }
          sizes = { product.sizes }
          onAddToBasket={ () => onAddToBasket(product) }
          onRemoveFromBasket={ () => onRemoveFromBasket(product) }
          units= { product.units }
        />
      </div>
    );
  };

  render() {
    const { list } = this.props;

    return (
      <ListContainer>
        {list
          .filter(product => product.units !== 0)
          .map(this.renderItem)}
      </ListContainer>
    );
  }
}
const ListContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`
const ImageContainer = styled.div`
  width: calc(33.33333333% - 48px);
  padding-left: 24px;
  padding-right: 24px;
  float: left;
  display: block;
`
const ProductBox = styled.article`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`
const ProductDescription = styled.div`
  width: calc(33.33333333% - 48px);
  padding: 3em 24px;
  float: left;
  display: block;
`
const ProductHeading = styled.header`
  padding-top: 1em;
  padding-bottom: 1em;
`
const ProductTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  line-height: 1.33333333em;
  margin: 0;
`
const ProductSubtitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  line-height: 2em;
  margin: 0;
`

const ProductPrice = styled.h3`
  font-family: "Roboto", sans-serif;
  width: calc(33.33333333% - 48px);
  padding: 3em 24px;
  float: left;
  display: block;
  margin: 0.75em 0 0;
`