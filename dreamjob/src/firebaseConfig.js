import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDyJRwByyY9rj8XEm9X7IvCV1dICzNcLrA", 
    authDomain: "dreamjob-contact-us.firebaseapp.com",
    databaseURL: "https://dreamjob-contact-us-default-rtdb.firebaseio.com", 
    projectId: "dreamjob-contact-us", 
    storageBucket: "dreamjob-contact-us.appspot.com", 
    messagingSenderId: "977052145459", 
    appId: "1:977052145459:web:eccbc154e4aab50cf19046" 
  };
  

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { app, database };