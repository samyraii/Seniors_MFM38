        
        let spinner = document.querySelector(".loading");
        let alive = document.querySelector(".alive");
        let bsmQalm = document.querySelector(".bsm-qalm");
           window.addEventListener("load", () => {               
                alive.play();
             //   bsmQalm.load();
             
                document.body.style.overflow = "hidden";
                setInterval(() => {
                    spinner.style.display = "none";
                    document.body.style.overflow = "auto";
                }, 4000);
             //   bsmQalm.play();
            });
  

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

    //////////////////////////////////////////

    //Go to events 
    let vedButtom = document.querySelector(".vids"), vedIo = document.querySelector(".ved-one");
    let goEvent = document.querySelector(".enter-buttom"), outEvent = document.querySelector(".out-buttom");
    let land = document.querySelector(".tabs"), eVent = document.querySelector(".event");
    let tabsTwo = document.querySelectorAll(".event .tayp span");
    let tabsArrayTwo = Array.from(tabsTwo);
    let divsTwo = document.querySelectorAll(".tabss > .faqra-container ");
    let divsArrayTwo = Array.from(divsTwo);

    goEvent.onclick = function (ele) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        goEvent.classList.add("active");
        eVent.classList.add("active");
        land.classList.add("active");
        outEvent.classList.remove("active");
    }
    outEvent.onclick = function () {
        outEvent.classList.add("active");
        eVent.classList.remove("active");
        land.classList.remove("active");
        goEvent.classList.remove("active");
    }
    tabsArrayTwo.forEach((ele) => {
        ele.addEventListener("click", function (e) {
            if (ele == vedButtom) {
                vedIo.play();
            } else {
                vedIo.pause();
            }
            tabsArray.forEach((ele) => {
                ele.classList.remove("active");
                });
            tabsArrayTwo.forEach((ele) => {
               ele.classList.remove("active");
            });
            e.currentTarget.classList.add("active");
            divsArrayTwo.forEach((div) => {
            div.classList.remove("active");
            });
        
            document.querySelector(e.currentTarget.dataset.cont).classList.add("active");
        });
        });
    
        // vedButtom.onclick = function () {
        //     vedIo.play();
        
        // }
// el quiz 
let toQone = document.querySelector(".to-q-one"), slideQone = document.querySelector(".question.one"), 
    toQtwo = document.querySelector(".to-q-two"), slideQtwo = document.querySelector(".question.two"), 
    toQthree = document.querySelector(".to-q-three"), slideQthree = document.querySelector(".question.three"), 
    toQfour = document.querySelector(".to-q-four"), slideQfour = document.querySelector(".question.four"), 
    toQFive = document.querySelector(".to-q-five"), slideQfive = document.querySelector(".question.five"), 
    toQsix = document.querySelector(".to-q-six"), slideQsix = document.querySelector(".question.six"),
    toQseven = document.querySelector(".to-q-seven"), slideQseven = document.querySelector(".question.seven"),
    toQeight = document.querySelector(".to-q-eight"), slideQeight = document.querySelector(".question.eight"),
    toQnine = document.querySelector(".to-q-nine"), slideQnine = document.querySelector(".question.nine"),
    slideIntroQuiz = document.querySelector(".intro.quiz"),  elyB3do = document.querySelectorAll(".elyb3do"),
    elyb3doAudio = document.querySelector(".elyb3do-audio");

toQone.onclick = function() {
    slideIntroQuiz.classList.remove("active");
    slideQone.classList.add("active");
}
toQtwo.onclick = function() {
    slideQone.classList.remove("active");
    slideQtwo.classList.add("active");
    elyb3doAudio.play();

}
toQthree.onclick = function() {
    slideQtwo.classList.remove("active");
    slideQthree.classList.add("active");
    elyb3doAudio.play();

}
toQfour.onclick = function() {
    slideQthree.classList.remove("active");
    slideQfour.classList.add("active");
    elyb3doAudio.play();

}
toQFive.onclick = function() {
    slideQfour.classList.remove("active");
    slideQfive.classList.add("active");
    elyb3doAudio.play();

}
toQsix.onclick = function() {
    slideQfive.classList.remove("active");
    slideQsix.classList.add("active");
    elyb3doAudio.play();

}
toQseven.onclick = function() {
    slideQsix.classList.remove("active");
    slideQseven.classList.add("active");
    elyb3doAudio.play();

}
toQeight.onclick = function() {
    slideQseven.classList.remove("active");
    slideQeight.classList.add("active");
    elyb3doAudio.play();

}
toQnine.onclick = function() {
    slideQeight.classList.remove("active");
    slideQnine.classList.add("active");
    elyb3doAudio.play();

}

// true and false answer

let   falseAnswer = document.querySelectorAll(".false"), falseAudio = document.querySelector(".false-audio"),
     trueAnswer = document.querySelectorAll(".true"), trueAudio = document.querySelector(".true-audio");

falseAnswer.forEach(function(ele) {
   
   ele.onclick = function() {

    ele.classList.add("active");
    falseAudio.play();
   
 }
})

trueAnswer.forEach(function(ele) {
   
    ele.onclick = function() {

     ele.classList.add("active");
     trueAudio.play();
    
  }
})


// faqret amlt eh flip cart 

cart = document.querySelectorAll(".cart");
reset = document.querySelectorAll(".reset");
back = document.querySelectorAll(".cart .back");
front = document.querySelectorAll(".cart .front");

front.forEach((front) => {

    //Add Click Event
    front.addEventListener('click', function () {
      
            flipBlock (front) 

                                 
    });

  

});

back.forEach((back) => {

    //Add Click Event
    back.addEventListener('click', function () {
    
          resetCard (back) 
          
                               
      });
  });



//Flip block Function
function flipBlock(ele) {

            ele.parentElement.classList.add('active'); 
            // Swal.fire('بقولك ايه لو عايز تشيل الصح دوس عليها تاني')

        
      
}
function resetCard(eleZ) {

        eleZ.parentElement.classList.remove("active"); 
      
}
   
