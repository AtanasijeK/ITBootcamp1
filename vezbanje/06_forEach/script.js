document.write("forEach vezba");

// XIX zadatak - Ispisati dužinu svakog elementa u nizu stringova. 
let imena = ["Svetislav", "Slobodanka", "Petar", "Nevenka", "Aleksandra", "Atanasije"];

let duzinaElementa = niz => {
  niz.forEach(el => {
    console.log(el.length);
  })
}

duzinaElementa(imena);


// XX zadatak - Odrediti element u nizu stringova sa najvećom dužinom.
let najduzi = niz => {
  maxd = 0;
  niz.forEach(el => {
    if (el.length > maxd) {
      maxd = el.length;
    }
  });
  let maxStr = undefined;
  niz.forEach(el => {
    if (maxd == el.length && maxStr == undefined){
      maxStr = el; 
    }
  });
  return maxStr; 
}

console.log(najduzi(imena));

// XXI zadatak - Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let prosecnaDuzina = niz => {
  let suma = 0; 
  niz.forEach(el => {
    suma += el.length
  })
  return suma / niz.length;
}

console.log(prosecnaDuzina(imena));

let brojDuzih = niz => {
  let duz = prosecnaDuzina(niz);
  let br = 0; 
  niz.forEach( el => {
    if (el.length > duz) {
      br++;
    }
  });
  return br; 
}

console.log(brojDuzih(imena));


// XXII zadatak - Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
let sadrziA = niz => {
  let br = 0; 
  niz.forEach(el => {
    if (el.includes('a') || el.includes('A')) {
      br++;
    }
  });
  return br;
}

console.log(sadrziA(imena));


// XXIII zadatak - Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
let sadrziA2 = niz => {
  let br = 0; 
  niz.forEach(el => {
    if (el[0] == 'a' || el[0] == 'A') {
      br++;
    }
  });
  return br;
}

console.log(sadrziA2(imena));