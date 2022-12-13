//Zadatak1
/*
  let a = 3;
  let b = 5;
  let c = 4;
  let z = a + b + c;
  let p = a * b * c;
  let s = p / 3;

  console.log("Zbir ovih vrednosti je:",  z);
  console.log("Proizvod ovih vrednosti je:",  p);
  console.log("Aritmeticka sredina ovih vrednosti je:",  s);
*/

//Zadatak2

/*
  let z = 1;
  let r = 1;
  let t = Math.sqrt(Math.pow(z,2) + Math.pow(r,2));

  console.log(`hipotenuza je: ${t}`);
*/

/*
  const date = new Date();
  console.log(date);

  let dan = getDate();
  let mesec = getMonth() + 1;
  let godina = getFullYear();
  console.log(dan, mesec, godina);
*/

/* 
  let z = 510;

  if (z > 100) 
  {
    document.getElementById("tacan").innerHTML="Throw away"
  }
  else
  {
    document.getElementById("netacan").innerHTML="Pack up"
  }

  let t = -476;

  if (t>=0)
  {
    document.getElementById("plus").innerHTML="Temperatura u plusu je " + t;
  }
  else
  {
    document.getElementById("minus").innerHTML="Temperatura u minusu je " + t;
  }
*/

/*
  let date = new Date();
  let dan = date.getDate();
  let mesec = date.getMonth() + 1;
  let godina = date.getFullYear();

  console.log(dan, mesec, godina)


  function myFunction(input_muski) {
    document.getElementById("m").style.display = "block"
  }
  function myFunction1(input_zenski) {
    document.getElementById("z").style.display = "block"
  }

  let vreme = new Date();
  let sati = vreme.getHours();
  let minuti = vreme.getMinutes();

  console.log(sati,minuti);

  if (sati < 12)
  {
    document.getElementById("s").innerHTML = "pladne"
  }

  else 
  {
    document.getElementById("p").innerHTML = "sabajle"
  }
*/

// XV Zadatak
let br = 144;
if(br <= 0) 
{
  console.log(br + 1);
}
else
{
  console.log(br + 1);
}

// ZADACI ZA VEZBANJE 
// IV
if (br > 0){
  console.log(Math.sqrt(br));
}
else
{
  console.log("Nema realnog resenja");
}

// V 
let a = 9;
let b = 9; 

if (a == b)
{
  console.log(a*b*Math.sqrt(3)/4);
}
else
{
  console.log(a*b);
}

// VII
let x = 50;
let y = 0;
if (y > 0)
{
  console.log(x/y);
}
else 
{
  console.log("Deljenje je nemoguce!");
}

// VIII
x = -3/2;
if (x != -3/2){
  console.log(y = 1 / (2*x+3));
}
else if(x = -3/2) {
  console.log("0");
}

// IX
let alfa = 90;
let beta = 60;
let gama = 30;
let trougao = alfa + beta + gama
console.log(trougao);

if(trougao == 180){
  console.log("mogu");
}
else {
  console.log("ne mogu");
}

// X 
a = 29;
b = 2;
let ost = a % b
if (ost == 0)
{
  console.log("jeste deljiv");
}
else 
{
  console.log("nije deljiv");
}

// GRANANJE 
// VII 
let brPoena = 89;

if (brPoena > 90){
  console.log("Ocena: 10");
}
else if (brPoena > 80){
  console.log("Ocena: 9");
}
else if (brPoena > 70){
  console.log("Ocena: 8");
}
else if (brPoena > 60){
  console.log("Ocena: 7");
}
else if (brPoena > 50){
  console.log("Ocena: 6");
}
else {
  console.log("Ispit nije polozen");
}

// VIII
let d = new Date();
let dan = d.getDay;

if(dan == 0) {
  console.log("U pitanju je vikend");
}
else if(dan == 6) {
  console.log("U pitanju je vikend");
}
else{
  console.log("U pitanju je radni dan");
}

// I zadatak domaci Pera i Mika 

let p = 2000;
let m = 500; 
let k = 2000; 

let c = (p + m -k) / 2;
let k1 = p - c;
let k2 = m - c;
console.log(`cena dzempera je: ${c}`);
console.log(`kusur za Peru: ${k1}`);
console.log(`kusur za Miku: ${k2}`);

//