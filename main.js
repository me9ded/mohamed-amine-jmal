function rotation() {
    let tween = gsap.to(".projects", { duration: 2, rotation: 360 });
    

};

function move() {
    gsap.to(".about-me",{})
}

document.addEventListener("DOMContentLoaded", function () {
    move();
    rotation();
});
