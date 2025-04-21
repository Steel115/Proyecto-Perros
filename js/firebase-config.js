// Configuración de Firebase (la obtendrás en el paso 3)
const firebaseConfig = {
    apiKey: "AIzaSyAYWxKPTV2xnxvdent0fn7idV95ksFizX4",
    authDomain: "perros-perdidos-59490.firebaseapp.com",
    databaseURL: "https://perros-perdidos-59490-default-rtdb.firebaseio.com",
    projectId: "perros-perdidos-59490",
    storageBucket: "perros-perdidos-59490.firebasestorage.app",
    messagingSenderId: "308422965547",
    appId: "1:308422965547:web:f9402c6f67eaca208cad6e",
  };
  
  // Inicializa Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  function locateDog(dogId) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude: lat, longitude: lng } = position.coords;
      
      // Guardar en Firebase
      database.ref('perros/' + dogId).set({
        ubicacion: { lat, lng },
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
      
      updateDogLocation(dogId, lat, lng); // Actualizar mapa local
    });
  }