// Your code goes here
const navLink = document.querySelectorAll('.nav-link');
const funBus = document.querySelector('.logo-heading');

navLink[0].addEventListener("mouseover", () => {
    navLink[0].style.color = "green";
});

navLink[1].addEventListener("mouseover", () => {
    navLink[1].style.color = "red";
});

navLink[2].addEventListener("mouseover", () => {
    navLink[2].style.color = "gold";
});

navLink[3].addEventListener("mouseover", () => {
    navLink[3].style.color = "navy";
});

//window.addEventListener('scroll', ())