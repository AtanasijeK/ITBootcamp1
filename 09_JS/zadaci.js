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

//Zadatak3 
let ukupnaCenaRobe = 1399;
let novcanica2 = 2000; 
let kusur2 = novcanica2 - ukupnaCenaRobe;

console.log(kusur2);

//Zadatak5
/* let dan = datum.getDate();
let mesec = mesec.getMonth() + 1;
let godina = godina.getFullYear();
console.log(dan + "." + mesec + "." + godina);
console.log(godina + "/" + mesec + "/" + dan) */



//Zadatak6
// prva konverzija
let euri = 22; 
let srednjiKurs = 117.2986;
let dinari = euri * srednjiKurs;

console.log(dinari);
// druga konverija 
dinari = 13000
euri = dinari / srednjiKurs 
console.log(euri);


//Zadatak7

// prvi deo zadatka 
let brEura = 20;
let eD = 117.2986;
let dD = 111.57;

let dolari = brEura*eD/dD;
console.log(dolari);

// drugi deo zadatka 
let brDolara = 2;

brEura = brDolara*dD/eD;
console.log(brEura);

//Zadatak8

// C --> F
let c = 7;
let f = c * 1.8 + 32;

console.log(f);

// F --> C 
c = (f - 32) / 1.8;
console.log(c);

// C --> K 
let k = c + 273.15;
console.log(k);

// K --> C 
c = k - 273.15;
console.log(c);