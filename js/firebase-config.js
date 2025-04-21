// Escuchar cambios en Firebase
firebase.database().ref('perros/').on('value', snapshot => {
  const datos = snapshot.val() || {};
  
  Object.keys(datos).forEach(dogId => {
    const { lat, lng } = datos[dogId].ubicacion;
    actualizarMapa(dogId, lat, lng);
  });
});

// Función mejorada para actualizar mapas
function actualizarMapa(dogId, lat, lng) {
  const mapaDiv = document.getElementById(`map-${dogId}`);
  
  if (!mapaDiv) return;

  // Destruir mapa existente si hay uno
  if (mapaDiv._map) {
    mapaDiv._map.off();
    mapaDiv._map.remove();
  }

  // Crear nuevo mapa
  mapaDiv._map = L.map(mapaDiv).setView([lat, lng], 15);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapaDiv._map);
  
  // Marcador con popup
  mapaDiv._marker = L.marker([lat, lng]).addTo(mapaDiv._map)
    .bindPopup(`Último reporte: ${new Date().toLocaleTimeString()}`)
    .openPopup();
}