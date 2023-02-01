// db.collection('tasks')
// .where('priority', '==', true)
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Korisnici koji imaju 22, 25 ili 28 godina su: " + doc.data().name + "; Godine: " + doc.data().age);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);


// db.collection('tasks')
// .where('due_date', '>=', ts1)
// .where('due_date', '<', ts2)
// .get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log("Taskovi iz tekuce godine: " + doc.id);
//     console.log(doc.data());
//   })
// })
// .catch((e) => {
//   console.log("Greska: " + e);
// });

// Su završeni
let mesec = datum.getMonth();
let dan = datum.getDay();
let danasnjiDan = new Date(godina, mesec, dan);

let tsDanasnjiDan = firebase.firestore.Timestamp.fromDate(datum);

console.log(tsDanasnjiDan);

db.collection('tasks')
.where('due_date', '<=', tsDanasnjiDan)
.get()
.then((snapshot) => {
  snapshot.forEach((doc) => {
    console.log("Taskovi koji su zavrseni: " + doc.id);
    console.log(doc.data());
  })
})
.catch((e) => {
  console.log("Greska: " + e);
});

let t = firebase.firestore.Timestamp.fromDate(datum);
db.collection('tasks')
.where('start_date', '>', t)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Uspesno skinut dokument" + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
})