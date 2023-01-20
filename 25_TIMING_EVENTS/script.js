console.log(1);
console.log(2);

window.setTimeout(() => {
  console.log("Poruka ispisana nakon nekog vremena");
}, 1000 * 3);
console.log(3);
console.log(4);

// for(let i = 5; i <= 100000; i++) {
//   console.log(i);
// }

// let i = 5;
// setInterval(() => {
//   console.log(i);
//   i++;
// }, 1000)


let btn1 = document.querySelector("#click1");
let btn2 = document.querySelector("#click2");
let btn3 = document.querySelector("#click3");
let btn4 = document.querySelector("#click4");
let btn5 = document.querySelector("#click5");
let btn6 = document.querySelector("#click6");

let ispis = document.querySelector("#ispis");
let inpCount = document.querySelector("#counter");


let tajmer = null;

btn1.addEventListener("click", function(e) {
  e.preventDefault();
  let datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();
  if(tajmer === null) {
    tajmer = setTimeout(function() {
      ispis.innerHTML = `${h}:${m}:${s}`;
      tajmer = null;
    }, 1000 * 2);
  }
});

btn2.addEventListener("click", function(e) {
  e.preventDefault();
  clearTimeout(tajmer);
  tajmer = null;
});

let vr = 0;
let clock = null;


btn3.addEventListener("click", () => {
  if(clock === null) {
    clock = setInterval(() => {
      // let datum = new Date();
      // let h = datum.getHours();
      // let m = datum.getMinutes();
      // let s = datum.getSeconds();
      // ispis.innerHTML = `${h}:${m}:${s}`;

      vr++;
      ispis.innerHTML = vr;
    }, 1000);
  }
});

btn4.addEventListener("click", () => {
  clearInterval(clock);
  clock = null;
});

//////////////////////////////////////////////////////

let count = null;
let vr1 = 0;

btn5.addEventListener("click", () => {
  if (count === null) {
    count = setInterval(() => {
      vr1++;
      inpCount.value = vr1;
    }, 1000);
  }
});

btn6.addEventListener("click", () => {
  clearInterval(count);
  count = null;
  vr1 = 0;
  inpCount.value = "";
})