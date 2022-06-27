export default function check(elementId, data) {
  if (data === null || data.trim().length === 0) {
    const element = document.getElementById(elementId);
    let emptyClass;
    let workClass;
    switch (elementId) {
      case "name":
        emptyClass = "main_input_empty";
        workClass = "main_input";
        break;
      case "message":
        emptyClass = "main_textarea_empty";
        workClass = "main_textarea";
        break;
      case "signup":
        emptyClass = "newsletter_input_empty";
        workClass = "newsletter_input";
        break;
      default:
        // eslint-disable-next-line no-alert
        alert("Я таких значений не знаю");
    }
    element.setAttribute("class", emptyClass);
    setTimeout(() => element.setAttribute("class", workClass), 300);
    return false;
  }
  return true;
}
