// group columns
const groupColumns = document.querySelector('.group-columns');
let repeat;
if(groupColumns.childElementCount > 3) {
  repeat = 3;
} else {
  repeat = groupColumns.childElementCount;
}
window.onresize = () => {
  if (window.innerWidth <= 501) {
    repeat = 1;
  }
}
groupColumns.style.gridTemplateColumns = `repeat(${repeat}, 1fr)`;

// propreties
function getElementTop(el) {
  return el.offsetTop;
}
