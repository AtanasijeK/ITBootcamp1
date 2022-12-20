// I zadatak - Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 
function pozdrav(ime, prezime){
  console.log(`zdravo ${ime} ${prezime}`);
}

pozdrav("Atanasije", "Karadzic");

// II zadatak - Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function matOperacije(br1, br2){
  zbir = br1 + br2;
}
matOperacije(3, 5);
console.log(zbir);

// III zadatak - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan. 
function provera(broj){
  if (broj % 2 == 0) {
    console.log("netacno");
  }
  else{
    console.log("tacno");
  }
}
provera(3);

// IV zadatak - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. 
function max2(br1, br2){
  if (br1 > br2){
    return veciBr = br1;
  }
  else {
    return veciBr = br2;
  }
}

let veci = max2(8, 8);
console.log(veci);

function max4 (br1, br2, br3, br4){
  return max2(max2(br1, br2), max2(br3, br4));
}

let najveci = max4(9, 10, 11, 4)
console.log(najveci);

// V zadatak - Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function photo (img) {
  document.write(`<img src="${img}.jpeg">`)
}
photo("r1m")

// VI zadatak - Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function color (boja) {
  document.write(`<p style="color:${boja};">Obojeni paragraf</p>`)
}
color("gray")

// VII zadatak - Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini? 
function sedmiDan(n) {
  if (n == 0) {
    console.log('Nedelja');
  }
  else if (n == 1) {
    console.log('Ponedeljak');
  }
  else if (n == 2) {
    console.log('Utorak');
  }
  else if (n == 3) {
    console.log('Sreda');
  }
  else if (n == 4) {
    console.log('Cetvrtak');
  }
  else if (n == 5) {
    console.log('Petak');
  }
  else if (n == 6) {
    console.log('Subota');
  }
  else if (n == 7) {
    console.log('Nedelja');
  }
}
sedmiDan(4)

// VIII zadatak - Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.Prebrojati koliko ima ovakvih brojeva od n do m.
let brBrojeva = 0; 
function deljivSaTri(n, m) {
  let i = 0;
  for (i = n; i <= m; i++){
    if (i % 3 == 0) {
      console.log(i);
      brBrojeva++;
      
    }
  }
}
deljivSaTri(1, 5);
console.log(brBrojeva);


// IX zadatak - Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
let suma = 0;
function sumiraj (n, m) {
  for (i = n; i <= m; i++) {
    suma += i;
  }
}

sumiraj(3, 4);
console.log(suma);

// X zadatak - Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
let proizvod = 1;
function mnozi (n, m) {
  for (i = n; i <= m; i++) {
    proizvod *= i; 
  }
}
mnozi(1, 3);
console.log(proizvod);

// XI zadatak - Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
let arsr = 0;
suma = 0;
brBrojeva = 0;
function asre(n, m) {
  for (i = n; i <= m; i++) {
    suma += i;
    brBrojeva++;
  }
  return arsr = suma / brBrojeva;
}

asre(1, 3);
console.log(arsr);

// XII zadatak - Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
arsr = 0;
suma = 0;
brBrojeva = 0;
function arisre(n, m) {
  for (i = n; i <= m; i++) {
    if (i % 10 == 3) {
      suma += i;
      brBrojeva++;
    }
  }
  return arsr = suma / brBrojeva;
}

arisre(2, 24);
console.log(arsr);

// XIII zadatak - Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function tekst (velicina) {
  document.write(`<p style="font-size: ${velicina}px;">Ovom tekstu cemo menjati velicinu fonta.</p>`)
}
tekst(25);

// XIV zadatak - Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
function recenica(rec) {
  for (i = 30; i <= 35; i++) { 
    document.write(`<p style="font-size: ${i}px">${rec}</p>`)
  }
}
recenica("ovde se isto menja velicina")