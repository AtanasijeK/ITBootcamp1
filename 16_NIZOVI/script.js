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
let imaxElem = niz => {
  let max = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i]; 
    }
  }
  return max; 
}