import { createStore, compose } from 'redux';
import reducer from 'reducers';
import DevTools from 'containers/DevTools';

const enhancer = compose(
  DevTools.instrument()
);

const store = createStore(reducer, enhancer);

export default store;
