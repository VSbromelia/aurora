const menuIcon = document.getElementById("menuIcon");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

// Abre a sidebar
menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
});

// Fecha a sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});


