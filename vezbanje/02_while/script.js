// I zadatak - Ispisati brojeve od 1 do 20: a) i b)
let i = 1;
let str = '';
while(i <= 20){
  str += i + ' ';
  i++;
}
console.log(`${str}`);

i = 115;
while (i <= 125) {
  console.log(i);
  i++;
}

// II zadatak - Ispisati brojeve od 20 do 1.
i = 15;
while (i >= 5) {
  console.log(i);
  i--;
}

// III zadatak - Ispisati parne brojeve od 1 do 20.
i = 9;
while(i <= 14){
  if (i % 2 == 0){
    console.log(i);
  }
 i++;
}

// IV zadatak - Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje.
n = 9;
i = 1;
while(i <= n){
  if(i % 3 == 0){
    document.write(`<p style="color: orangered;">Atanasije Karadzic</p>`);
  }
  else if (i % 3 == 1){
    document.write(`<p style="color: red;">SAMPION</p>`);
  }
  else{
    document.write(`<p style="color: olive;">DOKTOR</p>`);
  }
  i++;
}

// V zadatak - Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira.
n = 5;
i = 1; 
while(i <= n){
  if (i % 2 == 0){
    document.write(`<img src= "../french.jpeg" style="border: 3px solid gray; width: 250px; margin: 10px">`);
  }
  else{
    document.write(`<img src= "../french.jpeg" style="border: 4px dashed red; width: 250px;">`);
  }
  i++
}

// VI zadatak - Odrediti sumu brojeva od 1 do 100.
i = 1;
suma = 0;
while (i <= 100) {
  suma += i;
  i++;
}
console.log(suma);

//  VII zadatak - Odrediti sumu brojeva od 1 do n.
n = 100;
i = 1;
suma = 0;
while (i <= n) {
  suma += i;
  i++;
}
console.log(`suma brojeva od 1 do ${n} je: ${suma}`);

// VIII zadatak - Odrediti sumu brojeva od n do m.
n = 1; 
let m = 3;
i = n; 
suma = 0;
while (i <= m) {
  suma += i;
  i++;
}
console.log(`suma brojeva od ${n} do ${m} je: ${suma}`);

// IX zadatak - Odrediti proizvod brojeva od n do m.
let proizvod = 1;
i = n;
while (i <= m) {
  proizvod *= i;
  i++;
}
console.log(`proizvod brojeva od ${n} do ${m} je: ${proizvod}`);

// X zadatak - Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m.
let sumaKvadrata = 0;
let sumaKubova = 0;
n = 4;
m = 7;
i = n;
while (i <= m) {
  if(i % 2 == 0){
    sumaKvadrata += (i**2);
    
  }
  else{
    sumaKubova += (i**3);
    
  }
  i++
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} je: ${sumaKvadrata}`);
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} je: ${sumaKubova}`);

// XI zadatak - Odrediti sa koliko brojeva je deljiv uneti broj k.
let k = 111;
i = 1;
let brojac = 0;
while (i <= k) {
  if (k % i == 0){
    brojac++;
  }
  i++;
}
console.log(`Broj ${k} je deljiv sa ${brojac} brojeva`);

// XII zadatak 
if (brojac <= 2){
  console.log(`Broj ${k} je PROST broj`);
}
else {
  console.log(`Broj ${k} je SLOZEN broj`);
}