import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Comments from './Comment';
import Cart from './Cart';
import { Route, Routes } from 'react-router-dom';
import Listing from './Listing/Listing';
import AllListings from './Listing/AllListings';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        >
          <Route path='comments' element={<Comments />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<AllListings />} />
          <Route path='product/:productId' element={<Listing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
