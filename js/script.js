const OurTeam = new Swiper("#header", {
  slidesPerView: "1",
  effect: "flip",

  spaceBetween: 0,
  lazy: true,
 
});

const playButton = document.querySelector(".play-button");

const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");

const play = document.querySelector(".btnPlay");
const pause = document.querySelector(".btnPause");

playButton.addEventListener("click", () => {
  const swiperSlide = document.querySelector(
    ".MyWorkSwiper .swiper-slide-active"
  );
  if (audio.paused) {
    audio.play();
    play.style.display = "none";
    pause.style.display = "block";
    swiperSlide.classList.add("rotate");
  } else {
    audio.pause();
    pause.style.display = "none";
    play.style.display = "block";
    swiperSlide.classList.remove("rotate");
  }
});

audio.addEventListener("timeupdate", () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percentage + "%";
});

progressBar.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const width = progressBar.clientWidth;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener("ended", function () {
  const swiperSlide = document.querySelector(
    ".MyWorkSwiper .swiper-slide-active"
  );
  swiperSlide.classList.remove("rotate");
  playButton.style.display = "block";
  pauseButton.style.display = "none";
});

var swiper = new Swiper(".MyWorkSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  lazy: true,

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

var swiper = new Swiper(".MusicVediosSwiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  grabCursor: true,
});

var swiper = new Swiper(".projectsSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".SERVICESSwiper", {

    grid: {
      rows: 2,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    breakpoints: {
      // when window width is <= 499px
      499: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is <= 999px
      999: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  $(".darkModeButton").on("click", () => {
    $(".light").toggleClass("show");
    $(".dark").toggleClass("hide");
    $("body").toggleClass("darkMode");
  });
});
