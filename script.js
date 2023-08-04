mapboxgl.accessToken = 'pk.eyJ1IjoiZXN0YWMzNDMiLCJhIjoiY2xibWdzYjJqMDVmcDNubWZ2MHJycHM1NyJ9.uUsmB4OYCw7G_elIPcbVSQ';

// Inicializar el mapa
var map = new mapboxgl.Map({
  container: 'map', // ID del contenedor del mapa
  style: 'mapbox://styles/estac343/clkwjs1mx004o01qpb97igu40', // Estilo del mapa (cambiar si se desea otro estilo)
  center: [-5.082565, 37.539233], // Coordenadas iniciales del centro del mapa (longitud, latitud)
  zoom: 12 // Nivel de zoom inicial
});
