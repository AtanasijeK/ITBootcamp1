import Pacijent from "./pacijent.js";

let p1 = new Pacijent ("Atanasije", 1.89, 95)
let p2 = new Pacijent ("Milica", 1.65, 45);
let p3 = new Pacijent ("Vuk", 2.02, 105);
let p4 = new Pacijent ("Andjela", 1.69, 53);

// p1.stampaj();
// console.log(p1.bmi());
// console.log(p1.kritican());

let pacijenti = [p1, p2, p3, p4];


// Ispisati podatke o pacijentu sa najmanjom tezinom.
let btnMinTezina = document.getElementById("racunajMinTezinu");
let pMinTezina = document.getElementById("minTezina");

btnMinTezina.addEventListener("click", () => {
  let minPac = pacijenti[0];
  pacijenti.forEach( p => {
  if (p.tezina < minPac.tezina) {
    minPac = p;
  }
  });
  minPac.stampaj();
  pMinTezina.innerHTML = minPac.stampajListu();
})


// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let btnMaxBmi = document.getElementById("racunajMaxBmi");
let pMaxBmi = document.getElementById("maxBmi");

btnMaxBmi.addEventListener("click", () => {
  let maxPac = pacijenti[0];
  pacijenti.forEach( p => {
    if (p.bmi() > maxPac.bmi()) {
      maxPac = p;
    }
  });
  maxPac.stampaj();
  pMaxBmi.innerHTML = maxPac.stampajListu();
})


// Ispisati sve pacijente čije ime sadrži slovo A.
let btnSlovoA = document.getElementById("ispisiSlovoA");
let pSlovoA = document.getElementById("slovoA");

btnSlovoA.addEventListener("click", () => {
  pacijenti.forEach( p => {
    if (p.ime.includes("A") || p.ime.includes("a")) {
      p.stampaj();
      pSlovoA.innerHTML += p.stampajListu();
    }
  });
})


// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
let srednjaVisina = niz => {
  let sumaVisina = 0;
  let brPac = niz.length;
  niz.forEach(p => {
    sumaVisina += p.visina;
  });
  return sumaVisina / brPac;
}
console.log(srednjaVisina(pacijenti));
let divAvgVisina = document.querySelector("#avgVisina");
divAvgVisina.innerHTML = srednjaVisina(pacijenti);