
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDHZJ5AdrE-0IQbCv_UsslViTiRBV8KJMc",
  authDomain: "tiktok-jornada-64c0f.firebaseapp.com",
  projectId: "tiktok-jornada-64c0f",
  storageBucket: "tiktok-jornada-64c0f.appspot.com",
  messagingSenderId: "768651811257",
  appId: "1:768651811257:web:2e8183380008582b0afe68"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;