let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);
console.log(cars[0]); // Toyota;
console.log(cars[2]); // Volvo;
console.log(cars[3]); // undefined;

cars[1] = "Peugeot";
console.log(cars);

cars[2] = cars[2] + " XC90"
console.log(cars[2]);

let razno = [15, -3.5, "hello", true, [1, 2, 3]];
console.log(razno);

// Ispis elemenata niza cars
for (let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// Pristup elementima niza razno 
for (let i = 0; i < razno.length; i++){
  console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];
for (let i = 0; i < unutrasnjiNiz.length; i++){
  console.log(unutrasnjiNiz[i]);
}

for (let i = 0; i < razno[4].length; i++){
  console.log(razno[4][i]);
}

razno[4][1] = 241;
for (let i = 0; i < razno[4].length; i++){
  console.log(razno[4][i]);
}

// Uvecanje vrednosti unutrasnjeg niza za 10%
for (let i = 0; i < razno[4].length; i++){
  razno[4][i] = razno[4][i] * 1.1;
}
for (let i = 0; i < razno[4].length; i++){
  console.log(razno[4][i]);
}


let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];

// II zadatak - Odrediti zbir elemenata celobrojnog niza.
let sumaElem = niz => {
  let zbir = 0;
  for (let i = 0; i < niz.length; i++) {
    zbir += niz[i]; 
  }
  return zbir; 
}

console.log(sumaElem(brojevi));
console.log(sumaElem(brojevi2));

// III zadatak - Odrediti proizvod elemenata celobrojnog niza.
let brojevi3 = [3, 1, 5]
let proizvodElem = niz => {
  let pr = 1;
  for (let i = 0; i < niz.length; i++) {
    pr *= niz[i]; 
  }
  return pr;
}

console.log(proizvodElem(brojevi));
console.log(proizvodElem(brojevi3));

// IV zadatak - Odrediti srednju vrednost elemenata celobrojnog niza.
let brojevi4 = [4, 6, 5, 5,]
let arsrElem = niz => {
  let arsr = 0;
  let suma = 0;
  let brBrojeva = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
    brBrojeva++;
  }
  arsr = suma / brBrojeva;
  return arsr; 
}

console.log(arsrElem(brojevi));
console.log(arsrElem(brojevi4));

// II nacin 
let srVrednost = niz => {
  let zbir = sumaElem(niz); 
  let br = niz.length;
  return zbir / br; 
}

console.log(srVrednost(brojevi));

// III nacin 
let srVrednost2 = niz => sumaElem(niz) / niz.length;

console.log(srVrednost(brojevi));

// VI zadatak a) - Naci srednju vrednost parnih elemenata celobrojnog niza. 
let srVrednostParnih = niz => {
  let zbir = 0; 
  let br = 0;
  for (let i = 0; i < niz.length; i++){
    if (niz[i] % 2 == 0){
      zbir += niz[i];
      br++;
    }
  }
  return zbir / br; 
}

console.log(srVrednostParnih(brojevi));


// V zadatak - Odrediti maksimalnu vrednost u celobrojnom nizu.
let brojevi5 = [542, 20, 191, 26, 41, 19, 15, 911, 101, 3245];

let maxElem = niz => {
  let max = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i]; 
    }
  }
  return max; 
}

console.log(maxElem(brojevi));
console.log(maxElem(brojevi2));
console.log(maxElem(brojevi3));
console.log(maxElem(brojevi4));
console.log(maxElem(brojevi5));


// VI zadatak - Odrediti minimalnu vrednost u celobrojnom nizu.
let minElem = niz => {
  let min = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i]; 
    }
  }
  return min; 
}

console.log(minElem(brojevi));
console.log(minElem(brojevi2));
console.log(minElem(brojevi3));
console.log(minElem(brojevi4));

console.log(minElem(brojevi5));


// VII zadatak - Odrediti indeks maksimalnog elementa celobrojnog niza.
let indMaxNiza = niz => {
  let max = maxElem(niz);
  let indeks;
  for (let i = 0; i < niz.length; i++) {
    if (max == niz[i]) {
      indeks = i; 
    }
  }
  return indeks; 
}
let brojevi6 = [15, 13, 15, 10, 15]
console.log(indMaxNiza(brojevi6));

// Ovakva f-ja vraca prvi maximum u nizu
let indMaxNiza2 = niz => {
  let max = maxElem(niz);
  let indeks;
  for (let i = 0; i < niz.length; i++) {
    if (max == niz[i]) {
      indeks = i; 
      return indeks;     // ovde moze da se stavi BREAK, a retrun dole u f-ji isto resenje se dobija 
    }
  }
}

console.log(indMaxNiza2(brojevi6));


// IX zadatak - Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brojevi7 = [1, 5, 6]
let brojVecih = niz => {
  let srvr = arsrElem(niz);
  let brBrojeva = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > srvr) {
      brBrojeva++;
    }
  }
  return brBrojeva;
}

console.log(brojVecih(brojevi7));

// X zadatak - Izračunati zbir pozitivnih elemenata celobrojnog niza.
let brojevi8 = [-2, -1, 0, 5, 7, -9, 10] 

let sumPoz = niz => {
  let suma = 0; 
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      suma += niz[i]; 
    }
  }
  return suma; 
}
console.log(sumPoz(brojevi8));


// XI zadatak - Odrediti broj parnih elemenata u celobrojnom nizu.
let parniBr = niz => {
  let brBrojeva = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      brBrojeva++;
    }
  }
  return brBrojeva;
}

console.log(parniBr(brojevi));
console.log(parniBr(brojevi2));
console.log(parniBr(brojevi3));
console.log(parniBr(brojevi4));
console.log(parniBr(brojevi5));
console.log(parniBr(brojevi6));
console.log(parniBr(brojevi7));

// XII zadatak - Odrediti broj parnih elemenata sa neparnim indeksom.
let paranBrNeparanInd = niz => {
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 != 0) {
      br++;
    }
  }
  return br; 
}
console.log(paranBrNeparanInd(brojevi));


// XIII zadatak - Izračunati sumu elemenata niza sa parnim indeksom.
let brojevi9 = [1, 2, 5, 9, 10, -11, -5]

let sumaParnihInd = niz => {
  let suma = 0;
  for (let i = 0; i < niz.length; i+=2) {
    suma += niz[i];
  }
  return suma;
}

console.log(sumaParnihInd(brojevi9));


// XIV zadatak - Promeniti znak svakom elementu celobrojnog niza.
let znak = niz => {
  for (let i = 0; i < niz.length; i++) {
    niz[i] *= (-1); 
    
  }
}

znak(brojevi9);
console.log(brojevi9);

// XV zadatak - Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let znakNepar = niz => {
  for (let i = 0; i < niz.length; i+=2) {
    if (niz[i] % 2 != 0) {
      niz[i] *= -1;
    }
  }
}
znakNepar(brojevi9);
console.log(brojevi9);