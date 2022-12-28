// Formirati objekat dan koji sadrži:
  // Datum (string u formatu YYYY/MM/DD),
  // Kiša (true/false),
  // Sunce (true/false),
  // Oblačno (true/false),
  // Vrednosti temperature (Niz temperatura tog dana).
// Napisati metode koje:
  // I zad - Određuje i vraća prosečnu temperaturu izmerenu tog dana.
  // II zad - Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
  // III zad - Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
  // IV zad - Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
  // V zad - Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
  // VI zad - Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.


let dan = {
  datum: "2022/5/12",
  kisa: false,
  sunce: true,
  oblacno: false,
  temperatura: [18, 19, 20, 19, 21, 20, 21, 19, 21, 21],
  // I 
  prosecnaTemp: function() {
    let suma = 0;
    this.temperatura.forEach(t => {
      suma += t;
    });
    return suma/ this.temperatura.length;
  },

  // II 
  natprosecnaTemp: function() {
    let avg = this.prosecnaTemp();
    let br = 0;
    this.temperatura.forEach(t => {
      if(t > avg) {
        br++;
      }
    });
    return br;
  },

  // III 
  maksTemp: function() {
    let max = 0; 
    this.temperatura.forEach(t => {
      if (t > max) {
        max = t;
      }
    });
    return max;
  },
  brMaks: function () {
    let m = this.maksTemp();
    let br = 0; 
    this.temperatura.forEach (t => {
      if (t == m) {
        br++;
      }
    });
    return br;
  }, 

  // IV 
  interval: function() {
    let br = 0;
    let donja = 18.5;
    let gornja = 20.5;
    this.temperatura.forEach (t => {
      if (t < gornja && t > donja) {
        br++;
      }
    });
    return br;
  },


  // V
  iznadProseka: function() {
    let br = this.natprosecnaTemp();
    this.temperatura.forEach(t => {
      if (br > t.length/2) {

      }
    });
  }
}

console.log(dan);
console.log(dan.prosecnaTemp());
console.log(dan.natprosecnaTemp());
console.log(dan.maksTemp());
console.log(dan.brMaks());
console.log(dan.interval());
console.log(dan.iznadProseka());