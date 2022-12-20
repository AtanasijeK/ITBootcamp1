// I zadatak - Ispisati brojeve od 1 do 20.
for (i = 3; i <= 9; i++) {
  console.log(i); 
}

// II zadatak - Ispisati brojeve od 20 do 1.
for (i = 15; i >= 10; i--){
  console.log(i);
}

// III zadatak - Ispisati parne brojeve od 1 do 20.
let parni = '';
let neparni = '';
for (i = 1; i <= 20; i++){
  if(i % 2 == 0){
    parni += i + ' ';
    
  }
  else{
    neparni += i + ' ';
  }
}
console.log(`${parni} su parni brojevi od 1 do 20`);
console.log(`${neparni} su neparni brojevi od 1 do 20`);

// IV zadatak - Ispisati dvostruku vrednost brojeva od 5 do 15 *
for(i = 1; i <= 17; i++){
  if(i % 2 != 0)
  console.log(i*2);
}

// V zadatak - Odrediti sumu brojeva od 1 do n.
let n = 5;
let suma = 0;
for (i = 1; i <= n; i++){
  suma += i;
} 
console.log(suma);

// VI zadatak - Odrediti sumu brojeva od n do m *
n = 10;
let m = 12;
suma = 0;
for (i = n; i <= m; i++){
  suma += i;
}
console.log(`Suma brojeva od ${n} do ${m} je: ${suma}`);

// VII zadatak - Odrediti proizvod brojeva od n do m.
n = 2;
m = 4;
let proizvod = 1;
for (i = n; i <= m; i++) {
  proizvod *= i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je: ${proizvod}`);

// VIII zadatak - Odrediti sumu kvadrata brojeva od n do m *
sumaK = 0;
for (i = n; i <= m; i++){
  sumaK += (i**2);
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je: ${sumaK}`);

// IX zadatak - Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
for(i = 1; i <= 3; i++){
  document.write(`<img src="${i}.jpeg" style="width: 250px; height: 200px; object-fit: cover;">`)
}

// X zadatak - Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
proizvod = 1;
let br = 0;
for (i = 20; i <= 100; i++){
  if (i % 11 == 0){
    proizvod *= i; 
  }
  else{
    br += 1;
  }
}
console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 je: ${proizvod}.`);
console.log(`U intervalu od 20 do 100 ima ${br} brojeva koji nisu deljivi sa 11.`);

// XI zadatak - Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let brojac = 0;
for (i = 5; i <= 150; i++) {
  if (i % 13 == 0) {
    brojac++;
  }
}
console.log(`${brojac} brojeva je deljivo sa 13 u intervalu od 5 do 150.`);

// XII zadatak - Ispisati aritmetičku sredinu brojeva od n do m.
n = 3;
m = 5;
let arsr = 0;
suma = 0;
brojac = 0;
for (i = 1; i <= m; i++){
  suma += i;
  brojac++
  arsr = suma/brojac
}
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je: ${arsr}`);
// XIII zadatak - Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *
n = -7;
m = 6;
let negativni = 0;
let pozitivni = 0;
for (i = n; i <=m; i++){
  if (i >= 0){
    pozitivni += 1;
  }
  else{
    negativni += 1;
  }
}
console.log(`Od ${n} do ${m} ima ${pozitivni} pozitivnih brojeva, ukljucujuci i 0.`);
console.log(`Od ${n} do ${m} ima ${negativni} negativnih brojeva.`);

// XIV zadatak - Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
brojac = 0;
for (i = 5; i <= 50; i++){
  if(i % 3 == 0 || i % 5 == 0){
    brojac += 1;
  }
}
console.log(brojac);

// XV zadatak - Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
n = 14;
m = 30;
suma = 0;
for (i = n; i <= m; i++){
  if(i % 10 == 4){
    suma += i;
  }
}
console.log(`Suma brojeva koji se zavrsavaju brojem 4 je: ${suma}`);

// XVI zadatak - Odrediti sumu brojeva od n do m koji nisu deljivi brojem a.
let a = 7;
suma = 0;
for (i = n; i <= m; i++){
  if (i % a == 0){
    suma += i;
  }
}
console.log(suma);
// XVII zadatak - Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 10;
m = 15;
a = 2;
brojac = 0;
for (i = n; i <= m; i++){
  if (i % a == 0){
    brojac += 1;
  }
}
console.log(brojac);

// XVIII zadatak - Odrediti sa koliko brojeva je deljiv uneti broj k.
let k = 6;
brojac = 0;
for (i = 1; i <= k; i++){
  if (k % i == 0){
    brojac++;
  }
}
console.log(`Broj ${k} ima ${brojac} delioca.`);

// XIX zadatak 
if (brojac <= 2){
  console.log(`Broj ${k} je prost broj`);
}
else {
  console.log(`Broj ${k} je slozen broj`);

}