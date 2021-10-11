/* Slider */

new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*centeredSlides: true,*/
  spaceBetween: 30,
  slidesPerView: 4,
  watchOverflow: true,
  initialSlide: 0,
  /*loop: true,*/
  /*autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	}*/
  breakpoints: {
    320: {
      slidesPerView: 0.787,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 0.8,
    },
    380: {
      slidesPerView: 0.95,
    },
    420: {
      slidesPerView: 1,
    },
    460: {
      slidesPerView: 1.1,
    },
    515: {
      slidesPerView: 1.3,
    },
    600: {
      slidesPerView: 1.5,
    },
    700: {
      slidesPerView: 1.75,
    },
    800: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

/* FORM */

const form = document.getElementsByTagName("form");
const btn = document.getElementById("btn");
let input1 = document.getElementById("inputid1");
let input2 = document.getElementById("inputid2");
let input3 = document.getElementById("inputid3");
let checkBox = document.querySelector("input[type=checkbox]");
let checkBoxLabel = document.querySelector(".send-right__form__label-checkbox")

btn.onclick = (e) => {
  //valid input 1
  if (input1.value === "") {
    input1.style.borderBottom = "2px solid #DF2030";
    document.getElementById("error1").innerHTML =
      "<p>Необходимо заполнить поле</P>";
  } else {
    input1.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error1").innerHTML = "<p></P>";
  }
  //valid input 2
  if (input2.value === "") {
    input2.style.borderBottom = "2px solid #DF2030";
    document.getElementById("error2").innerHTML =
      "<p>Необходимо заполнить поле</P>";
  } else {
    input2.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error2").innerHTML = "<p></P>";
  }
  //valid input 3
  if (input3.value === "") {
    input3.style.borderBottom = "2px solid #DF2030";
    document.getElementById("error3").innerHTML =
      "<p>Необходимо заполнить поле</P>";
  } else {
    input3.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error3").innerHTML = "<p></P>";
  }
  if (checkBox.checked) {
    document.getElementById("error4").innerHTML = "<p></P>";
  } else {
    /*document.getElementById("error4").innerHTML =
      "<p>Необходимо принять условия Пользовательского соглашения и Политики конфиденциальности</P>";*/
	checkBoxLabel.style.color = '#df2030'
  }
};
