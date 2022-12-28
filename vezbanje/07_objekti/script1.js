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
    datum: "2021/5/13",
    kisa: false,
    sunce: true,
    oblacno: false, 
    temp: [-15, -17, -20, -20, -21, -20, -21, -21],
    // i zad
    prosecnaTemp: function () {
      let suma = 0; 
      this.temp.forEach(t => {
        suma += t;
      });
      return suma/this.temp.length;
    },
    // ii zad 
    natprosecnaTemp: function () {
      let avg = this.prosecnaTemp();
      let br = 0;
      this.temp.forEach(t => {
        if (t > avg) {
          br++;
        }
      });
      return br;
    },
    // iii zad 
    maxTemp: function() {
      let br = 0;
      let max = 0;
      this.temp.forEach(t => {
        if (max < t) {
          max = t;
        }
      });
      this.temp.forEach(t => {
        if (max == t) {
          br++
        }
      });
      return br;
    },
    // iv zad 
    izmedjuDveTemp: function() {
      let min = 17.5;
      let max = 20.5;
      let br = 0;
      this.temp.forEach (t => {
        if (min < t && max > t) {
          br++;
        }
      });
      return br;
    },
    // v zad 
    lepDan: function() {
      let iznadProseka = this.natprosecnaTemp();
      let odg = undefined;
      this.temp.forEach(t => {
        if (iznadProseka > this.temp.length / 2) {
          odg = true;
        }
        else {
          odg = false;
        }
      });
      return odg;
    },
    // vi zad 
    ledenDan: function() {
      for (let i = 0; i < this.temp.length; i++) {
        if (this.temp[i] > 0) {
          return false; 
        }
      }
      return true;
    }
  };
  
  console.log(dan);
  console.log(dan.prosecnaTemp());
  console.log(dan.natprosecnaTemp());
  console.log(dan.maxTemp());
  console.log(dan.izmedjuDveTemp());
  console.log(dan.lepDan());
  console.log(dan.ledenDan());


// Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

let zad = {
  nizT: [25, 25, 26, 29, 30],

  tropskiDan: function() { 
    let odg = undefined;
    for (i = 0; i < this.nizT.length; i++) {
      if (this.nizT[i] < 24) {
        return false;
      }
    }
    return true;
  },
}

console.log(zad.tropskiDan());

// Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

let zad2 = {
  temp: [12, 10, 1, 13],

  nepovoljan: function() {
    for (let i = 0; i < this.temp.length; i++) {
      if (this.temp[i] - this.temp[i + 1] > 8) {
        return true;
      }
      else if (this.temp[i] - this.temp[i + 1] < -8) 
      {
        return true;
      }
    }
    return false;
  },
}

console.log(zad2.nepovoljan());


// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

let zad3 = {
  datum: "2021/5/13",
  kisa: true,
  sunce: false,
  oblacno: true, 
  temp: [-5, 10, 15, 25],

  neuobicajen: function () {
    let odg = undefined; 
    this.temp.forEach (t => {
      if (this.kisa == true && t < (-5)) {
        odg = true;
      }
      else if (this.oblacno == true && t > 25) {
        odg = true;
      }
      else if (this.oblacno == true && this.kisa == true && this.sunce == true) {
        odg = true;
      }
      else {
        odg = false; 
      }
    });
    return odg;
  }
}

console.log(zad3.neuobicajen());