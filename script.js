// script.js
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
  
  
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      footer.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      footer.classList.remove('scrolled');
    }
  });
