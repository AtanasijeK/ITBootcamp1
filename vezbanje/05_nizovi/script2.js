// Ispisati sve elemente niza od 5 stringova.
let imena = ["Atanasije", "Tijana", "Aleksandra", "Jelena", "Kosara"];
for(i = 0; i < imena.length; i++) {
  console.log(imena[i]);
}


// Odrediti zbir elemenata celobrojnog niza.
let brojevi = [2, 4, 6];
let suma = 0;
for (i = 0; i < brojevi.length; i++) {
  suma += brojevi[i];
}

console.log(suma);


// Odrediti proizvod elemenata celobrojnog niza.
let pr = 1; 
for (i = 0; i < brojevi.length; i++) {
  pr *= brojevi[i];
}

console.log(pr);


// Odrediti srednju vrednost elemenata celobrojnog niza.
// Odrediti maksimalnu vrednost u celobrojnom nizu.
// Odrediti minimalnu vrednost u celobrojnom nizu.
