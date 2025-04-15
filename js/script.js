// === GOOGLE MAP FUNCTIONALITY ===
function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center,
    mapTypeControl: true,
    streetViewControl: false,
    mapId: "545561f1b3af4049"
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

  // Add each marker
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
      content: `<div style="color:#222;"><strong>${loc.title}</strong><br>${loc.info}</div>`
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

// === SLIDER FUNCTIONALITY ===
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach(slide => (slide.style.display = "none"));
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
