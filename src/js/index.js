import "../scss/style.scss";
import show from "./show";
import check from "./check";

import setSlider from "../plugins/carousel/slider";
import "../plugins/carousel/style.scss";

const form = document.querySelector("#newsletter");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const signup = document.getElementById("signup");
  if (!check("signup", signup.value)) return;
  signup.value = "";
  show("Form 'Home' has submitted");
});

const moreButtons = document.querySelectorAll("a.more img");
moreButtons.forEach((moreButton) => {
  moreButton.addEventListener("mouseover", (e) =>
    e.target.setAttribute("src", "images/more_hover.gif")
  );
  moreButton.addEventListener("mouseout", (e) =>
    e.target.setAttribute("src", "images/more.gif")
  );
});

const sliderNode = document.querySelector("#slider");
setSlider(sliderNode);
