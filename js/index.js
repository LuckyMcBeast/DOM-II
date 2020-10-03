// Selectors
const navLink = document.querySelectorAll('.nav-link');
const funBus = document.querySelector('.logo-heading');
const imgs = Array.from(document.getElementsByTagName('img'));
console.log(imgs)

//navLink Events (2 out of 10)
navLink[0].addEventListener("mouseover", () => { //1
    navLink[0].style.color = "green";
    navLink[0].style.fontWeight = "bold";
});

navLink[0].addEventListener("mouseleave", () => { //2
    navLink[0].style.color = "black";
    navLink[0].style.fontWeight = "unset";
});

navLink[1].addEventListener("mouseover", () => { //1
    navLink[1].style.color = "red";
    navLink[1].style.fontWeight = "bold";

});
navLink[1].addEventListener("mouseleave", () => { //2
    navLink[1].style.color = "black";
    navLink[1].style.fontWeight = "unset";
});

navLink[2].addEventListener("mouseover", () => { //1
    navLink[2].style.color = "gold";
    navLink[2].style.fontWeight = "bold";
});
navLink[2].addEventListener("mouseleave", () => { //2
    navLink[2].style.color = "black";
    navLink[2].style.fontWeight = "unset";
});

navLink[3].addEventListener("mouseover", () => { //1
    navLink[3].style.color = "navy";
    navLink[3].style.fontWeight = "bold";
});
navLink[3].addEventListener("mouseleave", () => { //2
    navLink[3].style.color = "black";
    navLink[3].style.fontWeight = "unset";
});

//funBus.addEventListener()

imgs.forEach(pic => { //4
    pic.addEventListener("click", () => {
        console.log(pic)
        pic.style.transform = "scale(1.3)";
        pic.style.transition = 'transform 2s'
    });
})

imgs.forEach(pic => { //5
    pic.addEventListener("dblclick", () => {
        console.log(pic)
        pic.style.transform = "scale(1)";
        pic.style.transition = 'transform 2s'
    });
})