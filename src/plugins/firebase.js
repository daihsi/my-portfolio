import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDvCGK5w_MvIyc1N9tYdqL1WLstEr9AEmY",
  authDomain: "moda-portfolio.firebaseapp.com",
  databaseURL: "https://moda-portfolio.firebaseio.com",
  projectId: "moda-portfolio",
  storageBucket: "moda-portfolio.appspot.com",
  messagingSenderId: "337222172101",
};
firebase.initializeApp(config);
export const functions = firebase.functions();