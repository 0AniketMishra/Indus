// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/auth"
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyASFitQH4sjyc6wRsPUUQEkejjgDzSR_AM",
    authDomain: "indus-37b45.firebaseapp.com",
    projectId: "indus-37b45",
    storageBucket: "indus-37b45.appspot.com",
    messagingSenderId: "1057941301482",
    appId: "1:1057941301482:web:1aaaff0647fd03ab3d4f93"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const auth = getAuth()
const provider = new GoogleAuthProvider()



export {  auth, provider };




