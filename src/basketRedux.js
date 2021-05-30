require('./api');

// Action types
export const types = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET"
}

// Dispatch actions
export const actionCreators = {
  add: product => {
    return { type: types.ADD_TO_BASKET, payload: product };
  },
  remove: product => {
    return { type: types.REMOVE_FROM_BASKET, payload: product };
  }
}

// Initial state of the store
const initialState = {
  products: [
    { id: 1, 
      title:"Product Name",
      subtitle:"Product Subtitle Here",
      price: 550.0,
      sizes:["S","M","L"], 
      image: "1.png",
      units: 0
    }, 
    { id: 2, 
      title:"Product Name",
      subtitle:"Product Subtitle Here",
      price: 250.0,
      sizes:["S","M","L"], 
      image: "2.png",
      units: 1
    },
    { id: 3, 
      title:"Product Name",
      subtitle:"Product Subtitle Here",
      price: 150.0,
      sizes:["S","M","L"],
      image: "3.png",
      units: 1
    },
    { id: 4, 
      title:"Product Name",
      subtitle:"Product Subtitle Here",
      price: 100.0,
      sizes:["S","M","L"],
      image: "4.png",
      units: 1
    },
    { id: 5, 
      title:"Product Name",
      subtitle:"Product Subtitle Here",
      price: 500.0,
      sizes:["S","M","L"],
      image: "5.png",
      units: 0
    },
    { id: 6, 
      title:"Product Name",
      subtitle:"Product Subtitle Here",
      price: 350.0,
      sizes:["S","M","L"],
      image: "6.png",
      units: 0
    },
    { id: 7, 
      title:"Product Name",
      subtitle:"Product Subtitle Here",
      price: 450.0,
      sizes:["S","M","L"],
      image: "7.png",
      units: 0
    }]
};

// Reducer
export const reducer = (state = initialState, action) => {
  const { products } = state
  const { type, payload } = action

  function addToBasket(units) {
    return ((units < 10) ? ++units : units)
  }
  function removeFromBasket(units) {
    return ((units > 0 ) ? --units : units)
  }
  function adjustUnits(products, action) {
    return (products
      .map((product,i) => ((products.filter((product, i) => product.id === payload.id)[0].id === product.id) ? 
          {...product, units: ((action === "ADD_TO_BASKET") ? 
            addToBasket(product.units) : removeFromBasket(product.units))} : product )))
  }

  switch (type) {
    case types.ADD_TO_BASKET: {
      return {
        ...state,
        products: adjustUnits(products, 'ADD_TO_BASKET')
      }
    }
    case types.REMOVE_FROM_BASKET: {
      return {
        ...state,
        products: adjustUnits(products, 'REMOVE_FROM_BASKET')
      }
    }
  }
  return state;
}
