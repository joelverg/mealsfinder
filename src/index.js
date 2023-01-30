import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import FavoriteMealList from './components/FavoriteMealList';


const store = configureStore({ reducer: rootReducer })
store.subscribe(() => console.log('store', store.getState()))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/favorites' element={<FavoriteMealList/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  
);

