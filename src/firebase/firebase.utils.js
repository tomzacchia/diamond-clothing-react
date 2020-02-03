// firebase is quite therefore we import apps individually
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCyyUCEeOEoe5KOnjzFPfG2ZaMuxsDZKfQ',
  authDomain: 'react-ecommerce-site-92d63.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-site-92d63.firebaseio.com',
  projectId: 'react-ecommerce-site-92d63',
  storageBucket: 'react-ecommerce-site-92d63.appspot.com',
  messagingSenderId: '289810615078',
  appId: '1:289810615078:web:385316c5cab65af4274fe7',
  measurementId: 'G-BXVWX31NN9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// use google auth pop up for O_Auth
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
