// Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).

let student1 = {
  ime: "Atanasije",
  prezime: "Karadzic",
  godina: 4,
  ocene: [7, 6, 7, 6],
};

let student2 = {
  ime: "Aleksandra",
  prezime: "Karadzic",
  godina: 5,
  ocene: [10, 10, 10, 10],
};

let student3 = {
  ime: "Jelena",
  prezime: "Milenkovic",
  godina: 2,
  ocene: [10, 10, 9, 10, 10],
};

let student4 = {
  ime: "Tijana",
  prezime: "Milenkovic",
  godina: 1,
  ocene: [10, 10, 10, 9],
};

let studenti = [student1, student2, student3, student4];

// Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo
let zad1 = (studenti, slovo) => {
  studenti.forEach(student => {
    if(student.prezime.includes(`${slovo}`)) {
      console.log(`${student.ime} ${student.prezime}`);
    }
  });
}

zad1(studenti, "K")

// Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.
let zad2 = (studenti, i, p) => {
  studenti.forEach(student => {
    if (student.ime.includes(`${i}`) && student.prezime.includes(`${p}`)) {
      console.log(`rec je o studentu ${student.ime} ${student.prezime}`);
    }
  });
}

zad2(studenti, "T", "M")

// Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.
let zad3 = (studenti, god) => {
  studenti.forEach(student => {
    if (student.godina == (`${god}`)) {
      console.log(`rec je o studentu ${student.ime} ${student.prezime}`);
    }
  });
}

zad3(studenti, 2);

// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
let prosecnaOcena = ocene => {
  let suma = 0;
  ocene.forEach(o => {
    suma += o;
  });
  return suma / ocene.length;
}

let najboljiStudent = studenti => {
  let naj = studenti[0];
  studenti.forEach (student => {
    if (prosecnaOcena(student.ocene) > prosecnaOcena(naj.ocene)) {
      naj = student;
    }
  });
  return `${naj.ime} ${naj.prezime}`;
}

console.log(najboljiStudent(studenti));

// Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.
let prosecan = studenti => {
  studenti.forEach(student => {
    let br = 0;
    student.ocene.forEach(o => {
      if(o == 6 || o == 10) {
        br++
      }
    });
    if(br == 0) {
      console.log(`Student ${student.ime} je prosecan/na`);
    }
  });
}

prosecan(studenti)

// Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.
let ekstra = studenti => {
  studenti.forEach(student => {
    let br = 0;
    let brDeset = 0;
    let brDevet = 0;
    student.ocene.forEach(o => {
      if(o == 6 || o == 7 || o == 8) {
        br++;
      }
      if (o == 10) {
        brDeset++;
      }
      if (o == 9) {
        brDevet++; 
      }
    });
    if (brDeset >= brDevet * 2 && br == 0) {
      console.log(`Student ${student.ime} je eeekstra`);
    }
  });
    
}

ekstra(studenti); 


// Student “kida” ako je polagao ispite samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
let kida = studenti => {
  studenti.forEach(student => {
    let br = 0;
    let brDeset = 0;
    let brDevet = 0;
    student.ocene.forEach(o => {
      if (o == 6 || o == 7 || o == 8) {
        br++;
      }
      if (o == 10) {
        brDeset++;
      }
      if (o == 9) {
        brDevet++;
      }
    });
    if (brDeset > 0 && brDevet < student.godina && br == 0) {
      console.log(`STUDENT ${student.ime} KIIIDA`);
    }
  });
}

kida(studenti);

// Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.
// let razbija = studenti => {
//   studenti.forEach(student => {
//     let br = 0;
//     let brDeset = 0;
//     student.ocene.forEach(o => {
//       if(o == 6 || o == 7 || o == 8 || o == 9) {
//         br++;
//       }
//       if(o == 10) {
//         brDeset++;
//       }
//     });
//     if(brDeset > 5 && brDeset > (student.godina + 1)) {

//     }
//   });
// }

// Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.
let aljkav = studenti => {
  studenti.forEach(student => {
    let br = 0;
    student.ocene.forEach(o => {
      if (o > 7) {
        br++;
      }
    });
    if (br == 0) {
      console.log(`Student ${student.ime} je aljak`);
    }
  })
}

aljkav(studenti);



