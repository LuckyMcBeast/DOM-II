// Selectors
const navLink = document.querySelectorAll('.nav-link');
const funBus = document.querySelector('.logo-heading');
const imgs = Array.from(document.getElementsByTagName('img'));
const mainNav = document.querySelector(".main-navigation");
const p = Array.from(document.getElementsByTagName('p'));
const btn = document.querySelectorAll(".btn");
const nav = document.querySelector("nav")



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

//Bus Fun change on resize
window.addEventListener("resize", (e) => { //3
    console.log(e)
    funBus.textContent = "Bus Fun";
})

//Imgs scale changes on clicks
imgs.forEach(pic => { //4
    pic.addEventListener("click", () => {
        console.log(pic)
        pic.style.transform = "scale(1.3)";
        pic.style.transition = 'transform 1s'
        mainNav.style.zIndex = '2'
    });
})

imgs.forEach(pic => { //5
    pic.addEventListener("dblclick", () => {
        console.log(pic)
        pic.style.transform = "scale(1)";
        pic.style.transition = 'transform 2s'
    });
})

//Document font color change on scroll
document.addEventListener("scroll", () =>{ //6
    document.body.style.color= "grey";
})

//p plagrism alert on copy
p.forEach(para => { //7
    para.addEventListener("copy", () => {
        para.textContent = "DON'T STEAL MY WORK!";
    })
})

//Keydown background color change
window.addEventListener("keydown", (e) => { //8
    console.log(e.key)
    if(e.key == "b"){
        document.body.style.background = "black";
    }
    else{
        document.body.style.background = "grey";
    }

})

//Keyup background revert
window.addEventListener("keyup", () => { //9
    document.body.style.background = "white";
})

//Mouse width adjustments on btn
btn.forEach(button =>{ //10
    button.addEventListener("mousedown", () => {
        button.style.width = "100%";
    })
})

btn.forEach(button =>{ //11
    button.addEventListener("mouseup", (e) => {
        button.style.width = "50%";
        e.stopPropagation(); //propagration
    })
})

//prevent default
document.querySelector('a').addEventListener("click", function(e) {
    e.preventDefault();
});