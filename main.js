const desktopImages = ["images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg"
];

const mobileImages = ["images/mobile-image-hero-1.jpg",
    "images/mobile-image-hero-2.jpg",
    "images/mobile-image-hero-3.jpg"
];

const descriptions = document.querySelectorAll(".c-company-description");
const selectedDescription = ["first", "second", "third"];

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

const mobileSlider = document.querySelector(".c-slider-mobile");

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
        let selectedDescr = selectedDescription[this.currIndex - 1];
        descriptions.forEach((el) => {
            el.classList.add("fade-out");
        });
        descriptions.forEach((el) => {
            if (el.classList.contains(selectedDescr)) {
                el.classList.remove("fade-out");
            }
        });
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
        let selectedDescr = selectedDescription[this.currIndex - 1];
        descriptions.forEach((el) => {
            el.classList.add("fade-out")
        });
        descriptions.forEach((el) => {
            if (el.classList.contains(selectedDescr)) {
                el.classList.remove("fade-out");
            }
        });
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



const desktopSlider = document.querySelector(".c-slider-desktop");

const desktopControls = {
    currIndex: 1,
    slider: desktopSlider,

    showNext() {
        if (this.currIndex == 3) {
            this.currIndex = 1;
        }
        else {
            this.currIndex++;
        }
        let url = desktopImages[this.currIndex - 1];
        let selectedDescr = selectedDescription[this.currIndex - 1];
        descriptions.forEach((el) => {
            el.classList.add("fade-out");
        });
        descriptions.forEach((el) => {
            if (el.classList.contains(selectedDescr)) {
                el.classList.remove("fade-out");
            }
        });
        this.slider.style.backgroundImage = `url("${url}")`;
    },

    showPrev() {
        if (this.currIndex == 1) {
            this.currIndex = 3;
        }
        else {
            this.currIndex--;
        }
        let url = desktopImages[this.currIndex - 1];
        let selectedDescr = selectedDescription[this.currIndex - 1];
        descriptions.forEach((el) => {
            el.classList.add("fade-out")
        });
        descriptions.forEach((el) => {
            if (el.classList.contains(selectedDescr)) {
                el.classList.remove("fade-out");
            }
        });
        this.slider.style.backgroundImage = `url("${url}")`;
    }


}

const desktopArrows = document.querySelector(".arrows-desktop");

desktopArrows.addEventListener("click", (e) => {
    let selected = e.target.closest(".prev") || e.target.closest(".next");
    if (! selected) {
        return;
    }
    if (selected.classList.contains("next")) {
        desktopControls.showNext();
    }
    else {
        desktopControls.showPrev();
    }
})