import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseLine from '@mui/material/CssBaseline';
import './fonts/fonts.js'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'; 
import {store} from './store';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseLine/>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

