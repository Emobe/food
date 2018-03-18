// @flow
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Wrap, Meals } from 'containers';
import DevTools from 'containers/DevTools';
import { MuiThemeProvider, createMuiTheme, withTheme } from 'material-ui/styles';
import amber from 'material-ui/colors/amber';
import lightGreen from 'material-ui/colors/lightGreen';
import store from './store';
import './App.css';

type Props = {};

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: lightGreen
  }
});

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <CssBaseline>
              <DevTools />
              <Route path="/" component={Wrap} />
              <Route exact path="/meals" component={Meals}/>
            </CssBaseline>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
