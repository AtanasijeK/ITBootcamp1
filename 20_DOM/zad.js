let e1 = document.getElementById("prvi");
console.log(e1);

let e2 = document.getElementsByClassName("eror nth:first-child");
console.log(e2);

let e3 = document.getElementsByClassName("red2");
console.log(e3);

let e4 = document.getElementsByTagName("a");
console.log(e4);

let e5 = document.getElementsByTagName("img");
console.log(e5);

//////////////////////////////////////////
let p1 = document.querySelectorAll("p");
for(let i = 0; i < p1.length; i++) {
  p1[i].innerHTML += " VAZNO";
}

// let p2 = document.querySelectorAlla(".eror")
// for(let i = 0; i < p2.length; i++) {
//   p2[i].innerHTML += "<h1>GRESKA</h1>"
// }

for (let i = 0; i < p1.length; i++) {
  p1[i].innerHTML += (i + 1) ** 2;
}

for (i = 0; i < e4.length; i++) {
  e4[i].style.padding = "5px";
  e4[i].style.fontSize = "18px";
  e4[i].style.textDecoration = "none";
  
}