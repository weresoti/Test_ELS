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
  slidesPerView: 'auto',
  watchOverflow: true,
  initialSlide: 0,
  /*loop: true,*/
  autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	}
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
    document.getElementById("error1").style.marginTop = "8px"
  } else {
    input1.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error1").innerHTML = "<p></P>";
    
  }
  //valid input 2
  if (input2.value === "") {
    input2.style.borderBottom = "2px solid #DF2030";
    document.getElementById("error2").innerHTML =
      "<p>Необходимо заполнить поле</P>";
    document.getElementById("error2").style.marginTop = "8px"
  } else {
    input2.style.borderBottom = "1px solid #2f3441";
    document.getElementById("error2").innerHTML = "<p></P>";
  }
  //valid input 3
  if (input3.value === "") {
    input3.style.borderBottom = "2px solid #DF2030";
    document.getElementById("error3").innerHTML =
      "<p>Необходимо заполнить поле</P>";
    document.getElementById("error3").style.marginTop = "8px"
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
