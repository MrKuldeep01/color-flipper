let container = document.querySelector(".container");
let colorbtn = document.querySelector(".colorchangerbtn");
let colorname = document.querySelector(".colorname");
let arrlenght = 0;
let colorarray = [];
function colormaker() {
  for (i = 1; i <= 255; i++) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    colorarray[i] = `rgb(${red},${green},${blue})`;
    arrlenght = colorarray.length;
    //   console.log(colorarray[i]);
  }
}

colormaker();

function colorflipfun() {
  let colorSelector = Math.floor(Math.random() * arrlenght);
  container.style.background = colorarray[colorSelector];
  colorname.innerText = colorarray[colorSelector];
}
colorbtn.addEventListener("click", colorflipfun);
