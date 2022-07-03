import "../scss/style.scss";
import { saveList } from "./storage";
import checkValue from "./check";

const entry = document.querySelector("#submit");
entry.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  if (!checkValue(name)) return;
  const message = document.getElementById("message");
  if (!checkValue(message)) return;
  const record = {
    name: name.value,
    text: message.value,
    time: new Date().toLocaleDateString(),
  };
  saveList(record);
  window.location.replace("entries.html");
});
