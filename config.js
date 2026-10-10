/*
  Gezinsplanning – instellingen
  ------------------------------
  firebase: plak hier het configuratie-object van je Firebase-webapp
            (Firebase-console › Projectinstellingen › Algemeen › Je apps › SDK-configuratie › "Config").
            Laat op null staan om zonder synchronisatie te werken: alles blijft dan op het toestel.
            Deze gegevens zijn niet geheim; de toegang wordt afgeschermd door de beveiligingsregels in Firebase.
  family:   naam van de map in de database. Willekeurig gekozen; hoeft niet aangepast te worden.
*/
window.GP_CONFIG = {
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHTYMWsphLCGr0T6X9npJUB_IHsDM7myk",
  authDomain: "gezinsplanning-4d7ff.firebaseapp.com",
  projectId: "gezinsplanning-4d7ff",
  storageBucket: "gezinsplanning-4d7ff.firebasestorage.app",
  messagingSenderId: "639295719093",
  appId: "1:639295719093:web:742773f57b416928e7a0fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  family: 'gezin-q7m2x9kd4r',
};
