// Funkcija 1: niz => {for petljom  prodjemo kroz sve elemente niza, i svaki ispisemo u konzoli}
// Funkcija 2: niz => {for petljom  prodjemo kroz sve elemente niza, i svaki ispisemo u div elementu}

// Funkcija (niz, nacinIspisa) => {for petljom prodjemo kroz sve elemente niza, i svak 
//                                 ispisemo na zadati nacin}

function ispisKonzola (poruka) {
  console.log(poruka);
} 

function ispisStranica (poruka) {
  let div = document.getElementById("container")
  div.innerHTML = poruka;
}

function ispisNiza(niz, cb) {
  let poruka = "";
  for (i = 0; i < niz.length; i++) {
    poruka += niz[i] + " ";
  }
  cb(poruka);
}

ispisKonzola("Atanasije Karadzic")
ispisStranica("karadzic.mladic")

let a = [6, -8, 5, 10];
let b = ["joca", "rosi"] 
ispisNiza(a, ispisStranica);
ispisNiza(a, ispisKonzola); 
ispisNiza(b, ispisKonzola); 

a.forEach(ispisKonzola);
// forEach je petlja koja za svaki element niza poziva callback f-ju, a kao parametar te callback f-je prosledjuje bas taj element niza. 
// Konkreno, 33. linija koda za niz a poziva sledece:
// ispisKonzola(6);
// ispisKonzola(-8);
// ispisKonzola(5);
// ispisKonzola(10);

b.forEach(ispisKonzola);


a.forEach(function(element) {
  console.log(element);
});
// forEach je za svaki element niza a, da pozove f-ju i prosledice svaki put po jedan element niza. 


a.forEach(elem => {
  console.log(elem);
})