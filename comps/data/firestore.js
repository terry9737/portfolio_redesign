import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBeUVhpTqKnK4fDwjO_s0HMvuh-1xNLh0g",

  authDomain: "portfolio-contact-47358.firebaseapp.com",

  projectId: "portfolio-contact-47358",

  storageBucket: "portfolio-contact-47358.appspot.com",

  messagingSenderId: "162394672473",

  appId: "1:162394672473:web:d60f21764c99f68c33d048",
});

export const db = getFirestore();
