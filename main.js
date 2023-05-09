        let alive = document.querySelector(".alive");
        let bsmQalm = document.querySelector(".bsm-qalm");
        let spinner = document.querySelector(".loading");

           window.addEventListener("load", () => {
                alive.play();
                bsmQalm.play();
                document.body.style.overflow = "hidden";
                setInterval(() => {
                    spinner.style.display = "none";
                    document.body.style.overflow = "auto";
                }, 4000);

            })

const count = document.querySelector(".count");

let countdowndate = new Date("Jul 24, 2023 12:30:00").getTime();
let counter = setInterval(()  => {

    let dateNow = new Date().getTime();

    let dateDiff = countdowndate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

    document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minute").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".second").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
         count.style.display = "none";


    }

}, 1000)


let tabs = document.querySelectorAll("header .raw span");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".tabs > .tab");
let divsArray = Array.from(divs);



tabsArray.forEach((ele) => {
ele.addEventListener("click", function (e) {

    tabsArray.forEach((ele) => {
    ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
    div.classList.remove("active");
    });

    document.querySelector(e.currentTarget.dataset.cont).classList.add("active");
});
});


// sliders button

let toAbout = document.querySelector(".nex-one"), toGallery = document.querySelector(".nex-two"),
    toContact = document.querySelector(".nex-three");
let backToLanding = document.querySelector(".prev-two"),  backToAbout = document.querySelector(".prev-three"),
    backToGallery = document.querySelector(".prev-four");

let landing = document.querySelector(".landing"),  aboutUs = document.querySelector(".aboutus"),  
    gallery = document.querySelector(".gallery"), contact = document.querySelector(".contact");

 // landing page

    backToLanding.onclick = function () {
        aboutUs.classList.remove("active");
        landing.classList.add("active");
         document.querySelector(".aboutt").classList.remove("active");
        document.querySelector(".home").classList.add("active");
    }

 // about page

    toAbout.onclick = function () {
        landing.classList.remove("active");
        aboutUs.classList.add("active");
        document.querySelector(".home").classList.remove("active");
        document.querySelector(".aboutt").classList.add("active");
    }
    backToAbout.onclick = function () {
        gallery.classList.remove("active");
        aboutUs.classList.add("active");
        document.querySelector(".galleryy").classList.remove("active");
        document.querySelector(".aboutt").classList.add("active");
    }
 // gallery page

    toGallery.onclick = function () {
        aboutUs.classList.remove("active");
        gallery.classList.add("active");
        document.querySelector(".aboutt").classList.remove("active");
        document.querySelector(".galleryy").classList.add("active");
    }
    backToGallery.onclick = function () {
        contact.classList.remove("active");
        gallery.classList.add("active");
        document.querySelector(".contactt").classList.remove("active");
        document.querySelector(".galleryy").classList.add("active");
    }
 // contact page

    toContact.onclick = function () {
        gallery.classList.remove("active");
        contact.classList.add("active");
        document.querySelector(".galleryy").classList.remove("active");
        document.querySelector(".contactt").classList.add("active");
    }
   
