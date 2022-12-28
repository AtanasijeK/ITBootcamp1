// Objekat Polaznik sadrži ime (string), prezime (string), kao i ocena (ceo broj između 0 i 100, što zapravo predstavlja broj bodova na završnom testu).
// Objekat Kurs (naravno, neki iz ITBootcamp-a) sadrži naziv (string), grad u kojem se održava (string), kao i niz polaznici (elementi niza su objekti tipa Polaznik).
// Kreirati niz od barem 4 kursa. Svaki kurs može imati proizvoljan broj polaznika, i staviti barem tri polaznika za svaki kurs. Voditi se sledećim pravilima prilikom kreiranja svakog objekta:
  // Naziv kursa može biti “Razvoj veb stranica: JS”, “Razvoj veb stranica: PHP”, “Testiranje softvera: QA”, “Osnove programiranja: Java”.
  // Grad može biti “Beograd”, “Niš”, “Novi Sad” ili “Kosovska Mitrovica”.
  // Imena polaznika za svaki kurs su proizvoljni, kao i ocene, dokle god je svaka ocena ceo broj između 0 i 100.

let polaznik1 = {
  ime: "Gruja",
  prezime: "Crni",
  bodovi: 67,
};

let polaznik2 = {
  ime: "Djordje",
  prezime: "Karadjordje",
  bodovi: 27,
};

let polaznik3 = {
  ime: "Gruzila",
  prezime: "Vestica",
  bodovi: 97,
};

let polaznik4 = {
  ime: "Zmago",
  prezime: "Slovenac",
  bodovi: 88,
};

let polaznik5 = {
  ime: "Ceda",
  prezime: "Velja",
  bodovi: 51,
};

let polaznik6 = {
  ime: "Bole",
  prezime: "Sluga",
  bodovi: 1,
};

let polaznik7 = {
  ime: "Aganlija",
  prezime: "Kucuk-Alija",
  bodovi: 99,
};

let polaznik8 = {
  ime: "Milorad",
  prezime: "Milinkovic",
  bodovi: 95,
};

let polaznik9 = {
  ime: "Vukoje",
  prezime: "Vukoje",
  bodovi: 27,
};

let polaznik10 = {
  ime: "Stanoje",
  prezime: "Stanoje",
  bodovi: 47,
};

let polaznik11 = {
  ime: "Milic",
  prezime: "Vukasinovic",
  bodovi: 32,
};

let polaznik12 = {
  ime: "Juice",
  prezime: "Ivanovic",
  bodovi: 100,
};

let ucenici = [polaznik1, polaznik2, polaznik3, polaznik4, polaznik5, polaznik6, polaznik7, polaznik8, polaznik9, polaznik10, polaznik11, polaznik12];


let kurs1 = {
  naziv: "Razvoj veb stranica: JS",
  grad: "Beograd",
  polaznici: [polaznik1, polaznik2, polaznik3],
};

let kurs2 = {
  naziv: "Razvoj veb stranica: PHP",
  grad: "Nis",
  polaznici: [polaznik4, polaznik5, polaznik6],
};

let kurs3 = {
  naziv: "Testiranje softvera: QA",
  grad: "Novi Sad",
  polaznici: [polaznik1, polaznik2, polaznik3],
};

let kurs4 = {
  naziv: "Osnove programiranja: Java",
  grad: "Kosovska Mitrovica",
  polaznici: [polaznik1, polaznik2, polaznik3],
};

let kursevi = [kurs1, kurs2, kurs3, kurs4];

// Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.
let zad1 = (kursevi, grad) => {
  let br = 0;
  kursevi.forEach(kurs => {
    if(kurs.grad == (`${grad}`)) {
      br++
    }
  });
  return br;
}

console.log(zad1(kursevi, "Novi Sad"));


// Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
let zad2 = (kursevi, n) => {
  let br = 0;
  kursevi.forEach(k => {
    if (k.naziv == (`${n}`)) {
      br++;
      console.log(k.grad);
    }
  });
  return br; 
}

console.log(zad2(kursevi, "Osnove programiranja: Java"));


// Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.
let brPolaznika = polaznici => {
  let br = 0;
  polaznici.forEach(p => {
    br++
  });
  return br;
}
console.log(brPolaznika(kursevi));

// let zad3 = kursevi => {
//   kursevi.forEach(k => {
//     let br = 0; 
//     let maks = polaznici[0]
//     k.polaznici.forEach(p => {
//       br++;
//       if()
//     })
//   })
//   return br;
// }

// console.log();


// Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.




// Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.
// Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.
// Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).
// Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).

