// Configuración REAL de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYWxKPTV2xnxvdent0fn7idV95ksFizX4",
  authDomain: "perros-perdidos-59490.firebaseapp.com",
  databaseURL: "https://perros-perdidos-59490-default-rtdb.firebaseio.com",
  projectId: "perros-perdidos-59490",
  storageBucket: "perros-perdidos-59490.firebasestorage.app",
  messagingSenderId: "308422965547",
  appId: "1:308422965547:web:f9402c6f67eaca208cad6e",
  measurementId: "G-11Z6E11X8L"
};

// Inicialización segura
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();