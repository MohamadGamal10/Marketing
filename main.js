let navbtn = document.querySelectorAll(".nav-button");
let nav = document.querySelector(".nav-bar");


for(let i = 0 ; i < navbtn.length ; i++){
   navbtn[i].addEventListener("click" , () => {
      nav.classList.toggle("active")
   })
}

let scl = document.querySelector(".scroll-down")

scl.addEventListener("click" , () => {
   let idSection = document.getElementById("about");
   // let idSection = document.getElementById(scl.getAttribute("data-about"));
   idSection.scrollIntoView({
      behavior: "smooth"
   })
});


const header = document.querySelector(".header");

window.addEventListener("scroll", function(){
   header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active")
})




