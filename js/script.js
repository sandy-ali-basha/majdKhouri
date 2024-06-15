const OurTeam = new Swiper("#header", {
  slidesPerView: "1",
  effect: "flip",

  spaceBetween: 0,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
  // centeredSlides: true, // Uncomment this line
  slidesPerView: "auto",
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".projectsSwiper", {
  centeredSlides: true,
  effect: "coverflow",

  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 3,
    spaceBetween: 10,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 4,
  spaceBetween: 30,

    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".SERVICESSwiper", {

    grid: {
      rows: 2,
    },
 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

$(document).ready(function () {
	// Preloader
	var preloaderFadeOutTime = 500;
	function hidePreloader() {
		var preloader = $(".spinner-wrapper");
		preloader.fadeOut(preloaderFadeOutTime);
	}
	hidePreloader();
});

var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$("button, a, .swiper-button-next, .swiper-button-prev").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("button, a, .swiper-button-next, .swiper-button-prev").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
