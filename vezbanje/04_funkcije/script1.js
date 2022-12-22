// I zadatak - Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.  
function pozdrav (i, p) {
  console.log("Zdravo", i, p);
}

pozdrav("Atanasije", "Karadzic");


// II zadatak - Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function zbir (br1, br2) {
  let z = br1 + br2;
  console.log(z);
}

zbir(1, -3);


// III zadatak - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = n => (n % 2 != 0)? true : false;

console.log(neparan (3));


// IV zadatak - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function maks2 (br1, br2) {
  let max
  if (br1 > br2) {
    max = br1;
  }
  else {
    max = br2;
  }
  return max;
}

console.log(maks2(3, 2));


function maks4 (br1, br2, br3, br4) {
  max4 = maks2(maks2(br1, br2), maks2(br3, br4));
  return max4;
}

console.log(maks4(7, 8, 9, 14));


// V zadatak - Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika (ss) {
  document.write(`<img src="${ss}.jpeg">`)
}

slika("r1");


// VI zadatak - Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function boja (b) {
  document.write(`<p style = "color: ${b}">instagram: @karadzic.mladic</p>`)
}

boja("gray");


// VII zadatak - Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
function sedmiDan (n) {
  if (n == 0 || n == 7) {
    console.log("Nedelja");
  }
  else if (n == 1) {
    console.log("Ponedeljak");
  }
  else if (n == 2) {
    console.log("Utorak");
  }
  else if (n == 3) {
    console.log("Sreda");
  }
  else if (n == 4) {
    console.log("Cetvrtak");
  }
  else if (n == 5) {
    console.log("Petak");
  }
  else if (n == 6) {
    console.log("Subota");
  }
}

sedmiDan(3);


// VIII zadatak - Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri (n, m) {
  let brBrojeva = 0;
  for (let i = n; i <= m; i++) {
    if (i % 3 == 0) {
      brBrojeva++;
      console.log(i);
    }
  }
  return brBrojeva
}

console.log(deljivSaTri(1, 5));


// IX zadatak - Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function sumiraj (n, m) {
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumiraj(11, 13));


// X zadatak - Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function mnozi (n, m) {
  let proizvod = 1;
  for (i = n; i <= m; i++) {
    proizvod *= i;
  }
  return proizvod;
}

console.log(mnozi(1, 3));


// XI zadatak - Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function arsr (n, m) {
  let suma = 0;
  let brBrojeva = 0;
  let as = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
    brBrojeva++
    as = suma / brBrojeva;
  }
  return as;
}

console.log(arsr(4, 6));


// XII zadatak - Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
function asre (n, m) {
  let suma = 0;
  let brBrojeva = 0;
  let as = 0;
  for (let i = n; i <= m; i++) {
    if(i % 10 == 3) {
      suma += i;
      brBrojeva++
      as = suma / brBrojeva;
    }
  }
  return as; 
}

console.log(asre(12, 24));


// XIII zadatak - Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
let velicinaFonta = n => {
  document.write (`<p style="font-size: ${n}px">Atanasije Karadzic od oca Petra i majke Nevenke.</p>`)
}

velicinaFonta(22)


// XIV zadatak - Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
let petIstih = n => {
  for (i = n; i <= n + 5; i++){
    document.write(`<p style="font-size: ${i}px">deda Svetislav baba Slobodanka.</p>`)
  }
}

petIstih(20); 


// XV zadatak - Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami. Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu. Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
let plata = (n, a, d) => {
  let ukupno = a;
  for (let i = 2; i <= n; i++) {
    a += d;
    ukupno += a;
  }
  return ukupno;
}

console.log(plata(5, 10000, 5000));


// XVI zadatak - Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s 

