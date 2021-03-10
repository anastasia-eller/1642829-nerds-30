// Modal

const button = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal");
const close = popup.querySelector(".modal-close");
const form = popup.querySelector(".feedback-form");
const login = popup.querySelector("[name=name]");
const email = popup.querySelector("[name=login]");
const myModalButton = form.querySelector(".modal-button");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-active");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-active");
  popup.classList.remove("modal-error");
});

myModalButton.addEventListener("click", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-active")) {
    evt.preventDefault();
    popup.classList.remove("modal-active");
    popup.classList.remove("modal-error");
    }
  }
});

// Slider

const controlOne = document.querySelector(".control-1");
const controlTwo = document.querySelector(".control-2");
const controlThree = document.querySelector(".control-3");

const slideOne = document.querySelector(".slide-1");
const slideTwo = document.querySelector(".slide-2");
const slideThree = document.querySelector(".slide-3");


controlOne.addEventListener("click", function () {
  controlTwo.classList.remove("current");
  controlThree.classList.remove("current");
  controlOne.classList.add("current");
  slideTwo.classList.remove("slide-current");
  slideThree.classList.remove("slide-current");
  slideOne.classList.add("slide-current");
});

controlTwo.addEventListener("click", function () {
  controlOne.classList.remove("current");
  controlThree.classList.remove("current");
  controlTwo.classList.add("current");
  slideOne.classList.remove("slide-current");
  slideThree.classList.remove("slide-current");
  slideTwo.classList.add("slide-current");
});

controlThree.addEventListener("click", function () {
  controlOne.classList.remove("current");
  controlTwo.classList.remove("current");
  controlThree.classList.add("current");
  slideOne.classList.remove("slide-current");
  slideTwo.classList.remove("slide-current");
  slideThree.classList.add("slide-current");
});
