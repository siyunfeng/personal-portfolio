import { createStore } from 'redux';
import initialState from './db/initData';

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
});

export default store;
