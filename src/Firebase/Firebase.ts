import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAd-9319xEIXTVTR2A59Tsk9Li2ThdiHsg',
  authDomain: 'github-finder-rn.firebaseapp.com',
  projectId: 'github-finder-rn',
  storageBucket: 'github-finder-rn.appspot.com',
  messagingSenderId: '502908380259',
  appId: '1:502908380259:web:5ffa4f378bd95c0ff00456',
  measurementId: 'G-J8HNX2GJ0N',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const google_provider = new firebase.auth.GoogleAuthProvider().setCustomParameters(
  {
    prompt: 'select_account',
  },
);
