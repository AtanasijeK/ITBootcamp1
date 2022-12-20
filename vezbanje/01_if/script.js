// I zadatak - Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.
let v = 150;
if (v > 100){
  document.write(`<p>Throw away</p>`)
}
else {
  document.write(`<p>Pack up</p>`)
}

// II zadatak - Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.
let t = 40;
if (t >= 40){
  document.write(`<p style="color: orangered;">Temperatura je u plusu i ekstremna je.</p>`)
}
else if(t >= 0){
  document.write(`<p style="color: red;">Temperatura je u plusu.</p>`)
} 
else if (t <= -20){
  document.write(`<p style="color: purple;">Temperatura je u minusu i ekstremna je.</p>`)

}
else{
  document.write(`<p style="color: blue;">Temperatura je u minusu.</p>`)
}

// III zadatak - U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). 
let pol = "musko";
if (pol == "musko"){
  document.write(`<img style="width: 250px" src="../decak.jpeg">`)
}

else if (pol == "zensko") {
  document.write(`<img style="width: 250px" src="../devojcica.jpeg">`)
}

// IV zadatak - U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne. Popodne je kada prođe 12:00 sati, ne računajući i to vreme.
let vreme = new Date()
let sati = vreme.getHours()
let minuti = vreme.getMinutes()
console.log(sati, minuti);
if(sati > 12) {
  console.log(`Trenutno je prepodne`);
}
else{
  console.log(`Trenutno je popodne`);
}

// V zadatak - Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.
let god = new Date();
let trGodina = god.getFullYear();
let godiste = 2016;

let godine = trGodina - godiste;
if(godine >= 18){
  console.log(`Osoba je punoletna jer ima ${godine} godina!`);
}
else {
  console.log(`Osoba je maloletna jer ima ${godine} godina!`);
}

// VI zadatak - Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
let a = -10;
let b = -1; 
let c = -15;
let max = a;

if(max < b){
  max = b;
  if(max < c){
    max = c;
  }
}
else if (max < c){
  max = c;
}
console.log(`Najveci broj je ${max}`);

// VII zadatak - Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let d = new Date();
let dan = d.getDay();

if (dan == 0){
  console.log('Vikend, nedelja');
}
else if (dan == 6){
  console.log('Vikend, subota');
}
else{
  if ( dan == 1){
    console.log('Radni dan, ponedeljak');
  }
  else if( dan == 2){
    console.log('Radni dan, utorak');
  }
  else if( dan == 3){
    console.log('Radni dan, sreda');
  }
  else if( dan == 4){
    console.log('Radni dan, cetvrtak');
  }
  else {
    console.log('Radni dan, petak');
  }
}

// VIII zadatak - Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.
let brBodova = 50.1;

if (brBodova > 90){
  console.log(`Ispit je polozen, ocena 10`);
}
else if (brBodova > 80){
  console.log(`Ispit je polozen, ocena 9`);
}
else if (brBodova > 70){
  console.log(`Ispit je polozen, ocena 8`);
}
else if (brBodova > 60){
  console.log(`Ispit je polozen, ocena 7`);
}
else if (brBodova > 50){
  console.log(`Ispit je polozen, ocena 6`);
}
else {
  console.log(`ISPIT NIJE POLOZEN!`);
}

// IX zadatak - Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati, u ostalim slučajevima ispisati dobro veče.

sati = 13;
if (sati < 12){
  console.log(`Dobro jutro`);
}
else if (sati > 18){
  console.log(`Dobro vece`);
}
else{
  console.log(`Dobar dan`);
}

// X zadatak - Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
sati = 9 
if (sati < 9 ){
  console.log(`Firma je zatvorena`);
}
else if (sati >= 17) {
  console.log(`Firma je zatvorena`);
}
else {
  console.log(`Firma je otvorena`);
}

// XI zadatak - 

// XIV zadatak - Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
a = 12;
b = 4; 
if (a > b){
  console.log(a - b);
}
else{
  console.log(b - a);
}

// XVI zadatak - Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.
a = 7;
b = 9;
c = 8;
max = a;
if (max < b){
  max = b; 
  if(max < c){
    max = c;
  }
}
else if (max < c){
  max = c;
}
console.log(`maksimum je ${max}`);

min = a; 
if(min > b){
  min = b;
  if(min > c){
    min = c;
  }
}
else if (min > c){
  min = c; 
}
console.log(`minimum je ${min}`);

let srBroj = a + b + c - max - min;
console.log(`srednji broj je ${srBroj}`);

// XVII zadatak - Za učitani broj ispitati da li je ceo.
a = 10.1; 

console.log(Number.isInteger(a));

// XXIV zadatak - Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren. U suprotnom ispisati “zatvoreno”.

sati = 14;
dan = 3;
if (dan == 0 || dan == 6){
  if (sati < 10){
    console.log(`Vikend je i butik je zatvoren`);
    document.write(`<img src="close.jpeg" width: 200px>`)
  }
  else if (sati >= 18){
    console.log(`Vikend je i butik je zatvoren`);
    document.write(`<img src="close.jpeg" width: 200px>`)
  }
  else {
    console.log(`Vikend je i butik je otvoren`);
    document.write(`<img src="open.webp" width: 200px>`)
  }
}
else {
  if (sati < 9){
    console.log(`Radni dan je i butik je zatvoren`);
    document.write(`<img src="close.jpeg" width: 200px>`)
  }
  else if (sati >= 20){
    console.log(`Radni dan je i butik je zatvoren`);
    document.write(`<img src="close.jpeg" width: 200px>`)
  }
  else {
    console.log(`Radni dan je i butik je otvoren`);
    document.write(`<img src="open.webp" width: 200px>`)

  }
}

// Koliko neparnih brojeva ucestvuje u sumiranju dok suma ne predje broj k?

let k = 24;
let brojNeparnih = 0;
let sumaK = 0;
i = 1;
while (sumaK <= k){
  if(i % 2 != 0){
    sumaK += i;
    brojNeparnih++
  }
i++;
}
console.log(`${brojNeparnih}`);