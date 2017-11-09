import { createStore } from 'redux';
import { default as reducer } from 'ducks';

const store = createStore(reducer);

export default store;
