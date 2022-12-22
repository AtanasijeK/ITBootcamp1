// II zadatak 
let sumaElem = niz => {
  let suma = 0;
  niz.forEach(el => {
    suma += el; 
  });  // Ova arrow f-ja JESTE callback f-ja!
  return suma; 
}

let a = [1, 3, 4, 6];
console.log(sumaElem(a)); // sumaElem NIJE callback f-ja!


// V zadatak
let maxVr = niz => {
  let max = niz[0];
  niz.forEach(el => {
    if(el > max) {
      max = el; 
    }
  });
  return max;
}

console.log(maxVr(a));


// VII zadatak
let indexMaxVr = niz => {
  let max = niz[0];
  let idx = 0;
  niz.forEach ((el, i) => {
    if (el > max) {
      max = el;
      idx = i;
    }
  });
  return idx; 
}

let indexSvihMaxVr = niz => {
  let max = maxVr(niz);
  let indices = [];
  niz.forEach((el, i) => {
    if (el == max) {
      indices.push(i);
    }
  });
  return indices;
}


console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 4];
// console.log(indexMaxVr(b)); // rezultat: 2;
console.log(indexSvihMaxVr(b)); // rezultat: 5;



// XIX zadatak - Ispisati dužinu svakog elementa u nizu stringova. 
let str = ["Kamioni", "Avioni", "Automobili", "Motori", "Jahte"]; 

let duzineSvihStr = niz => { 
  niz.forEach (el => {
    console.log(el.length);
  });
}

duzineSvihStr(str)


// XIX zadatak - Odrediti element u nizu stringova sa najvećom dužinom.
let maxDuzinaPoslednji = niz => {
  let maxd = 0;
  niz.forEach(el => {
    if (el.length > maxd) {
      maxd = el.length;
    }
  });
  let maxStr = undefined;
  niz.forEach(el => {
    if (el.length == maxd) {
      maxStr = el;
    }
  });
  return maxStr;
}

let maxDuzinaPrvi = niz => {
  let maxd = 0;
  niz.forEach(el => {
    if (el.length > maxd) {
      maxd = el.length;
    }
  });
  let maxStr = undefined;
  niz.forEach(el => {
    if (el.length == maxd && maxStr == undefined) {
      maxStr = el;
    }
  });
  return maxStr;
}


console.log(maxDuzinaPoslednji(str));

// XXI 
let prosecnaDuzina = niz => {
  let duz = 0; 
  niz.forEach(el => {
    duz += el.length;
  });
  return duz / niz.length; 
}

console.log(prosecnaDuzina(str));

let brojNatprosecnoDugih = niz => {
  let duz = prosecnaDuzina (niz);
  br = 0;
  niz.forEach (el => {
    if (el.length > duz) {
      br++;
    }
  });
  return br;
}

console.log(brojNatprosecnoDugih(str));


// XXII zadatak 
let brojSadrziA = niz => {
  let br = 0; 
  niz.forEach(el => {
    if (el.includes("a") || el.includes("A")) {
      br++; 
    }
  });
  return br;
}

console.log(brojSadrziA(str));

// XXIII
let pocinjeNaA = niz => {
  let br = 0; 
  niz.forEach(el => {
    if (el[0] == "a" || el[0] == "A") {
      br++; 
    }
  });
  return br;
}

console.log(pocinjeNaA(str));