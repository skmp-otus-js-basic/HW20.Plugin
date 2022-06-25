import "../scss/style.scss";
import { saveList } from "./storage";
import check from "./check";

const entry = document.querySelector("#submit");
entry.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = document.getElementById("name").value;
  if (!check("name", nameValue)) return;
  const textValue = document.getElementById("message").value;
  if (!check("message", textValue)) return;
  const record = {
    name: nameValue,
    text: textValue,
    time: new Date().toLocaleDateString(),
  };
  saveList(record);
  window.location.replace("entries.html");
});
