console.log("CALLBACK");

let getTodos  = (resource, callback) => {
  // I kreiranje XML objekta
  let request = new XMLHttpRequest();
  

  request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      callback(request.responseText, undefined);
    }
    else if (request.readyState === 4) {
      // console.log("Nije moguce dohvatiti podatke");
      callback(undefined, "Nije moguce dohvatiti podatke");
    }
  });

  // II otvarnje kreiranog zahteva
  request.open("GET", resource);

  // III slanje zahteva
  request.send();
}

getTodos("../JSON/todos.json", (data, err) => {
  // console.log(data, err);
  if(data) {
    console.log(data); // Ispisuje podatke sa kojima moze dalje da se raspolaze
  }
  else {
    console.log(err); // Ispisuje gresku
  }
});

console.log("KRAJ");