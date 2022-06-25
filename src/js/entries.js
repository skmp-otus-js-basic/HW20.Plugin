import "../scss/style.scss";
// eslint-disable-next-line no-unused-vars
import showTestimonials, { cleanList } from "./storage";

// cleanList();
const comments = document.querySelector("#comments");
showTestimonials(comments);
