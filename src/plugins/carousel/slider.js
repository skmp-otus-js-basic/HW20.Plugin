const imgLeft = [0, -965, -1930, -2895];
let oldSlideIndex = 0;

async function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const moveSlide = async (slide, liItem) => {
  const newSlideIndex = +liItem.innerText - 1;
  if (oldSlideIndex === newSlideIndex) return;
  const step = oldSlideIndex < newSlideIndex ? -1 : 1;
  let from = imgLeft[oldSlideIndex];
  const to = imgLeft[newSlideIndex];
  oldSlideIndex = newSlideIndex;
  do {
    from += step;
    // eslint-disable-next-line no-await-in-loop
    await sleep(1);
    slide.setAttribute("style", `width: 3860px; left: ${from}px;`);
  } while (from !== to);
};

export default function setSlider(element) {
  // element.classList.add("middle_banner");

  // begin divSlider
  const divSlider = document.createElement("div");
  divSlider.className = "featured-slider";

  // begin divBorder
  const divBorder = document.createElement("div");
  divBorder.setAttribute("id", "featured-border");
  divBorder.setAttribute("style", "display: block;");

  // begin divWrapper
  const divWrapper = document.createElement("div");
  divWrapper.setAttribute("id", "featured-wrapper");

  // begin ulImages
  const ulImages = document.createElement("ul");
  ulImages.setAttribute("id", "featured-images");
  ulImages.setAttribute("style", "width: 3860px; left: 0px;");
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 4; i++) {
    const item = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute("src", `images/slider_photo${i}.jpg`);
    img.setAttribute("width", "965");
    img.setAttribute("height", "280");
    img.setAttribute("alt", `slider_photo${i}.jpg`);
    item.appendChild(img);
    ulImages.appendChild(item);
  }
  divWrapper.appendChild(ulImages);
  // end ulImages

  divBorder.appendChild(divWrapper);
  // end divWrapper

  // begin ulButtons
  const ulButtons = document.createElement("ul");
  ulButtons.setAttribute("id", "featured-buttons");
  ulButtons.className = "clear_fix";
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 4; i++) {
    const item = document.createElement("li");
    item.className = i === 1 ? "clicked" : "";
    item.setAttribute("id", `btn${i}`);
    item.innerHTML = i.toString();
    item.addEventListener("click", () => {
      const items = document.getElementsByClassName("clicked");
      // eslint-disable-next-line no-plusplus
      for (let n = 0; n < items.length; n++) {
        items[n].className = "";
      }
      const slide = document.getElementById("featured-images");
      moveSlide(slide, item);
      item.className = "clicked";
    });
    ulButtons.appendChild(item);
  }
  divBorder.appendChild(ulButtons);
  // end ulButtons

  divSlider.appendChild(divBorder);
  // end divBorder

  element.appendChild(divSlider);
  // end divSlider
}
