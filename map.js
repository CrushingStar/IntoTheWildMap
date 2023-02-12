mapboxgl.accessToken = 'pk.eyJ1IjoiZ3BlciIsImEiOiJjbGUxamo3Y2cwbGxuNDFwYWJqc2RzZ3NvIn0.V8TbsSo4OnP29IafCOpF0A';

var geojson = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-114.62122816809983, 35.876317610355]
    },
    "properties": {
      "title": "Where It Starts.",
      "description": "Chris's hitchhiking journey into the wild starts here, at Lake Mead, a place in the Detrital Valley. After his Datsun was damaged by a flood, he \"resumed his odyssey on foot.\""
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.414, 37.776]
    },
    "properties": {
      "title": "Mapbox",
      "description": "San Francisco, California"
    }
  }
  ]
};

const startingPoint = new mapboxgl.LngLat(-99.93911857048194, 39.83455236598961);
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: startingPoint, // starting position [lng, lat]
  zoom: 3.5,
});

// add markers to map
geojson.features.forEach(function (marker, i) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';
  el.innerHTML = '<i class="fa fa-map-marker" style="font-size:33px;color:#00008b;text-shadow:1px 1px 2px #000000;"></i> <div style="color: white; transform: translate(6px, -20px);"><b>' + (i + 1) + '</b></div>'

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker({
    element: el,
  })
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
      .setHTML('<div class="popup"><h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p></div>'))
    .addTo(map);
});

// var popup1 = new mapboxgl.Popup()
//   .setText('Description')

// let marker1 = new mapboxgl
//   .Marker({
//     color: "#000000",
//     scale: 0.5
//   })
//   .setLngLat(new mapboxgl.LngLat(-114.62122816809983, 35.876317610355))
//   .addTo(map)
//   .setPopup(popup1);

