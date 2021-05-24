import firebase from "firebase/app";
import  "firebase/firestore";
import  "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyAPfV57sNKgEH_SFmUjy0AEa9VQff6dlVw",
    authDomain: "react-ecommerce-d558f.firebaseapp.com",
    projectId: "react-ecommerce-d558f",
    storageBucket: "react-ecommerce-d558f.appspot.com",
    messagingSenderId: "943466961897",
    appId: "1:943466961897:web:c500ec635952e1f5af0978",
    measurementId: "G-0N44JN2MJQ"
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
  
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  

  export default firebase;
  
