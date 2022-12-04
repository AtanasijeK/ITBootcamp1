//Zadatak1
let x = 17; // sati
let y = 44; // minuti 
let odPonoci = x * 60 + y;
console.log(odPonoci);


//Zadatak2
console.log(Math.floor(odPonoci / 60)); // 17 sati
console.log(odPonoci % 60); // 44 minuta

let cena1;
let cena2; 
let novcanica; 
let kusur = novcanica - cena1 - cena2;

cena1 = 1250;
cena2 = 46;
novcanica = 2000;
console.log(kusur + "dinara");

//Zadatak4
let datum = new Date (); // datum je objekat koji sadrzi info o 
console.log(datum.getFullYear() + "/" + datum.getMonth)

let h = datum.getHours();
let m = datum.getMinutes();
console.log(h + ":" + m);
console.log(h * 60 + m);
