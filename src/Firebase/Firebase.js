import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'todos-5519d.firebaseapp.com',
  projectId: 'todos-5519d',
  storageBucket: 'todos-5519d.appspot.com',
  messagingSenderId: '407941969394',
  appId: '1:407941969394:web:476fab4e9db3341feca76b',
  measurementId: 'G-FY0LQ6C60C',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
