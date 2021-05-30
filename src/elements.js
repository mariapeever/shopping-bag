import React, { Component } from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export function Image(props) {
  return(
    <ProductImage 
      src={'./src/img/' + props.source }
    />
  );
}
export function Price(props) {
  return(
    <PriceLabel>
      {props.price}
    </PriceLabel>
  );
}
function SizeOption(props) {
  const selected = (props.selected) ? "selected" : "";
  return(
    <option 
      value={ props.size }
    >{ props.size }</option>
  );
}
export function Size(props) {
  return(
    <div>
      <ProductSize>Size</ProductSize>
      <SizeSelector>
        { props.sizes.map((e) => {
          return (<SizeOption
            size={e}
          />)
        }) }
      </SizeSelector>
    </div>
  );
}
export function RemoveFromBasket(props) {
  return(
      <RemoveButton 
        onClick={ props.onRemoveFromBasket } left>
        {props.text}
      </RemoveButton>
  );
}
export function AddToBasket(props) {
  return(
      <AddButton
        onClick={ props.onAddToBasket } right>
        {props.text}
      </AddButton>
  );
}
export function Quantity(props) {
  return(
    <QuantityInput>
      <RemoveFromBasket
        onRemoveFromBasket={ props.onRemoveFromBasket }
        text="-"
      />
      <ProductUnits type="text" value={ props.units } />
      <AddToBasket
        onAddToBasket={ props.onAddToBasket }
        text="+"
      />
    </QuantityInput>
  );
}

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  color: hsl(0,0%,0%);
  font-size: 1em;
  line-height 2em;
  font-weight: 400;
  padding-left: 12px;
  padding-right: 12px;
  background-color: transparent;
  border: 2px solid hsl(0,0%,0%);
  border-radius: 0;
  width: calc(30% - 4px);
  &:hover,
  &:focus {
    background-color: hsl(0,0%,0%);
    color: hsl(0,0%,100%);
    outline: none;
  }
`
const RemoveButton = styled(Button)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
export const AddButton = styled(Button)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`
const ProductImage = styled.img`
  width: 100%;
  height: auto;
`
const ProductSize = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  line-height: 2em;
  margin: 0;
`
const SizeSelector = styled.select`
  font-family: "Roboto", sans-serif;
  color: hsl(0,0%,0%);
  font-size: 1em;
  line-height 2em;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 4px;
  border: 2px solid hsl(0,0%,0%);
  border-radius: 4px;
  width: max-content;
  display: block;
  margin-bottom: 2em;
  &:hover,
  &:focus {
    background-color: hsl(0,0%,0%);
    color: hsl(0,0%,100%);
    outline: none;
  }
`
const ProductUnits = styled.input`
  font-family: "Roboto", sans-serif;
  color: hsl(0,0%,0%);
  font-size: 1em;
  line-height 2em;
  font-weight: 400;
  padding-left: 12px;
  padding-right: 12px;
  background-color: transparent;
  border: 2px solid hsl(0,0%,0%);
  margin-left: -2px;
  margin-right: -2px;
  border-radius:0;
  width: calc(40% - 4px);
  &:hover,
  &:focus {
    outline: none;
  }
`
const QuantityInput = styled.div`
  width: 144px;
`

const PriceLabel = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  line-height: 1.33333333em;
  margin: 0;
`
