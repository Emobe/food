// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Wrap, Meals } from 'containers';
import DevTools from 'containers/DevTools';
import store from './store';
import './App.css';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <DevTools />
            <Route path="/" component={Wrap} />
            <Route exact path="/meals" component={Meals}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
