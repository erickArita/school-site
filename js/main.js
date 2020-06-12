AOS.init();
// esto le da informacion a google maps 
function iniciarMap() {
    let coord = { lat: 14.8698517, lng: -89.0907986 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: coord
    });
    let marker = new google.maps.Marker({
        position:coord,
        map:map
    })
}