/*
  Gezinsplanning – instellingen
  ------------------------------
  firebase: het configuratie-object van de Firebase-webapp
            (Firebase-console › Projectinstellingen › Algemeen › Je apps › SDK-configuratie › "Config").
            Op null zetten om zonder synchronisatie te werken: alles blijft dan op het toestel.
            Deze gegevens zijn niet geheim; de toegang wordt afgeschermd door de beveiligingsregels in Firebase.
  family:   naam van de map in de database. Willekeurig gekozen; hoeft niet aangepast te worden.
*/
window.GP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAHTYMWsphLCGr0T6X9npJUB_IHsDM7myk",
    authDomain: "gezinsplanning-4d7ff.firebaseapp.com",
    projectId: "gezinsplanning-4d7ff",
    storageBucket: "gezinsplanning-4d7ff.firebasestorage.app",
    messagingSenderId: "639295719093",
    appId: "1:639295719093:web:742773f57b416928e7a0fc",
  },
  family: 'gezin-q7m2x9kd4r',
};
