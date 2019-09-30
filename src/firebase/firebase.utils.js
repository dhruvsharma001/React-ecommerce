import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: 'AIzaSyAKUxWwF_xkjVw5JpYMxLc7SOZi9rt8I3c',
  authDomain: 'ecommerce-11ac0.firebaseapp.com',
  databaseURL: 'https://ecommerce-11ac0.firebaseio.com',
  projectId: 'ecommerce-11ac0',
  storageBucket: 'ecommerce-11ac0.appspot.com',
  messagingSenderId: '586071044043',
  appId: '1:586071044043:web:84ce4024bd2165d10a904e',
  measurementId: 'G-SC6RTSEDN2'
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
        ...additionalData
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
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
