import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {Provider} from 'react-redux';
import store from './store'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter> 
  </Provider>
  ,
   document.getElementById('root')
 );
