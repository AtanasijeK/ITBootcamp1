console.log("Primeri callback f-ja:");

let myFunc = callback => {
  callback();
}

myFunc(() => {
  console.log("Callback f-ja okinuta");
});

//// //// //// //// //// //// //// ////
// callback f-ja za sabiranje dva broja 

let sum = callback => {
  callback(5, 7);
}

// I nacin
// Kreirali smo posebnu f-ju koja nam sluzi kao realizacija i koju cemo prosledjivati kao parametar 
function printSum(a, b) {
  console.log(a + b);
}

sum(printSum); // Poziv f-je koja reazlicuje callback ide bez zagrada 

// II nacin 
sum((a, b) => {
  console.log(a + b);
});


//// //// //// //// //// //// //// ////

let racunaj = (str, cb) => {
  console.log(str);
  let rez = cb(10, 5); 
  console.log(rez);
}

racunaj("Oduzimanje", (x, y) => {
  return x - y;
});

racunaj("Deljenje", (x, y) => {
  return x / y;
});


//// //// //// //// //// //// //// ////

let racunaj2 = (str, br1, br2, funkcija) => {
  console.log(str, funkcija(br1, br2));
}

racunaj2("Mnozenje", 4, 7, (x, y) => {
  return x * y; 
}); 