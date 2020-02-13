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

// user is authenticate -> return userRef
// else create new user
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

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      // convert any string into a valid URL param
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  const transformedCollectionMap = transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );

  return transformedCollectionMap;
};

// Only for uploading data to DB
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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// use google auth pop up for O_Auth
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
