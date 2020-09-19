import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCIJ6FkwmFcjG_SAUr53yZ7GIggkNXNV8A",
    authDomain: "bertac-tarkan-e-commerce.firebaseapp.com",
    databaseURL: "https://bertac-tarkan-e-commerce.firebaseio.com",
    projectId: "bertac-tarkan-e-commerce",
    storageBucket: "bertac-tarkan-e-commerce.appspot.com",
    messagingSenderId: "448594771924",
    appId: "1:448594771924:web:7881a672557bf3eaada041",
    measurementId: "G-T3GQN7Q740"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();