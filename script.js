// Navigation
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

// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e)=> {
   cursor.style.left = e.pageX + "px";
   cursor.style.top = e.pageY + "px";
});

// To the top of the page
const toTop = document.querySelector("#toTop");
toTop.addEventListener("click", ()=> {
  
   window.scrollTo({ top: 0, behavior: "smooth"});
});
