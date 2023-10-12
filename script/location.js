var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.485823, 126.7810103),
        level: 7
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

function setMapType(maptype) {
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview');
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}

function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}
var points = [
    new kakao.maps.LatLng(37.485823, 126.7810103),
    new kakao.maps.LatLng(37.4844487, 126.8111031),
    new kakao.maps.LatLng(37.5043498, 126.7610728),
    new kakao.maps.LatLng(37.46742, 126.8236446),
    new kakao.maps.LatLng(37.5039274, 126.7567429),
    new kakao.maps.LatLng(37.5013426, 126.8822987),
    new kakao.maps.LatLng(37.4469609, 126.7916617),
    new kakao.maps.LatLng(37.5218244, 126.7036252),
    new kakao.maps.LatLng(37.4516923, 126.7019408),
    new kakao.maps.LatLng(37.5336822, 126.7345658),
    new kakao.maps.LatLng(37.5171639, 126.9031758),
    new kakao.maps.LatLng(37.4655003, 126.6804371),
    new kakao.maps.LatLng(37.5577525, 126.8560736),
];

var bounds = new kakao.maps.LatLngBounds();

var i, marker;
for (i = 0; i < points.length; i++) {
    marker = new kakao.maps.Marker({ position: points[i] });
    marker.setMap(map);

    // LatLngBounds 객체에 좌표를 추가합니다
    bounds.extend(points[i]);
}

var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

