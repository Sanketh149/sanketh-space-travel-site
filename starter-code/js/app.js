const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const menuLines = document.querySelectorAll(".hamburger .line");



hamburgerMenu.addEventListener("click",()=>{
    nav.classList.toggle("active-menu");
    menuLines.forEach(menu=>{
      menu.classList.toggle("active-close")
    })
})