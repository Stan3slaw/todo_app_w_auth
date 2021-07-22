// import { compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import firebase from '../Firebase/Firebase';
// import { getFirebase } from 'react-redux-firebase';
// import { getFirestore } from 'redux-firestore';
// import { createFirestoreInstance } from 'redux-firestore';

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import firebase from '../Firebase/Firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { createFirestoreInstance } from 'redux-firestore';

import rootReducer from './reducers';

firebase.firestore();

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
