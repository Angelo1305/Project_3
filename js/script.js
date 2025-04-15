function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 }; // Chicago (Zelda Hyrule)

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center,
    mapTypeControl: true,
    streetViewControl: false,
    mapId: "545561f1b3af4049" //  custom Zelda-themed map style
  });

  const locations = [
    {
      position: { lat: 41.8818, lng: -87.6232 },
      title: "Hyrule Castle",
      info: "The central point of power and mystery.",
      icon: "Images/gold-marker.png"
    },
    {
      position: { lat: 41.8880, lng: -87.6354 },
      title: "Lost Woods",
      info: "A mysterious forest shrouded in fog.",
      icon: "Images/gray-marker.png"
    },
    {
      position: { lat: 41.8826, lng: -87.6226 },
      title: "Kakariko Village",
      info: "A peaceful village rooted in tradition.",
      icon: "Images/gold-marker.png"
    }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.title,
      icon: {
        url: loc.icon,
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
