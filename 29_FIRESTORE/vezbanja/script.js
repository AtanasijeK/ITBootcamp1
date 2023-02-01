console.log(db); // db - objekat "baze podataka"

let users = db.collection('users');
console.log(users);

let user1 = users.doc('akaradzic');
console.log(user1);

let user2 = db.doc('users/karadzica');

console.log(user2);

/*
Kada "pikiramo" dokument preko ovih komandi, mozemo da izvrsimo jednu od 4 osnovne operacije: 
  CRUD (Create, Read, Update, Delete)
    Create: doc.set(...);
    Read: doc.get(...);
    Update: doc.update(...);
    Delete: doc.delete(...);
Sve cetiri metode kao rezultat vracaju Promise
=> Mozemo da lancamo .then() i .catch() na bilo koju od ove 4 metode 
*/

db.collection('customers')
.doc('cust001')
.set({
  name: "Laza Lazic",
  age: 35,
  addresses: ["Beograd", "Leskovac"],
  salary: 400
})
.then(() => {
  console.log("Uspesno dodata musterija");
})
.catch((err) => {
  console.log("Greska: " + err);
})

db.collection('customers')
.doc('cust001')
.set({
  height: 185
}, {
  merge: true
})
.then(() => {
  console.log("Uspesno dodata musterija");
})
.catch((err) => {
  console.log("Greska: " + err);
})

console.log(1);
console.log(2);

let datum1 = new Date ("2023-3-15 19:00:00");
let datum2 = new Date ("2023-3-15 21:00:00");

db.collection('tasks')
.doc('fudbal')
.set({
  title: "Fudbal",
  start_date: firebase.firestore.Timestamp.fromDate(datum1),
  due_date: firebase.firestore.Timestamp.fromDate(datum2),
  priority: false, 
  description: "Fudbalica sa drustvom"
}, {
  merge: true
})
.then(function () {
  console.log("Task successfully added!");
})
.catch(function(err) {
  console.log("Error adding task: ", err);
})

db.collection('users')
.doc('nkaradzic')
.set({
  age: 52,
  name: "Nevenka",
  surname: "Karadzic"
}, {
  merge: true
})
.then(function () {
  console.log("User successfully added!");
})
.catch(function(err) {
  console.log("Error adding user: ", err);
})

// Update metoda 

db.collection('users')
.doc('karadzica')
.update({
  godine: 22,
  adrese: ['Nis', 'Beograd']
})
.then(() => {
  console.log("Uspesno update-ovano");

    return db.collection('users')
    .doc('karadzica')
    .update({
      godine: 22,
      adrese: firebase.firestore.FieldValue.arrayUnion('Cacak')
    })
})
.then(() => {
  console.log("Uspesno update-ovano");
})
.catch(err => {
  console.log(err);
})
