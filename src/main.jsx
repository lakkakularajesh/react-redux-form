import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { VisibleApp } from './containers/app';
import { createStore } from 'redux';
import { reducerForm } from './redux/reducer';

const formStore = createStore(reducerForm);

render(
  <Provider store={formStore}>
    <VisibleApp />
  </Provider>, 
  document.getElementById('app')
);
