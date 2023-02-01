console.log("CALLBACK");

let getResponse = resource => {

  // I kreiranje XML objekta
  let request = new XMLHttpRequest();

  // II otvarnje kreiranog zahteva
  request.open("GET", resource);

  // III slanje zahteva
  request.send();
  

  let obj = new Promise((resolve, reject) => {

    request.addEventListener("readystatechange", () => {

      if(request.readyState === 4 && request.status === 200) {
        // Sve je OK i koristimo resolve kome prosledjujemo podatke iz json fajla 
        resolve(request.responseText);
      }

      else if (request.readyState === 4) {
        // Nesto nije OK i koristimo reject kome saljemo tekst greske 
        reject("Nije moguce dohvatiti podatke");
      }

    });
  });
  return obj; 
}

getResponse("../JSON/prvi.json").then(sadrzajPrvog => {
  console.log("prvi.json resolved", sadrzajPrvog);
  return getResponse("../JSON/drugi.json");
}).then(sadrzajDrugog => {
  console.log("drugi.json resolved", sadrzajDrugog);
  return getResponse("../JSON/treci.json");
}).then(sadrzajTreceg => {
  console.log("treci.json resolved", sadrzajTreceg);
})
.catch(greska => {
  console.log("Promise reject", greska);
});

console.log("KRAJ");