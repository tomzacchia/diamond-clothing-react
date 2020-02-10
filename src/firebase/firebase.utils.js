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

// If the user is authenticated we'll return a reference to the document
// else create a new user in our database
export const createUserProfileDocument = async (
  authenticatedUser,
  additionalData
) => {
  if (!authenticatedUser) return null;

  const userRef = firestore.doc(`{users/${authenticatedUser.uid}}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = authenticatedUser;
    const createdAt = new Date();

    const newUser = { displayName, email, createdAt, ...additionalData };

    try {
      await userRef.set(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // batch returns a promise
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// use google auth pop up for O_Auth
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
