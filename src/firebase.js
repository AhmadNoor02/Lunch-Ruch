import firebase from 'firebase';

const  config = {
    apiKey: "AIzaSyA3qMbzFQoygP1VS0sJT9OwyOVfs07Str0",
    authDomain: "lunch-rush-a433f.firebaseapp.com",
    databaseURL: "https://lunch-rush-a433f.firebaseio.com",
    projectId: "lunch-rush-a433f",
    storageBucket: "lunch-rush-a433f.appspot.com",
    messagingSenderId: "732089288500"
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
