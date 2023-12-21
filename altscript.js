const slider = document.createElement("div");
slider.className = "slider";
document.body.appendChild(slider);

let imgList = [
  "https://source.unsplash.com/random?landscape,mountain",
  "https://source.unsplash.com/random?landscape,cars",
  "https://source.unsplash.com/random?landscape,night",
  "https://source.unsplash.com/random?landscape,city",
];

imgList.forEach(function (e) {
  const slide = document.createElement("div");
  slide.className = "slide";
  const img = document.createElement("img");
  img.src = e;
  slider.appendChild(slide);
  slide.appendChild(img);
});

const buttonClass = ["btn btn-next", "btn btn-prev"];

buttonClass.forEach(function (e, i) {
  const buttonText = [">", "<"];
  const button = document.createElement("button");
  button.className = e;
  button.textContent = buttonText[i];
  slider.appendChild(button);
});

const slides = document.querySelectorAll(".slide")

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  // select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});