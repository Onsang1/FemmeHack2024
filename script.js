//creating map and setting view
var map = L.map('map').setView([39.951964, -75.200611], 16);

//adding tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//gets user's current location
var current_location = L.control.locate({
    flyTo: true,
    returnToPrevBounds: true,
    showPopup: false, 
    locateOptions: {watch: true, enableHighAccuracy: true}
}).addTo(map);

//adding markers
var markerData = [
    {id: 'marker1', lat: 39.948932, lng: -75.197501, name: 'Anatomy-Chemistry Building', access:"red", rooms:"309C, 309J, 408A"},
    {id: 'marker1', lat: 39.949674, lng: -75.196699, name: 'John Morgan Building', access:"red", rooms:""},
    {id: 'marker1', lat: 39.905180, lng: -75.354183, name: 'Annenberg School', access:"red", rooms:"180A, 180B, 181A, 181B, 496A, 597A, 597B"},
    {id: 'marker1', lat: 39.948681, lng: -75.19666, name: 'Stellar Chance', access:"red", rooms:"M3, M4, 384"},
    {id: 'marker1', lat: 39.948413, lng: -75.197606, name: 'Blockley Hall', access:"red", 
    rooms:"301A, 305A, 307A, 309A, 311A, 315A, 317A, 319A, 409A, 412A, 424A, 502, 526, 616, 645, 716, 721, 806, 838, 906, 938, 1001B, 1005B, 1009B, 1013B, 1015B, 1017B, 1019B, 1101A, 1112A, 1201A, 1207A, 1312A, 1317A, 1407A, 1419"},
    {id: 'marker1', lat: 39.949615, lng: -75.195837, name: 'Johnson Pavilion, Robert Wood', access:"red", rooms:"G135"},
    {id: 'marker1', lat: 39.949201, lng: -75.19608, name: 'Fagin Hall', access:"blue", rooms:"M14, M15, 248, 318A, 429A, 2010"},
    {id: 'marker1', lat: 39.949781, lng:  -75.197671, name: 'Richards Medical Research Labs', access:"red", rooms:"CB03, CB05"},
    {id: 'marker1', lat: 39.949535, lng: -75.198823, name: 'Levin Building, Stephen A.', access:"blue", rooms:"L16A, L17A"},
    {id: 'marker1', lat: 39.947941, lng: -75.192506, name: 'PCAM (Perelman Center for Advanced Medicine) ', access:"green", rooms:"OT1"},
    {id: 'marker1', lat: 39.946926, lng: -75.192836, name: 'Smilow Center for Translational Research', access:"red", rooms:"TRC08-150A, TRC08-150B"},
    {id: 'marker1', lat: 39.949856, lng: -75.191883, name: 'Penn Museum', access:"red", rooms:"188.V, 188.W, 188.X, 188.Y, 188.Z"},
    {id: 'marker1', lat: 39.950929, lng: -75.198365, name: 'Stouffer Commons', access:"blue", rooms:"315, 316 "},
    {id: 'marker1', lat: 39.950769, lng: -75.198968, name: 'Platt Performing Arts', access:"green", rooms:"166 "},
    {id: 'marker1', lat: 39.95119, lng: -75.200272, name: 'Stiteler Hall', access:"blue", rooms:"B6D"},
    {id: 'marker1', lat: 39.95082, lng: -75.20112, name: 'Ryan Veterinary Hospital ', access:"blue", rooms:"1211"},
    {id: 'marker1', lat: 39.950707, lng: -75.188764, name: 'Hutchinson Gym ', access:"red", rooms:""},
    {id: 'marker1', lat: 39.952392, lng: -75.187055, name: 'Walnut Street, 3101', access:"blue", rooms:"A42H, A42J"},
    {id: 'marker1', lat: 39.950857, lng: -75.190062, name: 'Franklin Field (Weiss) ', access:"blue", rooms:"111, 207"},
    {id: 'marker1', lat: 39.950439, lng: -75.19102, name: 'Weightman Hall', access:"blue", rooms:"112, 27"},
    {id: 'marker1', lat: 39.950831, lng: -75.19062, name: 'Dunning Coaches’ Center ', access:"blue", rooms:"105, 106 "},
    {id: 'marker1', lat: 39.952199, lng: -75.189574, name: 'David Rittenhouse Laboratory (DLR)', access:"blue", rooms:"4N47"},
    {id: 'marker1', lat: 39.952432, lng: -75.190373, name: 'Moore School Building', access:"blue", rooms:"286"},
    {id: 'marker1', lat: 39.951939, lng: -75.190548, name: 'Skirkanich Hall', access:"blue", rooms:"201S, 202S, 501S, 502, 3015, 3025, 4015, 4025"},
    {id: 'marker1', lat: 39.95176, lng: -75.19103, name: 'Towne Building', access:"blue", rooms:"315, 316 "},
    {id: 'marker1', lat: 39.952137, lng: -75.191153, name: 'Levine Hall', access:"blue", rooms:"L103"},
    {id: 'marker1', lat: 39.951307, lng: -75.191298, name: 'Hayden Hall', access:"blue", rooms:"103"},
    {id: 'marker1', lat: 39.950792, lng: -75.192026, name: 'Chemistry Labs 1958 Wing ', access:"blue", rooms:"157"},
    {id: 'marker1', lat: 39.951607 , lng: -75.192716, name: 'Duhring Wing', access:"blue", rooms:"103, 105, 203, 303/403, 305/405, 503, 505"},
    {id: 'marker1', lat: 39.951338, lng: -75.193797, name: 'College Hall', access:"blue", rooms:"107A, 107B, 220"},
    {id: 'marker1', lat: 39.951203, lng: -75.194798, name: 'Cohen Hall', access:"blue", rooms:"G13, G60"},
    {id: 'marker1', lat: 39.95273, lng: -75.192952, name: 'Jaffe History of Art', access:"blue", rooms:"Jaffe History of Art"},
    {id: 'marker1', lat: 39.952672, lng: -75.194035, name: 'Dietrich Graduate Library ', access:"blue", 
    rooms:"2nd Floor Lippincott Library [no room number], 312A & B, 313A & B, 316A & B, 317A & B, 412, 413, 415, 416, 510A & B, 511A & B"},
    {id: 'marker1', lat: 39.952079, lng: -75.194627, name: 'Robbins House', access:"blue", rooms:"204, 304 "},
    {id: 'marker1', lat: 39.952882, lng: -75.195174, name: 'Addams Hall', access:"blue", rooms:"312, 313"},
    {id: 'marker1', lat: 39.952169, lng: -75.195191, name: 'Locust Walk,3609', access:"green", rooms:"107, 209, 306"},
    {id: 'marker1', lat: 39.952338, lng: -75.196444, name: 'Colonial Penn Center', access:"green", rooms:"G9, G11, 316, 416"},
    {id: 'marker1', lat: 39.952506, lng: -75.196801, name: 'Locust House', access:"green", rooms:"110, 204"},
    {id: 'marker1', lat: 39.952893, lng: -75.197086, name: 'Stiteler Hall', access:"green", rooms:"B6D"},
    {id: 'marker1', lat: 39.9518, lng: -75.197274, name: 'Lauder Institute', access:"red", rooms:"411, 412"},
    {id: 'marker1', lat: 39.952438, lng: -75.19529, name: 'ARCH', access:"blue", rooms:"G06"},
    {id: 'marker1', lat: 39.953228, lng: -75.19711, name: 'Grad Education Building', access:"blue", rooms:"110, 213, 321, 422"},
    {id: 'marker1', lat: 39.952491, lng: -75.197556, name: 'Caster Building', access:"blue", rooms:"B16"},
    {id: 'marker1', lat: 39.951854, lng: -75.197961, name: 'McNeil Building', access:"blue", rooms:"155A"},
    {id: 'marker1', lat: 39.951391, lng: -75.196984, name: 'Academic Research Building', access:"blue", rooms:"116, 216"},
    {id: 'marker1', lat: 39.952841, lng: -75.199295, name: 'Perry World House', access:"blue", rooms:"207, 307"},
    {id: 'marker1', lat: 39.952801, lng: -75.199758, name: 'Kelly Writers House', access:"green", rooms:"201, 207"},
    {id: 'marker1', lat: 39.953533, lng: -75.202332, name: 'New College House (Public)', access:"green", rooms:"103, 104, 105"},
    {id: 'marker1', lat: 39.953729, lng: -75.202296, name: 'New College House (Residential)', access:"orange", rooms:"111A–111G, 207A, 207B"},
    {id: 'marker1', lat: 39.952177, lng: -75.202122, name: 'LGBTC', access:"green", rooms:"103, 104, 212, 213"},
    {id: 'marker1', lat: 39.951628, lng: -75.200511, name: 'Mayer', access:"orange", rooms:"119A "},
    {id: 'marker1', lat: 39.952066, lng: -75.201106, name: 'Harrison', access:"orange", rooms:"105"},
    {id: 'marker1', lat: 39.951855, lng: -75.202111, name: 'Van Pelt', access:"orange", rooms:"113"},
    {id: 'marker1', lat: 39.952407, lng: -75.202399, name: 'Class of 1925 (Gregory)', access:"orange", rooms:"20, 124"},
    {id: 'marker1', lat: 39.953059 , lng: -75.20137, name: 'Rodin', access:"orange", rooms:"100"},
    {id: 'marker1', lat: 39.954366, lng: -75.202186, name: 'Hummus Grill', access:"blue", rooms:""},  
    {id: 'marker1', lat: 39.954149, lng: -75.201127, name: 'The Radian', access:"orange", rooms:""},
    {id: 'marker1', lat: 39.954004, lng: -75.199415, name: 'Sigma Alpha Mu', access:"blue", rooms:""},
    {id: 'marker1', lat: 39.953719, lng: -75.19699, name: 'Pottruck', access:"red", rooms:"LL15, LL20"},
    {id: 'marker1', lat: 39.954089, lng: -75.195269, name: 'Sansom Place East', access:"orange", rooms:"B8"},
    {id: 'marker1', lat: 39.954059, lng: -75.194827, name: 'Institute of Contemporary Art ', access:"green", rooms:"102, 310A"},
    {id: 'marker1', lat: 39.95402, lng: -75.190875, name: 'Lauder College House', access:"orange", rooms:"113"},
    {id: 'marker1', lat: 39.953041, lng: -75.190949, name: 'Hill House', access:"orange", rooms:"A111, A112, A113, A114, A235, A330, A340 "},
    {id: 'marker1', lat: 39.953875, lng: -75.192352, name: 'Silverman Hall', access:"blue", rooms:"G95D, 254 "},
    {id: 'marker1', lat: 39.953942, lng: -75.193273, name: 'Golkin Hall', access:"blue", rooms:"246A, 246B"},
    {id: 'marker1', lat: 39.954086, lng: -75.193733, name: 'Tanenbaum Hall', access:"blue", rooms:"T158, T326"},
    {id: 'marker1', lat: 39.953507, lng: -75.194522, name: 'Perelman Center for Political Science and Economics', access:"blue", rooms:"4A, 84B, 312 A/B, 313 A/B"},
];

// marker style
var markerStyle = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}); 

// function to create markers and display on map
function display_building_names() {
    // create markers with names
    for (var i = 0; i < markerData.length; i++) {
        var marker = L.marker([markerData[i].lat, markerData[i].lng], {icon: markerStyle, 
            id:markerData[i].id, name:markerData[i].names}).addTo(map);
       
        var popupContent = document.createElement('div');

        // add marker name to the popup content
        var markerName = document.createElement('h2');
        markerName.textContent = markerData[i].name;
        popupContent.appendChild(markerName);

        // add additional information (if any) to the popup content
        var additionalInfo = document.createElement('p');
        additionalInfo.textContent = "Rooms: " + markerData[i].rooms;
        popupContent.appendChild(additionalInfo);

        // Add voting mechanism (form) to the popup content
        var voteForm = document.createElement('form');
        voteForm.innerHTML = `
            <label for="vote">Vote:</label>
            <select id="vote">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <button type="submit">Submit Vote</button>
        `;
        popupContent.appendChild(voteForm);

        // Add a button for routing
        var routeButton = document.createElement('button');
        routeButton.textContent = 'Route from Current Location';
        routeButton.addEventListener('click', createRoute.bind(null, markerData[i]));
        popupContent.appendChild(routeButton);

        // Bind popup with customized content to the marker
        marker.bindPopup(popupContent);
        }
    }

// Function to create route from user's current location to the marker
function createRoute(markerInfo) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var userLatLng = L.latLng(position.coords.latitude, position.coords.longitude);

        // Calculate route using Leaflet Routing Machine
        L.Routing.control({
            waypoints: [
                userLatLng,
                L.latLng(markerInfo.lat, markerInfo.lng)
            ]
        }).addTo(map);
    }, function (error) {
        console.error('Error getting user location:', error);
    });
}
display_building_names();