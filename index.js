import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
// Import reducer
import { reducer } from './src/basketRedux'

// Create store
const store = createStore(reducer)

// Import the App
import App from './src/App'

// Pass the store into the App
render(<App store={store} />, document.querySelector('#app'))