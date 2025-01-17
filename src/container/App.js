import React from 'react'
import { AppContainer } from './styles'
import { ReducerContextProvider } from '../utils/Reducer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Bag from '../pages/Bag/Bag'
import Payment from '../pages/Payment/Payment'
import Checkout from '../pages/Checkout/Checkout'
import { history } from '../utils/history'

const App = (props) => {
  return (
    <AppContainer>
      <ReducerContextProvider>
        <Router history={history}>
          <Switch>
            <Route component={Bag} exact path="/" />
            <Route component={Payment} exact path="/payment" />
            <Route component={Checkout} exact path="/checkout" />
          </Switch>
        </Router>
      </ReducerContextProvider>
    </AppContainer>
  )
}

export default App
