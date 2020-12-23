import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'reset-css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faHeart } from '@fortawesome/free-solid-svg-icons'

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { Route, Switch } from 'react-router-dom';

import { localStorageMiddleware } from './middleware';

export const history = createHistory();

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware({
  context: { history }
});
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware, localStorageMiddleware))
);

sagaMiddleware.run(rootSaga);

library.add(fab, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faHeart);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
