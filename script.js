var map = L.map('map').setView([39.951964, -75.200611], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var current_location = L.control.locate({
    flyTo: true,
    returnToPrevBounds: true,
    showPopup: false, 
    locateOptions: {watch: true, enableHighAccuracy: true}
}).addTo(map);

var markerData = [
    {id: 'marker1', lat: 39.948932, lng: -75.197501, name: 'Anatomy-Chemistry Building', access:"red"},
    {id: 'marker1', lat: 39.949674, lng: -75.196699, name: 'John Morgan Building', access:"red"},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: 'Annenberg School', access:"red"},
    {id: 'marker1', lat: 39.948681, lng: -75.19666, name: 'Stellar Chance', access:"red"},
    {id: 'marker1', lat: 39.948413, lng: -75.197606, name: 'Blockley Hall', access:"red"},
    {id: 'marker1', lat: 39.949615, lng: -75.195837, name: 'Johnson Pavilion, Robert Wood', access:"blue"},
    {id: 'marker1', lat: 39.949201, lng: -75.19608, name: 'Fagin Hall', access:"red"},
    {id: 'marker1', lat: 39.949781, lng:  -75.197671, name: 'Richards Medical Research Labs', access:"red"},
    {id: 'marker1', lat: 39.949535, lng: -75.198823, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: '', access:""},
];

var markerStyle = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}); 

function display_building_names() {
    // Create markers with names
    for (var i = 0; i < markerData.length; i++) {
        var marker = L.marker([markerData[i].lat, markerData[i].lng], {icon: markerStyle, 
            id:markerData[i].id, name:markerData[i].names}).addTo(map);
        
        let marker_name = markerData[i].name; 

        // console.log(building_data[1]);
        // let generatedHtml = '<strong>' + building_data[i][1] +' </strong>';
        // let sidebar_title = '<div class="header">' + building_data[i][1] + '</div>';
        // let sidebar_images = '<br>' + building_data[i][2];
        // console.log(generatedHtml);
        marker.bindPopup(marker_name);
        }
    }
display_building_names();