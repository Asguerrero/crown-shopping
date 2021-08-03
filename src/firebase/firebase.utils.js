import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBls2H3iBq0glyS7nZttSjvFxfQaTbtcVs",
    authDomain: "crown-clothes-3f7cd.firebaseapp.com",
    projectId: "crown-clothes-3f7cd",
    storageBucket: "crown-clothes-3f7cd.appspot.com",
    messagingSenderId: "794077045860",
    appId: "1:794077045860:web:20bb405bc166a7442e6b71",
    measurementId: "G-VFFY2SJ2R1"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;