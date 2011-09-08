$('#map').live("pageshow", function() {
    //$('#map_canvas').gmap('refresh');
});

function handleGeolocationError(error) {
    var GEOLOCATION_ERROR = 'Geolocation Error: ';
    switch(error.code) {
        case error.TIMEOUT:
            alert(GEOLOCATION_ERROR + 'Timeout');
            break;
        case error.POSITION_UNAVAILABLE:
            alert (GEOLOCATION_ERROR + 'Position unavailable');
            break;
        case error.PERMISSION_DENIED:
            alert (GEOLOCATION_ERROR + 'Permission denied');
            break;
        case error.UNKNOWN_ERROR:
            alert (GEOLOCATION_ERROR + 'Unknown error');
            break;
    }
};


$('#map').live("pagecreate", navigator.geolocation.getCurrentPosition(function(position) {
               $('#map_canvas').gmap({'center': position.coords.latitude + ', ' + position.coords.longitude, 'mapTypeId': 'roadmap'}).bind('init', function(evt, map) {
                                                                                                              $('#map_canvas').gmap('watchPosition', function(position, status) {
                                                                                                                                    if (status === 'OK') {
                                                                                                                                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                                                                                                                                    var markers = $('#map_canvas').gmap('get', 'markers' );
                                                                                                                                    if ( !markers['client'] ) {
                                                                                                                                    $('#map_canvas').gmap('addMarker', { 'id': 'client', 'position': latlng, 'bounds': true });
                                                                                                                                    } else {
                                                                                                                                    markers['client'].setPosition(latlng);
                                                                                                                                    map.panTo(latlng);
                                                                                                                                    }
                                                                                                                                    }
                                                                                                                                    });
                                                                                                              });
                                                                      }, handleGeolocationError, {enableHighAccuracy:true}));
