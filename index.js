// let icon = document.getElementById("icon");

// icon.onclick = function() {
//     document.body.classList.toggle("dark-theme");
//     if(document.body.classList.contains("dark-theme")){
//         icon.classList.add("fa-solid fa-sun");
//     }else {
//         icon.classList.add("fa-solid fa-moon");
//     }
// }

const body = document.querySelector("body")
const toggle = document.querySelector("#toggle");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");

toggle.addEventListener("change", () => {
    body.classList.toggle("dark-theme");
    moonIcon.className = moonIcon.className == "fa-solid fa-moon" ? "fa-solid fa-moon" : "fa-solid fa-moon";
    sunIcon.className = moonIcon.className == "fa-solid fa-sun" ? "fa-solid fa-sun" : "fa-solid fa-sun";
})
