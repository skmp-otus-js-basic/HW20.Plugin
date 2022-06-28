export default function check(elementId, data) {
  if (data === null || data.trim().length === 0) {
    const element = document.getElementById(elementId);
    let emptyClass;
    let workClass;
    switch (elementId) {
      case "name":
        emptyClass = "main-input-empty";
        workClass = "main-input";
        break;
      case "message":
        emptyClass = "main-textarea-empty";
        workClass = "main-textarea";
        break;
      case "signup":
        emptyClass = "newsletter-input-empty";
        workClass = "newsletter-input";
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
