import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYq4N2byx0tY2yz61cvNeZytYHlXC1e0E",
    authDomain: "react-ecommerce-20440.firebaseapp.com",
    projectId: "react-ecommerce-20440",
    storageBucket: "react-ecommerce-20440.appspot.com",
    messagingSenderId: "883030421521",
    appId: "1:883030421521:web:8a3465f097f88a8825c1b0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);