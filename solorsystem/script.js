
const menuBtn = document.querySelector(".menu-btn");    //select btn and navigation selector on css
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {             //evenet listner listin wnen btn is "clicked"
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");        
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");           //selecting selctor from css
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {                                                  //function for remove active img
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");                                    //function for adding active img
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {                     //calls function for each image to be slide
            sliderNav(i)
        });
    });