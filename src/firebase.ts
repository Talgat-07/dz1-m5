import { initializeApp } from "firebase/app";

type Firebase = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: Firebase = {
  apiKey: "AIzaSyATb65-8gb--2aCTYv6-0AoPDWt_m7B-A0",
  authDomain: "first-ed0e9.firebaseapp.com",
  projectId: "first-ed0e9",
  storageBucket: "first-ed0e9.appspot.com",
  messagingSenderId: "627854148527",
  appId: "1:627854148527:web:659362cfc786266290e55a",
};

initializeApp(firebaseConfig);
