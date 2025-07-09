

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDXCjpBW0cPgCniJo2HH4lMVXTu2g9_c20",
  authDomain: "plushieverse-585e1.firebaseapp.com",
  projectId: "plushieverse-585e1",
  storageBucket: "plushieverse-585e1.appspot.com",
  messagingSenderId: "922619785908",
  appId: "1:922619785908:web:003751bd980698215d9de1",
  measurementId: "G-R3DRW3Z7B0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set up Firestore reference
const db = firebase.firestore();
