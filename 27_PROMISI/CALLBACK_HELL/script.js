console.log("CALLBACK");

let getResponse = (resource, callback) => {
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

// Ucitaj najpre prvi.json fajl

getResponse("../JSON/prvi.json", (data, err) => {
  if(data) {
    // Ukoliko je sve OK sa prvi.json fajlom, ispisi njegove podatke i potom ucitaj drugi.json fajl 
    console.log(data); 
    getResponse("../JSON/drugi.json", (data,err) => {
      if(data) {
        // Ukoliko je sve OK sa drugi.json fajlom, ispisi njegove podatke i potom ucitaj treci.json fajl
        console.log(data);
        getResponse("../JSON/treci.json", (data, err) => {
          if(data) {
            console.log(data);
          }
          else {
            console.log(err); // Ispisuje gresku ako treci.json fajl nije prosao
          }
        })
      }
      else {
        console.log(err); // Ispisuje gresku ako drugi.json fajl nije prosao
      }
    });
  }
  else {
    console.log(err); // Ispisuje gresku ako prvi.json fajl nije prosao
  }
});

console.log("KRAJ");