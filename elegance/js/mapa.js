function inicializarMapa() {
    var coordenadas = { lat: -23.5505, lng: -46.6333 }; // Substitua pelas coordenadas do seu local

    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: coordenadas,
        zoom: 15 // Ajuste o nível de zoom conforme necessário
    });

    var marcador = new google.maps.Marker({
        position: coordenadas,
        map: mapa,
        title: 'Meu Local'
    });
}