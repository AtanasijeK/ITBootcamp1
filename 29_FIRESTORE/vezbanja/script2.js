// db.collection('customers')
// .doc('cust001')
// .delete()
// .then(() => {
//   console.log("Dokument uspesno izbrisan");
// })
// .catch((e) => {
//   console.log("Desila se greska: " + e);
// })

// // Dodavanje dokumenta u kolekciju preko metode add()
// db.collection('customers')
// .add({
//   name: "Mika Mikic",
//   age: 25, 
//   salary: 800,
//   addresses: ["Subotica", "Zrenjanin"]
// })
// .then(() => {
//   console.log("Dokument uspesno dodat");
// })
// .catch((e) => {
//   console.log("Desila se greska: " + e);
// })

// // 1) Moze se dohvatiti jedan dokument 
// // 2) Moze se dohvatiti vise dokumenata 

// // 1) 
// db.collection('users')
// .doc('karadzica')
// .get()
// .then((doc) => {
//   if(doc.exists) {
//     let data =  doc.data();
//     console.log("Uspesno skinut dokument: " + doc.id);
//     console.log(data);
//   }
//   else{
//     console.log(("Ne postoji dati dokument"));
//   }
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

// 2) 
// db.collection('customers')
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Uspesno skinut dokument: " + doc.id);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

// GET metoda kod kolekcije: 
// 1) Prikazivanje dokumenata u odredjenom redosledu (orderBy)
// 2) Prikazivanje odredjenog broja dokumenata (limit)
// 3) Prikazivanje dokumenata koji zadovoljavaju odredjene kriterijume - filtriranje (where)

// 1) orderBy:

// db.collection('customers')
// .orderBy('salary', 'desc')
// .orderBy('name', 'asc')
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Uspesno skinut dokument: " + doc.id);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

// 2) limit:

// db.collection('customers')
// .orderBy('salary', 'desc')
// .orderBy('name', 'asc')
// .limit(2)
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Uspesno skinut dokument: " + doc.id);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

// 3) where: 

// db.collection('customers')
// .where('salary', '>' , 500) // svi oni cija je plata veca od 500
// .where('salary', '<=', 600) // svi oni cija je plata manja ili jednaka 600
// .where('name', 'in', ['Laza', "Djole"])
// .where('name', '>', 'M')
// .orderBy('name')
// .orderBy('age')
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Uspesno skinut dokument: " + doc.id);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });


//// //// //// //// //// //// //// //// //// //// 

// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
// db.collection('customers')
// .orderBy('name')
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Uspesno skinut dokument: " + doc.id);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

// Imaju adresu u Nišu 
db.collection('customers')
.where('addresses', 'array-contains', 'Nis')
.get()
.then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log("Korisnik sa adresom u Nisu: " + doc.data().name);
    // console.log(doc.data());
  })
})
.catch((e) => {
  console.log("Greska: " + e);
});

// Imaju platu veću ili jednaku od 500
db.collection('customers')
.where('salary', '>', 500)
.get()
.then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log("Korisnik sa vecom platom od 500 jena: " + doc.data().name);
    // console.log(doc.data());
  })
})
.catch((e) => {
  console.log("Greska: " + e);
});

// Imaju platu između 300 i 800
db.collection('customers')
.where('salary', '>', 300)
.where('salary', '<', 800)
.get()
.then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log("Korisnik sa platom izmedju 300 i 800 silinga: " + doc.data().name);
    // console.log(doc.data());
  })
})
.catch((e) => {
  console.log("Greska: " + e);
});

// Imaju platu manju od 900, i imaju 30 godina - POTREBNO KREIRATI INDEX
// db.collection('customers')
// .where('salary', '>', 900)
// .where('age', '==', 40)
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Uspesno skinut dokument: " + doc.id);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

// Imaju adresu u Nišu ili Beogradu
db.collection('customers')
.where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log("Korisnik sa adresom u Nisu ili Beogradu: " + doc.data().name);
    // console.log(doc.data());
  })
})
.catch((e) => {
  console.log("Greska: " + e);
});

// Imaju 22, 25 ili 28 godina
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log("Korisnici koji imaju 22, 25 ili 28 godina su: " + doc.data().name + "; Godine: " + doc.data().age);
    // console.log(doc.data());
  })
})
.catch((e) => {
  console.log("Greska: " + e);
});