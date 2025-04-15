function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 }; // Fake Hyrule (Chicago)
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center,
    mapTypeControl: true,
    streetViewControl: false,
    mapId: "DEMO_MAP_ID" // Replace with your own if styling map
  });

  // Define locations
  const locations = [
    {
      position: { lat: 41.8818, lng: -87.6232 },
      title: "Hyrule Castle",
      info: "The central point of power and mystery."
    },
    {
      position: { lat: 41.8880, lng: -87.6354 },
      title: "Lost Woods",
      info: "A mysterious forest of puzzles and magic."
    },
    {
      position: { lat: 41.8826, lng: -87.6226 },
      title: "Kakariko Village",
      info: "A quiet village known for its rich history."
    }
  ];

  // Add markers
  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.title,
      icon: {
        url: "Images/apple-touch-icon-57x57.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h2>${loc.title}</h2><p>${loc.info}</p>`
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
