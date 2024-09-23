import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainStack from './src/navigation/mainStack';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
const App = () => {

  const firebaseConfig = {
    apiKey: 'AIzaSyCil-_DKhIU3xLbKaIzobbo5_qiAjZS6kA',
    authDomain: 'quizapp-47cf5.firebaseapp.com',
    projectId: 'quizapp-47cf5',
    storageBucket: 'quizapp-47cf5.appspot.com',
    messagingSenderId: '481010804569',
    appId: '1:481010804569:android:5c7fbe9473d280eaf34e48',
  };  


  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }


  return (
    <MainStack />
  );
}
export default App;
