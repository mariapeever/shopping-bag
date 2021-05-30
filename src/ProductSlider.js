import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { Image } from './elements'

function AddToBasket(props) {
  return(
      <AddButton
        onClick={ props.onAddToBasket }>
        {props.text}
      </AddButton>
  )
}
function Product(props) {
  return(
    <ProductBox>
      <ImageContainer>
        <Image
          source={ props.image }
        />
      </ImageContainer>
      <ProductDescription>
        <ProductTitle>
          { props.title }
        </ProductTitle>
        <ProductSubtitle>
          { props.subtitle }
        </ProductSubtitle>
        <AddToBasket
          onAddToBasket={ props.onAddToBasket }
          text="Add to Basket"
        />
      </ProductDescription>
    </ProductBox> 
  );
}

export default class List extends Component {

  renderItem = (product, i) => {
    const { onAddToBasket } = this.props;

    return (
      <ProductSlide>
        <Product
          image = { product.image }
          title = { product.title }
          subtitle = { product.subtitle }
          onAddToBasket={ () => onAddToBasket(product) }
        />
      </ProductSlide>
    );
  };

  render() {
    const { list } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <SliderBox {...settings}>
        {list
          .filter(product => product.units === 0)
          .map(this.renderItem)}
      </SliderBox>
    );
  }
}

const AddButton = styled.button`
  font-family: "Roboto", sans-serif;
  color: hsl(0,0%,0%);
  font-size: 0.875em;
  line-height 2.28571429em;
  font-weight: 700;
  text-transform: uppercase;
  background-color: transparent;
  border: 2px solid hsl(0,0%,0%);
  padding: 0.5em 24px;
  width: 100%;
  margin: 0 auto; 
  border-radius: 4px;
  display: block;
  &:hover,
  &:focus {
    outline: none;
    color: hsl(0,0%,100%);
    background-color: hsl(0,0%,10%);
  }
`
const SliderBox = styled(Slider)`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 10em;
  .slick-slide {
    float:left;
  }
  .slick-arrow {
    font-family: "Roboto", sans-serif;
    color: hsl(0,0%,0%);
    font-size: 0.875em;
    line-height 2.28571429em;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid hsl(0,0%,0%);
    padding: 0.5em 24px; 
    border-radius: 4px;
    display: block;
    position: absolute;
    top: 0;
    &:hover,
    &:focus {
      outline: none;
      color: hsl(0,0%,100%);
      background-color: hsl(0,0%,10%);
    }
    &.slick-prev {
      left: 0;
    }
    &.slick-next {
      right: 0;
    }

  }
  .slick-dots {
    list-style: none;
    padding: 1em;
    li button {
      background-color: transparent;
      color: hsl(0,0%,0%);
      font-size: 1em;
      padding: 0.5em;
      border: 2px solid hsl(0, 0%, 0%);
      display: block;
      float: left;
      margin: 2em 0.5em;
      border-radius: 4px;
    }
  }
`
const ProductSlide = styled.div`
  
`
const ImageContainer = styled.div`
  width: calc(100% - 48px);
  padding: 2em 24px;
  height: 20em;
`
const ProductBox = styled.article`
  width: calc(100% - 48px);
  float: left;
  padding-left: 24px;
  padding-right: 24px;
`
const ProductDescription = styled.div`
  width: 100%;
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
  margin: 0 0 1em;
`
