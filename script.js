mapboxgl.accessToken = 'pk.eyJ1IjoiZXN0YWMzNDMiLCJhIjoiY2xibWdzYjJqMDVmcDNubWZ2MHJycHM1NyJ9.uUsmB4OYCw7G_elIPcbVSQ';

// Inicializar el mapa
var map = new mapboxgl.Map({
  container: 'map', // ID del contenedor del mapa
  style: 'mapbox://styles/estac343/clo6tgz8700t901qx9cg17x6f', // Estilo del mapa (cambiar si se desea otro estilo)
  center: [-5.082565, 37.539233], // Coordenadas iniciales del centro del mapa (longitud, latitud)
  zoom: 15 // Nivel de zoom inicial
});




// Agregar interacción para mostrar el popup cuando se hace clic en un polígono
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['ecija1-0x6fz3'] // Reemplaza 'NOMBRE_DE_TU_LAYER_ID' con el ID de la capa correspondiente en Mapbox Studio
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];
  var coordinates = e.lngLat;

  // Crear el contenido del popup
  var popupContent = 
  '<h3> Tipo: ' + feature.properties.tipo
  + '</h3><strong>Refcat: </strong> ' + feature.properties.refcat 
  + '</h3> <p><strong>Riesgo: </strong>' + feature.properties.riesgo 
  + '</h3> <p><strong>Área afectada (m2): </strong>' + feature.properties.SUM_area 
  + '</h3> <p><strong>Distancia más cercana (m): </strong>' + feature.properties.NEAR_DIST
  + '</h3> <p><strong>Identificador: </strong>' + feature.properties.OBJECTID 
  + '</p> <p><strong>Foto: </strong>' + feature.properties.foto 
  + '</p><strong>Link a Catastro: </strong>' + feature.properties.link_catas 
  + '</p><strong>Fecha de construcción: </strong>' + feature.properties.fecha_cons 
  + '</p><strong>Dirección: </strong>' + feature.properties.dire 
  + '</p><strong>Detalles: </strong>' + feature.properties.categ + '</p>';




  // Calcular la longitud del contenido y establecer el max-width del popup
  var popupWidth = Math.min(300, popupContent.length * 10); // Limitar el ancho máximo a 300 píxeles
  var popup = new mapboxgl.Popup({ maxWidth: popupWidth })
    .setLngLat(coordinates)
    .setHTML(popupContent)
    .addTo(map);


});

// Cambiar el cursor cuando esté sobre el polígono
map.on('mouseenter', 'buildings-9qcn2w', function () {
  map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'buildings-9qcn2w', function () {
  map.getCanvas().style.cursor = '';
});
