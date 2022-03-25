const btn0l = document.querySelector(".btn0l");
const btn0d = document.querySelector(".btn0d");
const btn1l = document.querySelector(".btn1l");
const btn1d = document.querySelector(".btn1d");
const btn2l = document.querySelector(".btn2l");
const btn2d = document.querySelector(".btn2d");
const btn3l = document.querySelector(".btn3l");
const btn3d = document.querySelector(".btn3d");
let voto0 = false;
let voto1 = false;
let voto2 = false;
let voto3 = false;

btn0l.addEventListener('click', () => {
  if (voto0 == false) {
    btn0l.style.backgroundColor = 'green'
    voto0 = true;
  } else return
});

btn0d.addEventListener('click', () => {
  if (voto0 == false) {
    btn0d.style.backgroundColor = 'red'
    voto0 = true;
  } else return
});
btn1l.addEventListener('click', () => {
  if (voto1 == false) {
    btn1l.style.backgroundColor = 'green'
    voto1 = true;
  } else return
});

btn1d.addEventListener('click', () => {
  if (voto1 == false) {
    btn1d.style.backgroundColor = 'red'
    voto1 = true;
  } else return
});
btn2l.addEventListener('click', () => {
  if (voto2 == false) {
    btn2l.style.backgroundColor = 'green'
    voto2 = true;
  } else return
});

btn2d.addEventListener('click', () => {
  if (voto2 == false) {
    btn2d.style.backgroundColor = 'red'
    voto2 = true;
  } else return
});
btn3l.addEventListener('click', () => {
  if (voto3 == false) {
    btn3l.style.backgroundColor = 'green'
    voto3 = true;
  } else return
});

btn3d.addEventListener('click', () => {
  if (voto3 == false) {
    btn3d.style.backgroundColor = 'red'
    voto3 = true;
  } else return
});