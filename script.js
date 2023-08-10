mapboxgl.accessToken = 'pk.eyJ1IjoiZXN0YWMzNDMiLCJhIjoiY2xibWdzYjJqMDVmcDNubWZ2MHJycHM1NyJ9.uUsmB4OYCw7G_elIPcbVSQ';

// Inicializar el mapa
var map = new mapboxgl.Map({
  container: 'map', // ID del contenedor del mapa
  style: 'mapbox://styles/estac343/clkwjs1mx004o01qpb97igu40', // Estilo del mapa (cambiar si se desea otro estilo)
  center: [-5.082565, 37.539233], // Coordenadas iniciales del centro del mapa (longitud, latitud)
  zoom: 15 // Nivel de zoom inicial
});




// Agregar interacción para mostrar el popup cuando se hace clic en un polígono
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['Buildings-9qcn2w'] // Reemplaza 'NOMBRE_DE_TU_LAYER_ID' con el ID de la capa correspondiente en Mapbox Studio
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];
  var coordinates = e.lngLat;

  var popup = new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML('<h3>' + feature.properties.refcat + '</h3><p>' + feature.properties.foto + '</p>' + feature.properties.link_catas + '</p>' + feature.properties.fecha_cons + '</p>' + feature.properties.dire + '</p>' + feature.properties.categ + '</p>')
    .addTo(map);
});

// Cambiar el cursor cuando esté sobre el polígono
map.on('mouseenter', 'ecija-1k7oma', function () {
  map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'ecija-1k7oma', function () {
  map.getCanvas().style.cursor = '';
});
