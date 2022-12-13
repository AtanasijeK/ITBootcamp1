//Prioritet u logickim operatorima:
// 1. !
// 2. &&
// ||


// and - &&
// daje true iskljucivo ako su oba izraza tacna 
let a = 5;
let b = -6; 

if (a == 5 && b == 6) {
  console.log(`Karadzic`);
}

// or - ||
// ne daje true iskljucivo ako su oba slucaja netacna 
// daje true ukoliko je makar jedan izraz tacan 
if ( a == 5 || b == 6){
  console.log(`Atanasije`);
}


let c = 7; 
if (a == 5 && b == 6 && c == 7){
  console.log(`Atanasije Karadzic`);
}
else {
  console.log(`neki od uslova nije tacan`);
}


if(a == 5 || b == 6 || c == 7)
{
  console.log(`Makar jedan od uslova je tacan`);
}
else
{
  console.log(`ni jedan uslov nije tacan, tj. svi uslovi su netacni`);
}


if(c != 7) {
  console.log(`c je razlicito 7`);
}


if ( !(c == 7)) {
  console.log(`c je razlicito od 7`);
}

// XXI zadatak 
a = 6
b = 7
c = 4
if (a > b && a > c) {
  console.log(`Najveci broj je ${a}`);
}
else if (b > a && b > c) {
  console.log(`Najveci broj je ${b}`);
}
else {
  console.log(`Najveci broj je ${c}`);
}

// XXII zadatak 
let temp = -9;
if (temp < -15 || temp > 40) {
  console.log(`Ekstremna temperatura: ${temp} stepeni`);
}
else {
  console.log(`Temperatura je u granicama podnosljivog`);
}

//XXIII zadatak 
// let god = new Date();
let godina = 2002;

if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
  console.log(`godina ${godina}. je prestupna`);
}
else {
  console.log(`godina ${godina}. nije prestupna`);
}

//XXIV zadatak 
let dan = 4; 
let sat = 19; 

if (dan == 0 || dan == 6 ){
  //vikend
  if (sat >= 10 && sat < 18){
    console.log("vikend je i butik je trenutno otvoren");
    document.write('<img src="open.png">')
  }
  else{
    console.log("vikend je i butik je trenutno zatvoren");
    document.write('<img src="closed.png">')
  }
}
else{
  //radni dan
  if(sat >= 9 && sat < 20){
    console.log("dani dan je i butik je trenutno otvoren");
    document.write('<img src="open.png">')
  }
  else{
    console.log("radni dan je i butik je trenutno otvoren");
    document.write('<img src="closed.png">')
  }
}
