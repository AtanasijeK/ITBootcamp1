// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 
let pozdrav = (i, p) => {
  console.log(`Zdravo ${i} ${p}`);
}

pozdrav("Atanasije", "Karadzic");


// Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
let zbir = (br1, br2) => {
  let suma = br1 + br2;
  return suma;
}

console.log(zbir(2, 3));


// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = br => {
  if (br % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(neparan (4));


// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (br1, br2) => {
  let maks;
  if (br1 > br2) {
    maks = br1;
  }
  else {
    maks = br2; 
  }
  return maks;
}

console.log(maks2(4, 3));

let maks4 = (br1, br2, br3, br4) => {
  let maks; 
  maks = maks2(maks2(br1, br2), maks2(br3, br4));
  return maks;
}

console.log(maks4(9, 17, 35, 154));


// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let prikazSlike = n => {
  document.write(`<img src = "${n}.jpeg">`)
}

console.log(prikazSlike("r1"));


// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let bojenje = b => {
  document.write(`<p style = "color: ${b}">YAMAHA R1</p>`);
}

bojenje("orangered");


// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

// XV zadatak - Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
// Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
let plata = (n, a, d) => {
  let ukupno = a; 
  for (i = 2; i <= n; i++) {
    a += d; 
    ukupno += a; 
  }
  return ukupno;
}

console.log(plata (5, 10000, 5000));

  
// XVI zadatak - Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

function sekunde(t, p, n) {
  let vremeCekanja = (p + n) - t;
 if(p > t || (p + n) == t || (p + n) < t) {
  console.log(`moze da krene odmah`);
 }
 else if((p + n) > t) {
  console.log(`moze da krene za ${vremeCekanja} sekundi`);
 }
}
sekunde(25, 20, 3);