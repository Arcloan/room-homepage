const desktopImages = ["image/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg"
];

const mobileImages = ["images/mobile-image-hero-1.jpg",
    "images/mobile-image-hero-2.jpg",
    "images/mobile-image-hero-3.jpg"
];

const mobileSlider = document.querySelector(".c-slider-mobile");
const hamburger = document.querySelector(".menu > img:first-child");

hamburger.addEventListener("click", (e) => {
    const nav = document.querySelector(".primary-navigation-mobile");
    nav.classList.remove("hidden");
})

const closeIcon = document.querySelector(".primary-navigation-mobile img");

closeIcon.addEventListener("click", (e) => {
    const nav = document.querySelector(".primary-navigation-mobile");
    nav.classList.add("hidden");
})

const mobileControls = {
    currIndex: 1,
    slider: mobileSlider,

    showNext() {
        if (this.currIndex == 3) {
            this.currIndex = 1;
        }
        else {
            this.currIndex++;
        }
        let url = mobileImages[this.currIndex - 1];
        this.slider.style.backgroundImage = `url("${url}")`;
    },

    showPrev() {
        if (this.currIndex == 1) {
            this.currIndex = 3;
        }
        else {
            this.currIndex--;
        }
        let url = mobileImages[this.currIndex - 1];
        this.slider.style.backgroundImage = `url("${url}")`;
    }


}

const mobileArrows = document.querySelector(".arrows");

mobileArrows.addEventListener("click", (e) => {
    let selected = e.target.closest(".prev") || e.target.closest(".next");
    if (! selected) {
        return;
    }
    if (selected.classList.contains("next")) {
        mobileControls.showNext();
    }
    else {
        mobileControls.showPrev();
    }
})