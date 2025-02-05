import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWyi1FBcatyMEaE2pqleWi9S7vQ3NFXP0",
  authDomain: "koom-b93c1.firebaseapp.com",
  projectId: "koom-b93c1",
  storageBucket: "koom-b93c1.firebasestorage.app",
  messagingSenderId: "925076719445",
  appId: "1:925076719445:web:7a052dd96d28fd957011dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);