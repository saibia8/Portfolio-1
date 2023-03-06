// Navigation responsive
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=> {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
}));

// To the top of the page
const toTop = document.querySelector("#toTop");

toTop.addEventListener("click", ()=> {
   window.scrollTo({ top: 0, behavior: "smooth"});
});
