// WHILE petlja - VEZBANJE

// I zadatak 
let i = 1;
let poruka = "";
while(i <= 20){
  poruka += i + " "
  i++
}
console.log(poruka);

i = 20;
while (i <= 40){
  console.log(i);
  i ++;
}

// II zadatak 
i = 20;
while (i >= 1){
  console.log(i);
  i--;
}

// III zadatak 
i = 1;
while (i <= 20){
  if (i % 2 == 0){
    console.log(i);
  }
  i++;
}

// IV zadatak 
i = 1; 
let n = 8;
while (i <= n){
  if (i % 3 == 0){
    document.write("<p style='color: orangered'>Narandzastocrveni tekst</p>")
  }
  else if (i % 3 == 1){
    document.write("<p style='color: orange'>Narandzasti tekst</p>")
  }
  else {
    document.write("<p style='color: olive'>Maslinasti tekst</p>")
  }
  i++
}

// V zadatak 
/*i = 1;
n = 6;
while(i <= n){
  if(i % 2 == 0){
    document.write('<img src="../nyc.webp" style="width=100" border="2 solid black"/>')
  }
  else {
    document.write('<img src="../nyc.webp" style="width=100" border="2 solid green"/>')
  }
  i++
}
*/

// VI zadatak 
i = 1;
let suma = 0;
while(i <= 100){
  suma += i; 
  i++;
}
console.log(`Suma brojeva od 1 do 100 je: ${suma}`);

// VII zadatak 
i = 1;
n = 4;
suma = 0;
while(i <= n){
  suma += i; 
  i++;
}
console.log(`Suma brojeva od 1 do ${n} je: ${suma}`);

// VIII zadatak 
n = 8;
m = 10;
i = n;
suma = 0;
while (i <= m) {
  suma += i; 
  i ++;
}
console.log(`Suma brojeva od ${n} do ${m} je: ${suma}`);

// IX zadatak 
n = 4;
m = 6;
i = n;
let proizvod = 1;
while (i <= m) {
  proizvod *= i;
  i++
}
console.log(`Proizvod brojeva od ${n} do ${m} je: ${proizvod}`);

// X zadatak 
n = 1;
m = 10;
i = n;
suma = 0;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
while (i <= m) {
  if (i % 2 == 0){
    sumaKvadrataParnih += i**2;
  }
  else{
    sumaKubovaNeparnih += i**3;
  }
  i++;
  suma = sumaKvadrataParnih + sumaKubovaNeparnih;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} je: ${sumaKvadrataParnih}`);
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} je: ${sumaKubovaNeparnih}`);
console.log(`Suma ovog cuspajza je: ${suma}`);

// XI zadatak 
i = 1;
let k = 12; 
let brojDelioca = 0;
while (i <= k) {
  if (k % i == 0){
    brojDelioca += 1; 
  }
  i++;
}
console.log(`Ukupan broj kojima moze da se podeli broj ${k} je: ${brojDelioca}`);

// XII zadatak 
i = 1;
k = 15;
brojDelioca = 0;
while (i <= k){
  if (k % i == 0){
    brojDelioca += 1;
  }
  i++;
}
if (brojDelioca == 2) {
  console.log(`Broj ${k} je prost broj`);
}
else {
  console.log(`Broj ${k} je slozen broj`);
}

// IF grananje 

let a = -2;
let b;
if (a >= -2 && a < 2) {
  console.log(b = a*a);
}
else{
  console.log(Math.sqrt(a + 8));
}

a = 0;
b = -2; 
let min; 

if (a < b) {
  console.log(min = a);
}
else {
  console.log(min = b); 
}

// 24 zadatak
a = 10;
b = 15;
let c = 2;
let d = 8;
let deljivSa2 = 0;
let deljivSa5 = 0;
let deljivSaOba = 0;

if(a % 2 == 0){
  deljivSa2 += 1;
}
if(b % 2 == 0){
  deljivSa2 += 1;
}
if(c % 2 == 0){
  deljivSa2 += 1;
}
if(d % 2 == 0){
  deljivSa2 += 1;
}
console.log(`${deljivSa2} broja su deljiva sa brojem 2!`);

if(a % 5 == 0){
  deljivSa5 += 1;
}
if(b % 5 == 0){
  deljivSa5 += 1;
}
if(c % 5 == 0){
  deljivSa5 += 1;
}
if(d % 5 == 0){
  deljivSa5 += 1;
}
console.log(`${deljivSa5} broja su deljiva sa brojem 5!`);

// CASE, ali radimo sa IF-om 

a = 5;
if (a == 5) {
  console.log(`petica`);
}
else if (a == 6){
  console.log(`sestica`);
}
else if (a == 7){
  console.log(`sedmica`);
}

// XXVI zadatak 
a = 17;
b = 5; 
c = 9;
let zbir = 0;
let zbirSvih = 0;
min = 0;

zbirSvih = a + b + c; 
min = a; 

if (min > b){
  min = b; 
}
else if (min > c){
  min = c;
}
zbir = zbirSvih - min;
console.log(`zbir dva najveca broja je: ${zbir}`);

// XXV 
x = 2;
y = 1;
z = 1;
let zbirXY = 0;
let zbirXZ = 0;
let zborYZ = 0;

zbirXY = x + y;
zbirXZ = x + z;
zbirYZ = y + z;

if (x == zbirYZ){
  console.log(`Zbir borjeva ${y} i ${z} je: ${zbirYZ}`);
}
else if (y == zbirXZ){
  console.log(`Zbir borjeva ${x} i ${z} je: ${zbirXZ}`);
}
else if (z == zbirXY){
  console.log(`Zbir borjeva ${x} i ${y} je: ${zbirXY}`);
}
else{
  console.log(`Ni jedan broj nije jednak zbiru druga dva broja!`);
}