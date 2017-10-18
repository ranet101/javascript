import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import counterApp from './reducers/counterApp'
import Appli from './containers/App'
import { Provider } from 'react-redux'

//import { logger } from './middlewares/logger'

let store = createStore(counterApp);

const ReduxExample = () => (
  <Provider store={store}>
    <Appli />
  </Provider>
);

export default ReduxExample;