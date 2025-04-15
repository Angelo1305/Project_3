let map;

function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center,
    mapTypeControl: true,
    streetViewControl: false,
    mapId: "545561f1b3af4049"
  });

  const locations = [
    {
      id: "castle",
      position: { lat: 41.8818, lng: -87.6232 },
      title: "Hyrule Castle",
      info: "The central point of power and mystery.",
      icon: "Images/gold-marker.png",
      image: "Images/hyrule-icon.png"
    },
    {
      id: "woods",
      position: { lat: 41.8880, lng: -87.6354 },
      title: "Lost Woods",
      info: "A mysterious forest shrouded in fog.",
      icon: "Images/gray-marker.png",
      image: "Images/lostwoods-icon.png"
    },
    {
      id: "village",
      position: { lat: 41.8826, lng: -87.6226 },
      title: "Kakariko Village",
      info: "A peaceful village rooted in tradition.",
      icon: "Images/gold-marker.png",
      image: "Images/kakariko-icon.png"
    }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.title,
      icon: {
        url: loc.icon,
        scaledSize: new google.maps.Size(60, 60)
      },
      animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="
          text-align: center;
          background-color: #1e1e1e;
          color: #f9f9f9;
          padding: 10px;
          border-radius: 8px;
          font-family: 'MedievalSharp', Arial, sans-serif;
        ">
          <h2 style="margin: 0.3rem 0;">${loc.title}</h2>
          <img src="${loc.image}" alt="${loc.title}" style="width: 80px; height: 80px; object-fit: contain; margin: 0.5rem auto; border: none;" />
          <p>${loc.info}</p>
        </div>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

// === SLIDER WITH DOTS + FADE + AUTOPLAY ===
let currentSlide = 0;
let autoSlideInterval = null;
let isHovering = false;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dots span");

  if (slides.length === 0) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (dots[i]) dots[i].classList.remove("active");
  });

  slides[currentSlide].classList.add("active");
  if (dots[currentSlide]) dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoSlide() {
  if (!autoSlideInterval) {
    autoSlideInterval = setInterval(() => {
      if (!isHovering) nextSlide();
    }, 4000);
  }
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
}

function buildDots() {
  const dotsContainer = document.getElementById("sliderDots");
  const slides = document.querySelectorAll(".slide");
  dotsContainer.innerHTML = "";

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildDots();
  showSlide(currentSlide);
  startAutoSlide();

  const slider = document.getElementById("slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => { isHovering = true; });
    slider.addEventListener("mouseleave", () => { isHovering = false; });
  }

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});
