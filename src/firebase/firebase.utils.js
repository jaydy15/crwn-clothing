import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDx8uK0DDQO7DKfE0VkLB3VjS4GOG8jYk0',
  authDomain: 'crwn-db-6ec78.firebaseapp.com',
  databaseURL: 'https://crwn-db-6ec78.firebaseio.com',
  projectId: 'crwn-db-6ec78',
  storageBucket: 'crwn-db-6ec78.appspot.com',
  messagingSenderId: '333276248490',
  appId: '1:333276248490:web:226ebb5734d686370893d3',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
