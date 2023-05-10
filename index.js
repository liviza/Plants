"use strict";
// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const div = document.querySelector(".nav-open");

document.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(div);

  if (!withinBoundaries) {
    div.classList.toggle("nav-open");
  }
});

// close mobile navigation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// activated service
const btnsService = document.querySelectorAll(".btn");
const projectCard = document.querySelectorAll(".project");
let activeBtn = 0;

for (let i = 0; i < btnsService.length; i++)
  btnsService[i].addEventListener("click", function () {
    activeBtn = i;
    btnsService[i].classList.toggle("btn-active");
    for (let a = 0; a < projectCard.length; a++) {
      if (!projectCard[a].classList.contains(`project-${activeBtn}`))
        projectCard[a].classList.toggle("blur");
    }
  });

// accourdion
const priceBtn = document.querySelectorAll(".price-btns");
const priceItem = document.querySelectorAll(".item-price");
let activePrice = 0;

const closePrice = function () {
  if (activePrice === 0) {
    priceItem[1].classList.remove("open");
    priceItem[2].classList.remove("open");
  }
  if (activePrice === 1) {
    priceItem[0].classList.remove("open");
    priceItem[2].classList.remove("open");
  }
  if (activePrice === 2) {
    priceItem[0].classList.remove("open");
    priceItem[1].classList.remove("open");
  }
};

for (let i = 0; i < priceBtn.length; i++) {
  priceBtn[i].addEventListener("click", function () {
    activePrice = i;
    priceItem[i].classList.toggle("open");
    closePrice();
  });
}

// select;
const select = document.querySelector(".contact-box");
const selectHeader = document.querySelector(".contact-city-header");
const selectItems = document.querySelectorAll(".hidden-contact-city");
const cityAdress = document.querySelectorAll(".address-container");
let activeCity = 0;

selectHeader.addEventListener("click", function () {
  select.classList.toggle("open-city");
});

const showAddress = function () {
  if (activeCity === 0 && cityAdress[0].classList.contains("city-0")) {
    cityAdress[0].classList.add("selected-city");
    cityAdress[1].classList.remove("selected-city");
    cityAdress[2].classList.remove("selected-city");
    cityAdress[3].classList.remove("selected-city");
  }
  if (activeCity === 1 && cityAdress[1].classList.contains("city-1")) {
    cityAdress[3].classList.add("selected-city");
    cityAdress[0].classList.remove("selected-city");
    cityAdress[1].classList.remove("selected-city");
    cityAdress[2].classList.remove("selected-city");
  }
  if (activeCity === 2 && cityAdress[2].classList.contains("city-2")) {
    cityAdress[1].classList.add("selected-city");
    cityAdress[0].classList.remove("selected-city");
    cityAdress[2].classList.remove("selected-city");
    cityAdress[3].classList.remove("selected-city");
  }
  if (activeCity === 3 && cityAdress[3].classList.contains("city-3")) {
    cityAdress[2].classList.add("selected-city");
    cityAdress[0].classList.remove("selected-city");
    cityAdress[3].classList.remove("selected-city");
    cityAdress[1].classList.remove("selected-city");
  }
};

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    activeCity = i;
    select.classList.remove("open-city");

    document.querySelector(".city-text").textContent =
      selectItems[i].textContent;
    selectHeader.style.backgroundColor = "#c1e698";
    showAddress();
  });
}
