// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX4S8re3_7ECq_xydA_N-zAwZINaSjnN0",
    authDomain: "restzz.firebaseapp.com",
    projectId: "restzz",
    storageBucket: "restzz.appspot.com",
    messagingSenderId: "482947995597",
    appId: "1:482947995597:web:33ae6ea8261c4d2a511684",
    measurementId: "G-8SX4BE16YR"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
var db = firebase.firestore();
  
var markerRefs = {};

//creating map and setting view
var map = L.map('map').setView([39.952484, -75.19486], 16);

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
    {id: '1', lat: 39.948932, lng: -75.197501, name: 'Anatomy-Chemistry Building', access:"red", rooms:"309C, 309J, 408A"},
    {id: '2', lat: 39.949674, lng: -75.196699, name: 'John Morgan Building', access:"red", rooms:""},
    {id: '3', lat: 39.952989, lng: -75.195851, name: 'Annenberg School', access:"red", rooms:"180A, 180B, 181A, 181B, 496A, 597A, 597B"},
    {id: '4', lat: 39.948681, lng: -75.19666, name: 'Stellar Chance', access:"red", rooms:"M3, M4, 384"},
    {id: '5', lat: 39.948413, lng: -75.197606, name: 'Blockley Hall', access:"red", 
    rooms:"301A, 305A, 307A, 309A, 311A, 315A, 317A, 319A, 409A, 412A, 424A, 502, 526, 616, 645, 716, 721, 806, 838, 906, 938, 1001B, 1005B, 1009B, 1013B, 1015B, 1017B, 1019B, 1101A, 1112A, 1201A, 1207A, 1312A, 1317A, 1407A, 1419"},
    {id: '6', lat: 39.949615, lng: -75.195837, name: 'Johnson Pavilion, Robert Wood', access:"red", rooms:"G135"},
    {id: '7', lat: 39.949201, lng: -75.19608, name: 'Fagin Hall', access:"blue", rooms:"M14, M15, 248, 318A, 429A, 2010"},
    {id: '8', lat: 39.949781, lng:  -75.197671, name: 'Richards Medical Research Labs', access:"red", rooms:"CB03, CB05"},
    {id: '9', lat: 39.949535, lng: -75.198823, name: 'Levin Building, Stephen A.', access:"blue", rooms:"L16A, L17A"},
    {id: '10', lat: 39.947941, lng: -75.192506, name: 'PCAM (Perelman Center for Advanced Medicine) ', access:"green", rooms:"OT1"},
    {id: '11', lat: 39.946926, lng: -75.192836, name: 'Smilow Center for Translational Research', access:"red", rooms:"TRC08-150A, TRC08-150B"},
    {id: '12', lat: 39.949856, lng: -75.191883, name: 'Penn Museum', access:"red", rooms:"188.V, 188.W, 188.X, 188.Y, 188.Z"},
    {id: '13', lat: 39.950929, lng: -75.198365, name: 'Stouffer Commons', access:"blue", rooms:"315, 316 "},
    {id: '14', lat: 39.950769, lng: -75.198968, name: 'Platt Performing Arts', access:"green", rooms:"166 "},
    {id: '15', lat: 39.95119, lng: -75.200272, name: 'Stiteler Hall', access:"blue", rooms:"B6D"},
    {id: '16', lat: 39.95082, lng: -75.20112, name: 'Ryan Veterinary Hospital ', access:"blue", rooms:"1211"},
    {id: '17', lat: 39.950707, lng: -75.188764, name: 'Hutchinson Gym ', access:"red", rooms:""},
    {id: '18', lat: 39.952392, lng: -75.187055, name: 'Walnut Street, 3101', access:"blue", rooms:"A42H, A42J"},
    {id: '19', lat: 39.950857, lng: -75.190062, name: 'Franklin Field (Weiss) ', access:"blue", rooms:"111, 207"},
    {id: '20', lat: 39.950439, lng: -75.19102, name: 'Weightman Hall', access:"blue", rooms:"112, 27"},
    {id: '21', lat: 39.950831, lng: -75.19062, name: 'Dunning Coaches’ Center ', access:"blue", rooms:"105, 106 "},
    {id: '22', lat: 39.952199, lng: -75.189574, name: 'David Rittenhouse Laboratory (DLR)', access:"blue", rooms:"4N47"},
    {id: '23', lat: 39.952432, lng: -75.190373, name: 'Moore School Building', access:"blue", rooms:"286"},
    {id: '24', lat: 39.951939, lng: -75.190548, name: 'Skirkanich Hall', access:"blue", rooms:"201S, 202S, 501S, 502, 3015, 3025, 4015, 4025"},
    {id: '25', lat: 39.95176, lng: -75.19103, name: 'Towne Building', access:"blue", rooms:"315, 316 "},
    {id: '26', lat: 39.952137, lng: -75.191153, name: 'Levine Hall', access:"blue", rooms:"L103"},
    {id: '27', lat: 39.951307, lng: -75.191298, name: 'Hayden Hall', access:"blue", rooms:"103"},
    {id: '28', lat: 39.950792, lng: -75.192026, name: 'Chemistry Labs 1958 Wing ', access:"blue", rooms:"157"},
    {id: '29', lat: 39.951607 , lng: -75.192716, name: 'Duhring Wing', access:"blue", rooms:"103, 105, 203, 303/403, 305/405, 503, 505"},
    {id: '30', lat: 39.951338, lng: -75.193797, name: 'College Hall', access:"blue", rooms:"107A, 107B, 220"},
    {id: '31', lat: 39.951203, lng: -75.194798, name: 'Cohen Hall', access:"blue", rooms:"G13, G60"},
    {id: '32', lat: 39.95273, lng: -75.192952, name: 'Jaffe History of Art', access:"blue", rooms:"Jaffe History of Art"},
    {id: '33', lat: 39.952672, lng: -75.194035, name: 'Dietrich Graduate Library ', access:"blue", 
    rooms:"2nd Floor Lippincott Library [no room number], 312A & B, 313A & B, 316A & B, 317A & B, 412, 413, 415, 416, 510A & B, 511A & B"},
    {id: '34', lat: 39.952079, lng: -75.194627, name: 'Robbins House', access:"blue", rooms:"204, 304 "},
    {id: '35', lat: 39.952882, lng: -75.195174, name: 'Addams Hall', access:"blue", rooms:"312, 313"},
    {id: '36', lat: 39.952169, lng: -75.195191, name: 'Locust Walk,3609', access:"green", rooms:"107, 209, 306"},
    {id: '37', lat: 39.952338, lng: -75.196444, name: 'Colonial Penn Center', access:"green", rooms:"G9, G11, 316, 416"},
    {id: '38', lat: 39.952506, lng: -75.196801, name: 'Locust House', access:"green", rooms:"110, 204"},
    {id: '39', lat: 39.952893, lng: -75.197086, name: 'Stiteler Hall', access:"green", rooms:"B6D"},
    {id: '40', lat: 39.9518, lng: -75.197274, name: 'Lauder Institute', access:"red", rooms:"411, 412"},
    {id: '41', lat: 39.952438, lng: -75.19529, name: 'ARCH', access:"blue", rooms:"G06"},
    {id: '42', lat: 39.953228, lng: -75.19711, name: 'Grad Education Building', access:"blue", rooms:"110, 213, 321, 422"},
    {id: '43', lat: 39.952491, lng: -75.197556, name: 'Caster Building', access:"blue", rooms:"B16"},
    {id: '44', lat: 39.951854, lng: -75.197961, name: 'McNeil Building', access:"blue", rooms:"155A"},
    {id: '45', lat: 39.951391, lng: -75.196984, name: 'Academic Research Building', access:"blue", rooms:"116, 216"},
    {id: '46', lat: 39.952841, lng: -75.199295, name: 'Perry World House', access:"blue", rooms:"207, 307"},
    {id: '47', lat: 39.952801, lng: -75.199758, name: 'Kelly Writers House', access:"green", rooms:"201, 207"},
    {id: '48', lat: 39.953533, lng: -75.202332, name: 'New College House (Public)', access:"green", rooms:"103, 104, 105"},
    {id: '49', lat: 39.953729, lng: -75.202296, name: 'New College House (Residential)', access:"orange", rooms:"111A–111G, 207A, 207B"},
    {id: '50', lat: 39.952177, lng: -75.202122, name: 'LGBTC', access:"green", rooms:"103, 104, 212, 213"},
    {id: '51', lat: 39.951628, lng: -75.200511, name: 'Mayer', access:"orange", rooms:"119A "},
    {id: '52', lat: 39.952066, lng: -75.201106, name: 'Harrison', access:"orange", rooms:"105"},
    {id: '53', lat: 39.951855, lng: -75.202111, name: 'Van Pelt', access:"orange", rooms:"113"},
    {id: '54', lat: 39.952407, lng: -75.202399, name: 'Class of 1925 (Gregory)', access:"orange", rooms:"20, 124"},
    {id: '55', lat: 39.953059 , lng: -75.20137, name: 'Rodin', access:"orange", rooms:"100"},
    {id: '56', lat: 39.954366, lng: -75.202186, name: 'Hummus Grill', access:"blue", rooms:""},  
    {id: '57', lat: 39.954149, lng: -75.201127, name: 'The Radian', access:"orange", rooms:""},
    {id: '58', lat: 39.954004, lng: -75.199415, name: 'Sigma Alpha Mu', access:"blue", rooms:""},
    {id: '59', lat: 39.953719, lng: -75.19699, name: 'Pottruck', access:"red", rooms:"LL15, LL20"},
    {id: '60', lat: 39.954089, lng: -75.195269, name: 'Sansom Place East', access:"orange", rooms:"B8"},
    {id: '61', lat: 39.954059, lng: -75.194827, name: 'Institute of Contemporary Art ', access:"green", rooms:"102, 310A"},
    {id: '62', lat: 39.95402, lng: -75.190875, name: 'Lauder College House', access:"orange", rooms:"113"},
    {id: '63', lat: 39.953041, lng: -75.190949, name: 'Hill House', access:"orange", rooms:"A111, A112, A113, A114, A235, A330, A340 "},
    {id: '64', lat: 39.953875, lng: -75.192352, name: 'Silverman Hall', access:"blue", rooms:"G95D, 254 "},
    {id: '65', lat: 39.953942, lng: -75.193273, name: 'Golkin Hall', access:"blue", rooms:"246A, 246B"},
    {id: '66', lat: 39.954086, lng: -75.193733, name: 'Tanenbaum Hall', access:"blue", rooms:"T158, T326"},
    {id: '67', lat: 39.953507, lng: -75.194522, name: 'Perelman Center for Political Science and Economics', access:"blue", rooms:"4A, 84B, 312 A/B, 313 A/B"},
];

// marker styles

//red square - program access
var markerStyleRed = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}); 

//blue circle - penn card access
var markerStyleBlue = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//green star - public access
var markerStyleGreen = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//orange triangle - residential access
var markerStyleOrange = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//purple - to closest restroom
var markerStylePurple = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-purple.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}); 

var redCheckbox = document.getElementById('red-checkbox');
var blueCheckbox = document.getElementById('blue-checkbox');
var greenCheckbox = document.getElementById('green-checkbox');
var orangeCheckbox = document.getElementById('orange-checkbox');

var redMarkers = L.layerGroup().addTo(map);
var blueMarkers = L.layerGroup().addTo(map);
var greenMarkers = L.layerGroup().addTo(map);
var orangeMarkers = L.layerGroup().addTo(map);

// Function to clear all markers from their respective layers
function clearMarkers() {
    redMarkers.clearLayers();
    blueMarkers.clearLayers();
    greenMarkers.clearLayers();
    orangeMarkers.clearLayers();
}


// // Function to create popup content with voting and additional information
// function createPopupContent(data) {
//     var div = document.createElement('div');
    
//     var title = document.createElement('h2');
//     title.textContent = data.name;
//     div.appendChild(title);

//     if (data.rooms) {
//         var rooms = document.createElement('p');
//         rooms.textContent = "Rooms: " + data.rooms;
//         div.appendChild(rooms);
//     }

//     var voteForm = document.createElement('form');
//     voteForm.innerHTML = `
//         <label for="vote-${data.id}">Vote:</label>
//         <select id="vote-${data.id}">
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//         </select>
//         <button type="submit">Submit Vote</button>
//     `;
//     div.appendChild(voteForm);

//         // Comment Section
//         var commentLabel = document.createElement('label');
//         commentLabel.for = 'comment-' + data.id;
//         commentLabel.textContent = 'Comment:';
//         div.appendChild(commentLabel);
    
//         var commentInput = document.createElement('input');
//         commentInput.type = 'text';
//         commentInput.id = 'comment-' + data.id;
//         div.appendChild(commentInput);
    
//         var submitCommentButton = document.createElement('button');
//         submitCommentButton.textContent = 'Submit Comment';
//         submitCommentButton.onclick = function() {
//             var comment = document.getElementById('comment-' + data.id).value;
//             if (!comment.trim()) {
//                 alert('Please enter a valid comment.');
//                 return;
//             }
//             // Here you can add your code to handle the comment, e.g., sending it to a server
//             console.log('Comment submitted for ' + data.name + ': ' + comment);
    
//             // Clear the input field after submission
//             document.getElementById('comment-' + data.id).value = '';
//         };
//         div.appendChild(submitCommentButton);
    
//     // Add a button for routing
//     var routeButton = document.createElement('button');
//     routeButton.textContent = 'Route from Current Location';
//     routeButton.onclick = function() {
//         routeToLocation(data.lat, data.lng);
//     };
//     div.appendChild(routeButton);

//     return div;
// }
function createPopupContent(data) {
    var div = document.createElement('div');
    
    var title = document.createElement('h2');
    title.textContent = data.name;
    div.appendChild(title);

    if (data.rooms) {
        var rooms = document.createElement('p');
        rooms.textContent = "Rooms: " + data.rooms;
        div.appendChild(rooms);
    }

    // Comment Input
    var commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';
    commentInput.id = 'comment-input-' + data.id; // Ensure unique ID for each comment input
    div.appendChild(commentInput);

    // Submit Comment Button
    var submitCommentButton = document.createElement('button');
    submitCommentButton.textContent = 'Submit Comment';
    submitCommentButton.onclick = function() {
        var commentText = document.getElementById('comment-input-' + data.id).value;
        if (!commentText.trim()) {
            alert('Please enter a valid comment.');
            return;
        }

        // Reference to the specific building document
        const buildingRef = db.collection('Buildings').doc(data.id);

        db.runTransaction(transaction => {
            return transaction.get(buildingRef).then(doc => {
                if (!doc.exists) {
                    throw "Document does not exist!";
                }
                // Get current comments array, add the new comment, then update the document
                var newComments = doc.data().Comments;
                newComments.push(commentText); // Add the new comment to the array
                
                transaction.update(buildingRef, { Comments: newComments });
            });
        }).then(() => {
            console.log('Comment submitted:', commentText);
            // Clear the input field after submission
            document.getElementById('comment-input-' + data.id).value = '';
            alert('Comment submitted successfully.');
        }).catch((error) => {
            console.error("Error submitting comment: ", error);
            alert('Failed to submit comment.');
        });
    };
    div.appendChild(submitCommentButton);

    // Vote Button
    var voteButton = document.createElement('button');
    voteButton.textContent = 'Upvote';
    voteButton.onclick = function() {
        const voteRef = db.collection('Buildings').doc(data.id);
        voteRef.update({
            Vote: firebase.firestore.FieldValue.increment(1)
        }).then(() => {
            console.log('Vote updated for ' + data.name);
            alert('Vote successful!');
        }).catch((error) => {
            console.error('Error updating vote: ', error);
            alert('Failed to update vote.');
        });
    };
    div.appendChild(voteButton);

    // Add a button for routing
    var routeButton = document.createElement('button');
    routeButton.textContent = 'Route from Current Location';
    routeButton.onclick = function() {
        routeToLocation(data.lat, data.lng);
    };
    div.appendChild(routeButton);

    // // Add a button for routing
    // var routeButton = document.createElement('button');
    // routeButton.textContent = 'Route from Current Location';
    // routeButton.onclick = function() {
    //     routeToLocation(data.lat, data.lng);
    // };
    // div.appendChild(routeButton);

    return div;
}




// Modify the updateMarkers function to store marker references
function updateMarkers() {
    clearMarkers(); // Clears existing markers from all layers
    markerRefs = {}; // Reset references when updating markers

    markerData.forEach(data => {
        if (!window[data.access + 'Checkbox'].checked) return;

        var marker = L.marker([data.lat, data.lng], {icon: window['markerStyle' + capitalize(data.access)]});
        var popupContent = createPopupContent(data); // Dynamically created popup content

        marker.bindPopup(popupContent);
        window[data.access + 'Markers'].addLayer(marker);

        // Store the reference to the marker with its id
        markerRefs[data.id] = marker;
    });
}

let routingControl; // Keep track of the routing control

function routeToLocation(lat, lng) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLat = position.coords.latitude;
        var userLng = position.coords.longitude;

        if (routingControl) {
            map.removeControl(routingControl);
        }

        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(userLat, userLng),
                L.latLng(lat, lng)
            ],
            routeWhileDragging: true,
            createMarker: function() { return null; }, // Optional: Avoid default markers
            
            lineOptions: {
                styles: [{color: '#6FA1EC', weight: 4}] // Customize route line style if desired
            },
            addWaypoints: false, // Disable dragging of waypoints
            // Hide the default route summary that appears on the map
            summaryTemplate: ''

        }).on('routesfound', function(e) {
            var routes = e.routes;
            var summary = routes[0].summary;
            displayRouteSummary(summary.totalDistance, summary.totalTime);

            // Assume first route is the one you want to display
            var routeInstructions = routes[0].instructions;
            displayDirections(routeInstructions);
        }).addTo(map);

        // Optionally, hide the routing container if it's still visible
        document.querySelector('.leaflet-routing-container').style.display = 'none';

    }, function() {
        alert('Failed to get your location for routing.');
    });
}




// function displayRouteSummary(distance, time) {
//     console.log("THE TIME IS "+ time);
//     console.log("THE DISTANCE IS" + distance);
//     var directionsContainer = document.getElementById('routing-directions');
//     var summaryDiv = document.createElement('div');
//     summaryDiv.innerHTML = `<strong>Total Distance:</strong> ${(distance / 1000).toFixed(2)} km<br>
//                             <strong>Estimated Time:</strong> ${Math.floor(time / 60)} min`;
//     directionsContainer.prepend(summaryDiv); // Add summary at the top of the sidebar section
// }
function displayRouteSummary(distance, time) {
    var directionsContainer = document.getElementById('routing-directions');
    console.log("distance and time are: " + distance + " " + time);
    // Ensure the container is cleared before setting new content
    directionsContainer.innerHTML = ''; 

    // Create the summary content
    // Create summary content
    var summaryContent = `<div class="route-summary">
                            <strong>Total Distance:</strong> ${(distance / 1000).toFixed(2)} km<br>
                            <strong>Estimated Time:</strong> ${Math.round(distance / 1000 / 4.5 * 60)} min
                        </div>`;

    // Set the summary as the first item in the directions container
    directionsContainer.innerHTML = summaryContent;

    // Now, when you append instructions, they will follow the summary.
}


function displayDirections(instructions) {
    var directionsContainer = document.getElementById('routing-directions');

    // Create a new container for directions to avoid overwriting existing summary
    var directionsListContainer = document.createElement('div');
    directionsListContainer.className = 'directions-list-container'; // Optional: for styling purposes

    var list = document.createElement('ol');
    instructions.forEach(function(instruction) {
        var item = document.createElement('li');
        item.innerHTML = instruction.text + ' for ' + instruction.distance + ' meters';
        list.appendChild(item);
    });

    directionsListContainer.appendChild(list);

    // Append the new container with directions to the existing container
    directionsContainer.appendChild(directionsListContainer);
}




// Helper functions
function clearMarkers() {
    redMarkers.clearLayers();
    blueMarkers.clearLayers();
    greenMarkers.clearLayers();
    orangeMarkers.clearLayers();
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize and event listeners
updateMarkers(); // Initial display of markers
['red', 'blue', 'green', 'orange'].forEach(color => {
    document.getElementById(color + '-checkbox').addEventListener('change', updateMarkers);
});

function routeToClosestMarker() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var userLatLng = L.latLng(position.coords.latitude, position.coords.longitude);

        // Initialize variables to keep track of the closest marker and its distance
        var closestMarker = null;
        var closestDistance = Infinity;
        var closestMarkerId = null; // Add a variable to store the id of the closest marker


        // Loop through all markers to find the closest one
        markerData.forEach(function (marker) {
            var markerLatLng = L.latLng(marker.lat, marker.lng);
            var distance = userLatLng.distanceTo(markerLatLng);

            // Update closest marker if this marker is closer
            if (distance < closestDistance) {
                closestMarker = marker;
                closestDistance = distance;
                closestMarkerId = marker.id; // Store the id of the closest marker

            }
        });

        // Update the closest marker's icon if found
        if (closestMarker && closestMarkerId in markerRefs) {
            var leafletMarker = markerRefs[closestMarkerId];
            leafletMarker.setIcon(markerStylePurple); // Update the icon to indicate it's the target

            // Proceed to create a route to the closest marker
            if (routingControl) {
                map.removeControl(routingControl);
            }

            routingControl = L.Routing.control({
                waypoints: [userLatLng, L.latLng(closestMarker.lat, closestMarker.lng)],
                routeWhileDragging: true,
                createMarker: function() { return null; },
                lineOptions: {styles: [{color: '#6FA1EC', weight: 4}]},
                addWaypoints: false,
                summaryTemplate: '',
                show: false, // Do not show the routing control by default
                fitSelectedRoutes: true // Optional, to fit the selected route in the map view
            }).on('routesfound', function(e) {
                var routes = e.routes;
                var summary = routes[0].summary;
                displayRouteSummary(summary.totalDistance, summary.totalTime);
                var routeInstructions = routes[0].instructions;
                displayDirections(routeInstructions);

                // Attempt to find and hide the routing container
                var routingContainers = document.querySelectorAll('.leaflet-routing-container');
                routingContainers.forEach(function(container) {
                    container.style.display = 'none';
                });
                
                
            }).addTo(map);
        } else {
            console.error('No markers found.');
        }

    }, function (error) {
        console.error('Error getting user location:', error);
    });
}

// const closestMarkerObject = findMarkerById()
// const existingMarker = findMarkerById(markerId);
// if (existingMarker) {
//     existingMarker.setIcon(newMarkerStyle).openPopup();
//     previousMarker = existingMarker;
//     return;
// }