const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});

const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});
