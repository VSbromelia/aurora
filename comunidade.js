// ===== MENU MOBILE =====
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");


menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// ===== CARROSSEL =====
const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach(container => {
  const track = container.querySelector(".carousel-track");
  const prevBtn = container.querySelector(".carousel-btn.prev");
  const nextBtn = container.querySelector(".carousel-btn.next");

  let index = 0;
  const cards = Array.from(track.children);
  const total = cards.length;

  function updateCarousel() {
    const width = cards[0].offsetWidth + 10; // + gap
    track.style.transform = 'translateX(-${index * width}px)';
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel(); // inicializa posição
});

// ===== LIKES =====
const posts = document.querySelectorAll(".post");

posts.forEach(post => {
  const heart = post.querySelector(".fa-heart");
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
  });
});
