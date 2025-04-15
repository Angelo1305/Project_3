// Google Map Setup
function initMap() {
  const hyrule = { lat: 41.8781, lng: -87.6298 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: hyrule,
    mapTypeControl: true,
    streetViewControl: false,
  });

  const marker = new google.maps.Marker({
    position: hyrule,
    map: map,
    title: "Kingdom of Hyrule",
    icon: {
      url: "Images/apple-touch-icon-57x57.png",
      scaledSize: new google.maps.Size(40, 40)
    }
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h2>Kingdom of Hyrule</h2><p>This is the center of all Zelda adventures!</p>"
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

// Slider Logic
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach(slide => slide.style.display = "none");
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
