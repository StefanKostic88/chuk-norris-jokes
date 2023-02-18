"use strict";

const textContainerEl = document.querySelector(".text-body");
const btn = document.getElementById("new-joke__btn");

const getJoke = () => {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      textContainerEl.innerHTML = "";
      const paragraphEl = `<p class="joke">${data.value}</p>`;
      textContainerEl.insertAdjacentHTML("beforeend", paragraphEl);
    });
};
getJoke();

btn.addEventListener("click", getJoke);
