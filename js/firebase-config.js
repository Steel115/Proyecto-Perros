function reportarUbicacion(dogId) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      // Guardar en Firebase
      firebase.database().ref('perros/' + dogId).set({
        ubicacion: { lat, lng },
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
      
      M.toast({html: 'Ubicación reportada!', classes: 'green'});
    });
  }
}