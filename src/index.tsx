import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
			<BrowserRouter>
        <Auth0Provider
          domain="dev-t4s0rl58.eu.auth0.com"
          clientId="7bK6xDnMM8lbDPdowjjukWzA5HBpd1hH"
          redirectUri={window.location.origin}
        >
			  	<App />
        </Auth0Provider>
			</BrowserRouter>
    </Provider>
  </StrictMode>,
	document.getElementById('root'),
);