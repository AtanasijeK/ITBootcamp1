import Film from "./film.js";

let f1 = new Film ("Terminator", "James Cameron", 1984, [10, 4, 2, 4, 8, 9]);
let f2 = new Film ("Gospodar Prstenova", "Peter Jackson", 2001, [10, 5, 6, 8, 7]); 
let f3 = new Film ("", "", 5, [4, 1, 2, 4, 3, 2]);

f1.stampaj();
f2.stampaj();
f3.stampaj();

let filmovi = [f1, f2, f3];

console.log(f3.ocene);
console.log(`Prosecna ocena ${f1.naslov} filma je: ${f1.prosek()}`);


// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku.
let vekFilmova = (niz, vek) => {
  let pocetnaGod = (vek - 1) * 100 + 1;
  let krajnjaGod = vek * 100;
  
  niz.forEach(film => {
    if(film.godinaIzdanja >= pocetnaGod && film.godinaIzdanja <= krajnjaGod) {
      console.log(film.naslov);
    }
  });
}

vekFilmova(filmovi, 21);


// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = niz => {
  let sum = 0;
  let brOcena = 0;
  niz.forEach(ocene => {
    ocene.ocene.forEach(o => {
      sum += o;
      brOcena ++;
    });
  });
  return sum / brOcena;
}

console.log(prosecnaOcena(filmovi)); 


// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = niz => {
  let avgSvihFilmova = prosecnaOcena(niz);
  let minRastojanje = Math.abs(avgSvihFilmova - niz[0].prosek());
  let minFilm = niz[0];

  niz.forEach(f => {
    console.log(f.prosek());
    let rastojanje = Math.abs(avgSvihFilmova - f.prosek());
    if (minRastojanje > rastojanje) {
      minRastojanje = rastojanje;
      minFilm = f; 
    }
  });

  return minFilm;
}

console.log(osrednjiFilm(filmovi));


// Najbolje ocenjeni film 
let najboljeOcenjeni = (niz) => {
  let naj = niz[0];
  niz.forEach((f) => {
    if (naj.prosek() < f.prosek()) {
      naj = f;
    }
  });
  return naj;
};
console.log(najboljeOcenjeni(filmovi));


// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = niz => {
  let najFilm = najboljeOcenjeni(niz);
  let najslabijaOcena = najFilm.ocene[0];
  najFilm.ocene.forEach(o => {
    if(najslabijaOcena > o) {
      najslabijaOcena = o;
    }
  });
  console.log(najslabijaOcena);
}

najmanjaOcenaNajboljeg(filmovi);


// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = niz => {
  // Ovo mozemo da razlozimo na sledeci nacin;
  /*
    let prviObjekat = niz[0]; //Ovo je objekat 
    let nizOcenaPrvogObjekta = prviObjekat.ocene; // Ovo je niz ocena selektovanog objekta 
    let najmanja = nizOcenaPrvogObjekta[0]; //Ovo je prva ocena iz niza ocena
  */ 
  let najmanja = niz[0].ocene[0];
  niz.forEach(film => {
    film.ocene.forEach(o => {
      if (najmanja > o) {
        najmanja = o;
      }
    });
  });
  return najmanja;
}

console.log(najmanjaOcena(filmovi));


// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
// let brojac = [];
// let najcescaOcena = (niz, b) => {
//   let brojac1 = 0;
//   let brojac2 = 0;
//   let brojac3 = 0;
//   let brojac4 = 0;
//   let brojac5 = 0;
//   let brojac6 = 0;
//   let brojac7 = 0;
//   let brojac8 = 0;
//   let brojac9 = 0;
//   let brojac10 = 0;
//   niz.forEach(film => {
//     film.ocene.forEach(o => {
//       if(o == 1) {
//         brojac1++;
//         brojac.push(brojac1);
//         console.log(brojac1);
//       }
//       else if(o == 2) {
//         brojac2++;
//         brojac.push(brojac2);
//         console.log(brojac2);
//       }
//       else if(o == 3) {
//         brojac3++;
//         brojac.push(brojac3);
//       }
//       else if(o == 4) {
//         brojac4++;
//         brojac.push(brojac4);
//       }
//       else if(o == 5) {
//         brojac5++;
//         brojac.push(brojac5);
//       }
//       else if(o == 6) {
//         brojac6++;
//         brojac.push(brojac6);
//       }
//       else if(o == 7) {
//         brojac7++;
//         brojac.push(brojac7);
//       }
//       else if(o == 8) {
//         brojac8++;
//         brojac.push(brojac8);
//       }
//       else if(o == 9) {
//         brojac9++;
//         brojac.push(brojac9);
//       }
//       else if(o == 10) {
//         brojac10++;
//         brojac.push(brojac10);
//       }
//     });
//   });
//   let najOcena = brojac[0];
//   b.forEach(broj => {
//     if(najOcena < broj) {
//       najOcena = broj;
//     }
//   });
//   return najOcena;
// }

// console.log(najcescaOcena(filmovi, brojac));


let sveOcene = niz => {
  let arrSveOcene = [];
  niz.forEach(film => {
    // arrSveOcene.push(film.ocene);
    arrSveOcene = arrSveOcene.concat(film.ocene)
  });
  return arrSveOcene;

  // arrSveOcene.push(f1.ocene);
  // arrSveOcene = arrSveOcene.concat(f1.ocene);
}

console.log(sveOcene(filmovi));

let najcescaOcena = nizOcena => {
  let pretpostavkaNajucestalijiElem = nizOcena[0];
  let brPojavljivaljaPretpostavke = 1;

  for (let i = 0; i < nizOcena.length; i++) {
    let tekuci = nizOcena[i]; 
    let tekuciBrPojavljivanja = 0;
    for (let j = 0; j < nizOcena.length; j++) {
      if (tekuci == nizOcena[j]) {
        tekuciBrPojavljivanja++;
      }
    }
    if(tekuciBrPojavljivanja > brPojavljivaljaPretpostavke) {
      brPojavljivaljaPretpostavke = tekuciBrPojavljivanja;
      pretpostavkaNajucestalijiElem = tekuci;
    }
  }

  return pretpostavkaNajucestalijiElem;
}

let nizSvihOcena = sveOcene(filmovi);
console.log(najcescaOcena(nizSvihOcena));


// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
let iznadOcene = (ocena, filmovi) => {
  let nizFilmova = [];
  filmovi.forEach(film => {
    if(film.prosek() > ocena) {
      nizFilmova.push(film);
    }
  });
  return nizFilmova;
}

console.log(iznadOcene(6.5, filmovi));


// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
let iznadOceneNoviji = (ocena, filmovi) => {
  let nizFilmova = iznadOcene(ocena, filmovi);
  let noviji = nizFilmova[0];
  nizFilmova.forEach(f => {
    if(f.godinaIzdanja > noviji.godinaIzdanja) {
      noviji = f;
    }
  });
  console.log(noviji);
}

iznadOceneNoviji(5.5, filmovi);