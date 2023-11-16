"use strict";

//Footer map:

//Create map:
const centroid = [50.709925, 4.352603];
const map = L.map('mapid').setView(centroid, 16.4);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.709925, 4.352603]).addTo(map);

