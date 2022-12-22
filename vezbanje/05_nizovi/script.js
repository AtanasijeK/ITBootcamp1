// Ispisati sve elemente niza od 5 stringova.
let elementi = [4, "ovca", 5, "jarac", 9, "magare"];
for(i = 0; i < elementi.length; i++) {
  console.log(elementi[i]);
}


// Odrediti zbir elemenata celobrojnog niza.
let brojevi = [7, 4, -20, 33, 1];
let suma = 0;
for(i = 0; i < brojevi.length; i++) {
  suma += brojevi[i];
}

console.log(suma);


// Odrediti proizvod elemenata celobrojnog niza.
let brojeviP = [1, 9, 10, 2, 11, 0, 45];
let proizvod = 1;
for (i = 0; i < brojeviP.length; i++) {
  proizvod *= brojeviP[i];
}

console.log(proizvod);


// Odrediti srednju vrednost elemenata celobrojnog niza.
let srVr = niz => {
  let srVrednost = 0;
  let brBrojeva = 0;
  suma = 0;
  for (i = 0; i < niz.length; i++) {
    suma += niz[i];
    brBrojeva++;
  }
  srVrednost = suma / brBrojeva;
  return srVrednost
}
console.log(srVr(brojeviP));


// Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVrednost = niz => {
  max = niz[0];
  for (i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
    }
  }
  return max;
}

console.log(maxVrednost(brojeviP));
console.log(maxVrednost(brojevi));


// Odrediti minimalnu vrednost u celobrojnom nizu.
let minVrednost = niz => {
  min = niz[0];
  for (i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
    }
  }
  return min;
}

console.log(minVrednost(brojeviP));
console.log(minVrednost(brojevi));

// Odrediti indeks maksimalnog elementa celobrojnog niza.
let maxIndex = niz => {
  max = niz[0]; 
  index = 0;
  for (i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
      index = i;
    }
  }
  return index;
}

console.log(maxIndex(brojeviP));