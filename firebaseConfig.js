// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXkMzYnopTlqy9ndsOXuVib_mldrSsTQs",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "feedback-form-3394e",
    storageBucket: "feedback-form-3394e.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);

export { db};
