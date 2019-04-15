var locationButton = document.getElementsByClassName('location-button');
var locationMap = document.getElementsByClassName('location-map');
var locationInfo = document.getElementsByClassName('location-info');
console.log(locationButton);
console.log(locationMap);
console.log(locationInfo);
var currentLocation = 0;

for(var i = 0; i < locationButton.length; i++) {
    locationButton[i].addEventListener('click', showLocation)
    
}

function showLocation() {
    currentLocation = this.value;
    console.log(currentLocation);
    for(var i = 0; i < locationMap.length && i < locationInfo.length; i++) {
        locationMap[i].className = 'location-map';
        locationInfo[i].className = 'location-info';
    }
    locationMap[currentLocation-1].className = 'location-map location-map-active';
    locationInfo[currentLocation-1].className = 'location-info location-info-active';
}