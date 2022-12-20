console.log(`Funkcije`);

function zdravo () {
  console.log(`Zdravo!`);
}
zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for(i = 1; i <=5; i++){
  zdravo(); //Poziva funkciju onoliko puta koliko se izvrsi for petlja
}

////////////////////////////////////////////////////////////////

function hello(name) {
  console.log(`Hello ${name}`);
}
hello("Atanasije");
hello("Karadzic");

////////////////////////////////////////////////////////////////

function helloFullName(ime, prezime) {
  console.log(`Hello ${ime} ${prezime}`);
}
helloFullName("Atanasije","Karadzic");

let ii = "Milic"
let p = "Vukasinovic"
helloFullName(ii, p)

////////////////////////////////////////////////////////////////

// II zadatak - Napisati funkciju zbir koja računa zbir dva realna broja.

function zbir (br1, br2) {
  console.log(`Zbir brojeva ${br1} i ${br2} je: ${br1 + br2}`);
}

zbir(15, 10)

// V zadatak - Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(adresa) {
  document.write(`<img src="${adresa}"`);
}

slika("../vezbanje/french.jpeg");

// VI zadatak 

function bojiParagraf(boja) {
  document.write(`<p style="color:${boja};">obojeni tekst</p>`);
}
bojiParagraf("red")

// XIII zadatak - Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function velicinaFonta (brojF){
  document.write(`<p style="font-size:${brojF}px;">ATANASIJE KARADZIC</p>`);
}
velicinaFonta("23");

// XIV zadatak - Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
function iteracija(font){
  for (i = 0; i <= 4; i++){
    document.write(`<p style="font-size: ${i + font}px;">KaradzicMladic</p>`)
  }
}
iteracija(23);

// III zadatak - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
  if (n % 2 == 0){
    return "Paran broj";
  }
  else {
    return "Neparan broj";
  }
}
let tekst = neparan(11);
console.log(tekst);

// IV zadatak - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function max2 (br1, br2) {
  if (br1 > br2) {
    return br1;
  }
  else {
    return br2;
  }
}

let m1 = max2(13, 6);
console.log(`Veci je broj ${m1}`);

/*function max4 (br1, br2, br3, br4){
  let max = br1;
  if (max < br2){
    max = br2; 
    if (max < br3){
      max = br3;
      if (max < br4 ) {
        max = br4;
      }
    }
  }
  else{
    max = b2;
      if (br2 < br3){
        max = br3; 
        if (max < br4){
          max = br4;
        }
      }
      else {
        max = br3;
        if (max < br4) {
          max = br4;
          return max;
        }
      }
  }
}*/

function max4(br1, br2, br3, br4){
  // let veci1 = max2(br1, br2);
  // let veci2 = max2(br3, br4);
  // let najveci = max2(veci1, veci2);
  // return najveci;
  
  return max2(max2(br1, br2),max2(br3, br4));
}

let naj = max4(14, 2, 13, 5);
console.log(naj);