// var map = L.map('map').setView([51.505, -0.09], 13);
//
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
//
// var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
//     denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.');
//
//
// var cities = L.layerGroup([littleton, denver]);

var normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
});
var imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
    maxZoom: 18,
    minZoom: 5
});
var imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
    maxZoom: 18,
    minZoom: 5
});

var normal = L.layerGroup([normalm]),
    image = L.layerGroup([imgm, imga]);

var baseLayers = {
    "地图": normal,
    "影像": image,
}

var map = L.map("map", {
    center: [34.42, 113.67],
    // center: [39.24, 117.06],
    zoom: 1,
    layers: [normal],
    zoomControl: false
});

// var map1 = L.map("map", {
//     center: [28.31, 112.88],
//     zoom: 12,
//     layers: [normal],
//     zoomControl: false
// });

var marker = L.marker([28.31, 112.88]).addTo(map);
var marker1 = L.marker([39.18, 117.17]).addTo(map);

L.control.layers(baseLayers, null).addTo(map);
L.control.zoom({
    zoomInTitle: '放大',
    zoomOutTitle: '缩小'
}).addTo(map);