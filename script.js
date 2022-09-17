const dragLine = document.querySelector(".slider .drag-line");
const slider = document.querySelector(".slider input");
const img = document.querySelector(".img-2");


slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
}