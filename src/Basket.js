import React, { Component } from "react"
import styled from 'styled-components'

function CheckOut(props) {
  return(
    <Button 
      onClick={ props.onCheckOut }>
      Check out
    </Button>)
}

export default class Basket extends Component {
  
  render() {
    const { total } = this.props;

    return(
      <BasketArea>
        <BasketBox>
          <Total className="total">
            { '£' + total }
          </Total>
          <CheckOut
            // onCheckOut={}
          />
        </BasketBox>
      </BasketArea>
    )
  }
}

const BasketArea = styled.section`
  width: 100%;
  background-color: hsl(0, 0%, 94%);
  position: fixed;
  left: 0;
  bottom: 0;
`
const BasketBox = styled.div`
  width: 1152px;
  margin: 0 auto;
  padding-top: 1em;
  padding-bottom: 1em;
`
const Total = styled.div`
  font-family: "Roboto", sans-serif;
  text-align: right;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  line-height: 1.33333333em;
`
const Button = styled.button`
  font-family: "Roboto", sans-serif;
  color: hsl(0,0%,100%);
  font-size: 1em;
  line-height 2em;
  font-weight: 400;
  background-color: hsl(0,0%,0%);
  border: 2px solid hsl(0,0%,0%);
  padding: 0.5em 24px;
  width: 1152px;
  margin: 0 auto; 
  border-radius: 4px;
  display: block;
  &:hover,
  &:focus {
    outline: none;
    background-color: hsl(0,0%,10%);
  }
`