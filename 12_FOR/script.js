// I zadatak - Ispisati brojeve od 1 do 20.

// while petlja
let w = 1;
while (w <= 20) {
  console.log(w);
  w++;
} 

// for petlja
for (i = 1; i <= 20; i++){
  console.log(i);
}

// II zadatak - Ispisati brojeve od 20 do 1.
for(i = 20; i >= 1; i--){
  console.log(i);
}

// III zadatak - Ispisati parne brojeve od 1 do 20.
// I nacin
for(i = 2; i <= 20; i += 2){
  console.log(i);
}

// II nacin 
for(i = 1; i <= 20; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

// IV zadatak - Ispisati dvostruku vrednost brojeva od 5 do 15.
/*for (i = 5; i <= 15; ) */

// V zadatak - Odrediti sumu brojeva od 1 do n.
let s = 0;
let n = 5;
for (i = 1; i <= n; i++){
  s += i;
}
console.log(`Suma je ${s}`);

// VII - Odrediti proizvod brojeva od n do m
let proizvod = 1;
n = 1; 
let m = 5;
for (i = n; i <= m; i++){
  proizvod *= i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je: ${proizvod}`);

// IX - Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora). 
for(i = 1; i <= 3; i++){
  document.write(`<img src="${i}.png">`)
}

// Ispisati prvih n parnih brojeva pocevsi od broja 2.
n = 3;
i = 2;
let brParnih = 0;
while (brParnih < n) {
  if (i % 2 == 0) {
    brParnih++;
    console.log(`${brParnih}. od ${n} parnih je broj ${i}`);
  }
  i++;
}

// Koliko brojeva ucestvuje u sumiranju dok suma ne predje broj k. 
let k = 15;
i = 1; 
suma = 0;
let brBrojeva = 0;
while (suma < k){
  suma += i;
  brBrojeva++;
  i++;
}
console.log(`ukupan broj brojeva za sumiranje broja ${k} je: ${brBrojeva}`);

// XI zadatak - Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let deljiv13 = 0;
for(b = 5; b <= 150; b++){
  if(b % 13 == 0){
    deljiv13++;
  }
}
console.log(`U intervalu od 5 do 150 ima ${deljiv13} brojeva koji su deljivi sa 13`);

// XII zadatak - Ispisati aritmetičku sredinu brojeva od n do m.
n = 10;
m = 14; 
let zbir = 0;
brBrojeva = 0;

for(i = n; i <= m; i++){
  zbir += i;
  brBrojeva++;
}
let arsr = zbir / brBrojeva
console.log(`Aritmeticka sredina je: ${arsr}`);

// XV zadatak - Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
n = 13;
m = 35;
brBrojeva = 0;
suma = 0;
for(i = n; i <= m; i++){
  if(i % 10 == 4){
    brBrojeva++;
    suma += i;
  }
}
console.log(`Suma brojeva koji se zavrsavaju brojem 4 je: ${suma}, a njih ima od ${n} do ${m} tacno ${brBrojeva}`);

// XVI zadatak - Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 1;
m = 5;
let a = 3;
suma = 0;
for (i = n; i <= m; i++){
  if(i % a != 0){
    suma += i;
  }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi sa ${a} je: ${suma}`);

// XVIII zadatak - Odrediti sa koliko brojeva je deljiv uneti broj k.
k = 24;
brBrojeva = 0;
for (i = 1; i <=k; i++){
  if(k % i == 0){
    brBrojeva++;
  }
}
console.log(`Broj ${k} je deljiv sa ${brBrojeva} brojeva!`);