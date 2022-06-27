import "../scss/style.scss";
import show from "./show";
import check from "./check";

const form = document.querySelector("#newsletter");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const signup = document.getElementById("signup");
  if (!check("signup", signup.value)) return;
  signup.value = "";
  show("Form 'Home' has submitted");
});
