//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';



let firebaseConfig = {
    apiKey: "AIzaSyBJAtpxJWDkwnFPMR7JaK559B3yJCSwel0",
    authDomain: "dbapploja.firebaseapp.com",
    databaseURL: "https://dbapploja-default-rtdb.firebaseio.com",
    projectId: "dbapploja",
    storageBucket: "dbapploja.appspot.com",
    messagingSenderId: "610544645914",
    appId: "1:610544645914:web:520959382bf93a51305ea3"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}


export default firebase;