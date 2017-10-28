import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home, Meals } from 'components';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/meals" component={Meals} />
            </main>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
