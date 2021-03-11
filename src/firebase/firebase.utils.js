import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTE2ztB4LYRPIeDg44mBXbOdGGGvILKjY",
  authDomain: "crwn-db-deba6.firebaseapp.com",
  projectId: "crwn-db-deba6",
  storageBucket: "crwn-db-deba6.appspot.com",
  messagingSenderId: "313144925409",
  appId: "1:313144925409:web:edbd5c8a9e4c024dabeba0",
  measurementId: "G-KQ5XE7SH70"
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
