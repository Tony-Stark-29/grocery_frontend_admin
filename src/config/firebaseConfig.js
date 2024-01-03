import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuFsFLnXlJ-zSh8xCHoreflEJgiH82nYw",
  authDomain: "grocery-mern-app.firebaseapp.com",
  projectId: "grocery-mern-app",
  storageBucket: "grocery-mern-app.appspot.com",
  messagingSenderId: "989850100870",
  appId: "1:989850100870:web:d80a3387c23b689849dd07"
};
 
const app = initializeApp(firebaseConfig);
export const imgStorage=getStorage(app);