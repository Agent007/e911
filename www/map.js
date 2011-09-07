$('#map').live("pageshow", function() {
               //$('#map_canvas').gmap('refresh');
               });

$('#map').live("pagecreate", function() {
               $('#map_canvas').gmap({'center': '59.3426606750, 18.0736160278', 'mapTypeId': 'terrain'}).bind('init', function(evt, map) {
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
               });

