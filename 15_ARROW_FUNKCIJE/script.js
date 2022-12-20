//Imenovane funkcije: (function), ime {parametri}, {return}
function sum(a,b)  
{
  return a + b; 
}

let rez = sum (3, 5);
console.log(rez);

// Anonimne funkcije: (function), {parametri}, {return}
let suma = function(a, b){
  return a + b; 
}

rez = suma (1,2);
console.log(rez);

// Arrow funkcija: (Anonimne f-je sa skracenim zapisom)
                  //  {parametri}, =>, {return}
let suma2 = (a, b) => {
  return a + b;
}

rez = suma2(5,6);
console.log(rez);

let hello = () => {
  console.log("Hello world!");
}

hello();

let echo = (s1, s2) => {
  let rezultat = s1 + "." + s2;
  console.log(rezultat);
}

echo("karadzic", "mladic")


let fullName = (s1, s2, god) => {
  if (god >= 18) {
    console.log(`Osoba ${s1} ${s2} je punoletna`);
  }
  else {
    console.log(`Osoba ${s1} ${s2} je maloletna`); 
  }
}

fullName("Atanasije", "Karadzic", 36)

let ispisHTML = (ime, prezime, godine) => {
  if(godine >= 18) {
    let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
    return ispis;
  }
  else{
    let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
    return ispis;
  }
}

document.body.innerHTML += ispisHTML("Cak", "Noris", 67);
document.body.innerHTML += ispisHTML("Lepa", "Brena", 15)

// III zadatak - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = (n) => {
  if (n % 2 != 0) {
    return true;
  }
  else{
    return false;
    
  }
}

console.log(neparan(4));
console.log(neparan(3));

// drugavarijanta 
let neparan2 = (n) => {
  return(n % 2 == 1);
} 


// trecavarijanta 
// 1) Ako arrow f-ji prosledjujemo TACNO JEDAN parametar onda zagrade nisu obavezne!
// 2) Ako telo arrow f-je sastoji SAMO od RETURN naredbe ona nije obavezna!

let neparan3 = n => (n % 2 == 1);

console.log(neparan3(9));
console.log(neparan3(2));

// IV zadatak - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let max2 = (br1, br2) => {
  if(br1 > br2){
    return br1;
  }
  else{
    return br2;
  }
}

veci = max2(9, 7);
console.log(veci);

let max4 = (br1, br2, br3, br4) => {
  return veci = max2(max2(br1, br2), max2(br3, br4));
}

najveci = max4(11,8,9,14);
console.log(najveci);

// II nacin 
let maks2 = (a,b) => {
  if (a>b) {
    return a;
  }
  else{
    return b;
  }
}

console.log(maks2(10,9));

// II;1 
let maks21 = (a, b) => (a > b) ? a : b; 
// __ ? __ : __ - ternarni operator (prihvata 3 parametra)

console.log(maks21(61, 6));

// Maksimum 4 broja 
let maks4 = (a, b, c, d) => maks21(maks21(a,b),maks21(c,d));

let maks4a = (a, b, c, d) => maks21(maks21(maks21(a, b), c), d);

console.log(maks4(1,2,3,44));
console.log(maks4a(1,233,3,44));

// V zadatak - Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = (img) => {
  document.write(`<img src="${img}.jpeg">`);
}

slika("aventador"); 




// VI zadatak - Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
/*let boja = (color) => {

}*/