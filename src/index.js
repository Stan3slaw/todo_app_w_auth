import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import theme from './utils/theme';
import GlobalStyles from './utils/global';

import App from './App';

import Spinner from './components/Spinner/Spinner';

const root = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Spinner />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    root
  );
});
