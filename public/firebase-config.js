// Configuración de Firebase (la obtendrás en el paso 3)
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyAYWxKPTV2xnxvdent0fn7idV95ksFizX4",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "perros-perdidos-59490.firebaseapp.com",
    databaseURL: process.env.FIREBASE_DATABASE_URL || "https://perros-perdidos-59490-default-rtdb.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "perros-perdidos-59490",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "perros-perdidos-59490.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "308422965547",
    appId: process.env.FIREBASE_APP_ID || "1:308422965547:web:f9402c6f67eaca208cad6e",
  };
  
  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();