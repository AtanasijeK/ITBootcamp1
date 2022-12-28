// I zadatak - Ispisati sve elemente niza od 5 stringova.
let elementi = ["opa", "opa", "neka", "neka"];

let ispis = niz => {
  console.log(niz);
}
ispis(elementi);


// II zadatak - Odrediti zbir elemenata celobrojnog niza.
let brojevi = [2, 8, 5, 3, 9, 3];
let zbir = niz => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
  }
  return suma; 
}

console.log(zbir(brojevi)); 


// III zadatak - Odrediti proizvod elemenata celobrojnog niza.
let brojevi1 = [2, 3, 2];

let proizvod = niz => {
  let p = 1;
  for (let i = 0; i < niz.length; i++) {
    p *= niz[i];
  }
  return p;
}

console.log(proizvod(brojevi1));


// IV zadatak - Odrediti srednju vrednost elemenata celobrojnog niza.
let sreVre = niz => {
  let brBrojeva = 0;
  let suma = 0;
  let arsr = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
    brBrojeva++;
    arsr = suma/brBrojeva;
  }
  return arsr;
}

console.log(sreVre(brojevi));


// V zadatak - Odrediti maksimalnu vrednost u celobrojnom nizu.
let maksi = niz => {
  let maks = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (maks < niz[i]) {
      maks = niz[i];
    }
  }
  return maks;
}

console.log(maksi(brojevi));


// VI zadatak - Odrediti minimalnu vrednost u celobrojnom nizu.
let mini = niz => {
  let min = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
    }
  }
  return min; 
}

console.log(mini(brojevi));


// VII zadatak - Odrediti indeks maksimalnog elementa celobrojnog niza.
let indeksNajveceg = niz => {
  let max = niz[0];
  let indexM = 0;
  for (let i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
      indexM = i;
    }
  }
  return indexM;
}

console.log(indeksNajveceg(brojevi));


// VIII zadatak - Odrediti indeks minimalnog elementa celobrojnog niza.
let indeksNajmanjeg = niz => {
  let min = niz[0];
  let indexN = 0;
  for (let i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
      indexN = i;
    }
  }
  return indexN;
}

console.log(indeksNajmanjeg(brojevi));


// IX zadatak - Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let veci = niz => {
  let suma = 0;
  let brBrojeva = 0;
  let arsr = 0; 
  let brVecih = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
    brBrojeva++;
  }
  arsr = suma / brBrojeva;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > arsr) {
      brVecih++;
    }
  }
  return brVecih;
}

console.log(veci(brojevi));


// X zadatak - Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozitivnih = niz => {
  let pozitivni = 0; 
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      pozitivni += niz[i];
    }
  }
  return pozitivni;
}

let brojevi2 = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
console.log(zbirPozitivnih(brojevi2));


// XI zadatak - Odrediti broj parnih elemenata u celobrojnom nizu.
let brPar = niz => {
  let par = 0; 
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      par++;
    }
  }
  return par;
}

let br = [34, 54, 7, 94, 10]
console.log(brPar(br));
console.log(brPar(brojevi2));

// XII zadatak - Odrediti broj parnih elemenata sa neparnim indeksom.
let parniBrNeparInd = niz => {
  let parNepar = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 != 0) {
      parNepar++;
    }
  }
  return parNepar;
}

console.log(parniBrNeparInd(br));

// XIII zadatak - Izračunati sumu elemenata niza sa parnim indeksom.
let sumParInd = niz => {
  let suma = 0; 
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 0) {
      suma += niz[i];
    }
  }
  return suma;
}

console.log(sumParInd(br));


// XIV zadatak - Promeniti znak svakom elementu celobrojnog niza.
let br2 = [-1, -3, -5, 2, 4, 6];
let znak = niz => {
  for (let i = 0; i < niz.length; i++) {
    niz[i] = niz[i] * (-1);
  }
  return niz;
}

console.log(znak(br2));


// XV zadatak - Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let neparZnak = niz => {
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 0) {
      niz[i] = niz[i] * (-1);
    }
  }
  return niz;
}

console.log(neparZnak(br2));


// XVI zadatak - Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let spisak = ["Bregasta;", "Bombina;", "Radilica;", "Plivajuci zamajac."];
let lista = niz => {
  listica = `<ul>` + ` `;
  for (let i = 0; i < niz.length; i++) {
    listica += `<li>${niz[i]}</li>`;
  }
  listica += `</ul>`;
  return listica;
}

document.write(lista(spisak));


// XVII zadatak - Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

// XVIII zadatak - Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.



// XIX zadatak - Ispisati dužinu svakog elementa u nizu stringova. 

let duzinaStringa = niz => {
  let duzina = 0;
  for (let i = 0; i < niz.length; i++) {
    duzina = niz[i].length - 1;
    console.log(duzina);
  }
}

duzinaStringa(spisak);


// XX zadatak - Odrediti element u nizu stringova sa najvećom dužinom.
// XXI zadatak - Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
// XXII zadatak - Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
// XXIII zadatak - Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
