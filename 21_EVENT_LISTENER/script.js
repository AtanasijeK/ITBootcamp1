console.log("EVENTS");

// 1. Dohvatit element na koji zelimo da postavio osluskivac 
let btnHello = document.getElementById("hello");

// 2. Postavljamo osluskivac na element koji smo dohvatili 
btnHello.addEventListener("click", () => {
  console.log("Mladic");
});

///// ///// ///// ///// ///// ///// ///// /////
let btnHelloHello = document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick", () => {
  console.log("karadzic.mladic");
});

///// ///// ///// ///// ///// ///// ///// /////
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
let btnBrojac = document.getElementById("brojac");
let brojac = 1;
btnBrojac.addEventListener("click", () => {
  console.log(`Brojac je: ${brojac}`);
  brojac += 1;
  let paragraf = document.getElementById("par");
  paragraf.innerHTML = brojac;
});

///// ///// ///// ///// ///// ///// ///// /////
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnIspis = document.getElementById("brojac");
btnIspis.addEventListener("click", () => {

});

// Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spnRez = document.getElementById("rez");
let br = 0;

btnMinus.addEventListener("click", () => {
  br--;
  if(br < 0) {
    br = 0;
    }
  spnRez.innerHTML = br;
  if (br > 0 || br < 10) {
    spnRez.style.color = "green";
  }
  else {
    spnRez.style.color = "red";

  }
});

btnPlus.addEventListener("click", () => {
  br++;
  spnRez.innerHTML = br;
  if (br > 0 || br < 10) {
    spnRez.style.color = "green";
  }
  else {
    spnRez.style.color = "red";

  }
});

// Brojevi između 0 i 10 zelenom bojom.
// Brojevi preko 10 crvenom bojom.


///// ///// ///// ///// ///// ///// ///// /////
// V zadatak 
let inputUnos = document.getElementById("ime");
let btnPrikazi = document.getElementById("prikazi");
let spnPrikaz = document.getElementById("prikaz");
// let inputPol = document.querySelectorAll("input[name = 'pol']");



btnPrikazi.addEventListener("click",() => {
  let value = inputUnos.value; 
  spnPrikaz.innerHTML = `Sneg je opet ${value}`;
  // inputUnos.value = "";
});

btnPrikazi.addEventListener("dblclick", () => {
  ///// Selektovanje samo jednog radio buttona koji je cekiran  /////
  let  checkedPol = document.querySelector("input[name = 'pol']:checked");   // Jedan radio button koji je cekiran
  let valueCheckedPol = checkedPol.value; // Daje vrednost iz selektovanog HTML koda
  console.log(valueCheckedPol); 

  ///// Selektovanje svih radio buttons prema NAME atributu /////
  let inputRadios = document.getElementsByName("pol"); 
  inputRadios.forEach(input => {
    if(input.checked) {
      console.log(input.value);
    }
  })
  ///// Isto postizemo i ukoliko koristimo i querySelectorAll /////
  let inputRadiosQuery = document.querySelectorAll("input[name = 'pol']");
  inputRadiosQuery.forEach (input => {
    if(input.checked) {
      console.log(input.value);
    }

  });

});

// VII zadatak 
let inpKvadrata = document.getElementById("brojK");
let btnKvadrat = document.getElementById("kvadrat");
let spnPrikazK = document.getElementById("prikazK")

let inpPolovine = document.getElementById("brojP");
let btnPolovina = document.getElementById("polovina");
let spnPrikazP = document.getElementById("prikazP");

let inpKrug = document.getElementById("brojO");
let btnKrug = document.getElementById("krug");
let spnPrikazO = document.getElementById("prikazO");

btnKvadrat.addEventListener("click", () => {
  let broj = inpKvadrata.value; 
  spnPrikazK.innerHTML = (broj*broj);
  inpKvadrata.value = "";
});

btnPolovina.addEventListener("click", () => {
  let broj = inpPolovine.value; 
  spnPrikazP.innerHTML = (broj/2);
  inpPolovine.value = "";
});

btnKrug.addEventListener("click", () => {
  let broj = inpKrug.value; 
  spnPrikazO.innerHTML = (broj*broj*Math.PI);
  inpKrug.value = "";
});