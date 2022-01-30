import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from "./routers/AppRouter"
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';

export const Application = () => {
  return (
    <>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </>
  );
};
