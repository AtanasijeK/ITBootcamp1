import { Film } from "./film.js";

let f1 = new Film ("Mi nismo andjeli", "Srdjan Dragojevic", 2005)
console.log(f1);

let f2 = new Film ("Ko to tamo peva", "Slobodan Sijan", 1799)
if (f2.godinaIzdanja < 1800) {
  f2.stampaj()
}
else {
  console.log("Error");
}

let f3 = new Film ("The Godfather", "Mario Puzo", 2011)