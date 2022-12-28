// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

// Napisati metode koje:
// Određuje i vraća prosečnu temperaturu izmerenu tog dana.
// Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
// Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.

// Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
// Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
// Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.


let dan = {
  datum: "1995/3/2",
  kisa: false,
  sunce: true,
  oblacno: false, 
  temp: [11, 10, 15, 15, 21, 21],

  prosecna: function () {
    let suma = 0;
    let br = 0;
    this.temp.forEach (t => {
      suma += t;
      br++; 
    });
    return suma / br;
  },

  natprosecna: function() {
    let br = 0;
    let avg = this.prosecna();
    this.temp.forEach (t => {
      if (t > avg) {
        br++
      }
    });
    return br;
  },

  brMaks: function () {
    let br = 0;
    let maks = this.temp[0];
    this.temp.forEach (t => {
      if (maks < t) {
        maks = t;
      }
    });
    this.temp.forEach (t => {
      if (t == maks) {
        br++
      }
    });
    return br;
  }, 

  izmedju: function () {
    let min = 14.5;
    let max = 19.5;
    let br = 0;
    this.temp.forEach (t => {
      if (t > min && t < max) {
        br++;
      }
    });
    return br;
  }, 

  iznadProseka: function () {
    let ip = this.natprosecna();
    let odg = undefined;
    this.temp.forEach (t => {
      if (ip > this.temp.length/2) {
        odg = true;
      }
      else {
        odg = false; 
      }
    });
    return odg;
  },

  leden: function () {
    let odg = undefined; 
    this.temp.forEach (t => {
      if (t > 0) {
        odg = false;
      }
      else {
        odg = true;
      }
    });
    return odg;
  },

// Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
// Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

  tropski: function () {
    let odg = undefined; 
    this.temp.forEach (t => {
      if (t > 24) {
        odg = true;
      }
      else {
        odg = false;
      }
    });
    return odg;
  },

  nepovoljan: function () {
    let odg = false; 
    for (i = 0; i < this.temp.length; i++) {
      if (this.temp[i] - this.temp[i + 1] > 8 || this.temp[i] - this.temp[i + 1] < -8) {
        odg = true;
      }
    }
    return odg;
  },

  neuobicajen: function () {
    let odg = false; 
    for (i = 0; i < this.temp.length; i++) {
      if (dan.kisa == true && this.temp[i] < (-5)) {
        odg = true; 
      }
      else if (dan.oblacno == true && this.temp[i] > 25) {
        odg = true;
      }
      else if (dan.oblacno == true && dan.kisa == true && dan.sunce == true) {
        odg = true; 
      }
    }
    return odg; 
  },

};

console.log(dan.prosecna());
console.log(dan.natprosecna());
console.log(dan.brMaks());
console.log(dan.izmedju());
console.log(dan.iznadProseka());
console.log(dan.leden());
console.log(dan.tropski());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());

let student = {
  ime: "Atanasije",
  prezime: "Karadzic",
  godina: 4,
  ocene: [6, 6, 7, 8, 7, 10, 6, 9, 9],
};

let student2 = {
  ime: "Tijana",
  prezime: "Milenkovic",
  godina: 3,
  ocene: [7, 8, 6, 9, 8, 10, 7, 6, 10], 
};

let student3 = {
  ime: "Aleksandra",
  prezime: "Karadzic",
  godina: 2,
  ocene: [10, 6, 7, 9, 8, 10, 10, 8, 9, 8], 
};

let student4 = {
  ime: "Jelena",
  prezime: "Milenkovic",
  godina: 5,
  ocene: [9, 7, 10, 8, 6, 10, 7, 9, 6, 7], 
};


let blog1 = {
  username: "kaki",
  likes: 30, 
  dislikes: 3, 
};

let blog2 = {
  username: "laki",
  likes: 50,
  dislikes: 26,
};

let blog3 = {
  username: "tutko!",
  likes: 80,
  dislikes: 7,
};

let n = [blog1, blog2, blog3];

let sumLikes = objekti => {
  let sum = 0;
  objekti.forEach(o => {
    sum +=o.likes;
  });
  return sum;
}

console.log(sumLikes(n));

let prosecanBroj = objekti => {
  let sum = 0; 
  let br = 0; 
  objekti.forEach(o => {
    sum += o.likes;
    br++
  });
  return sum / br;
}

console.log(prosecanBroj(n));
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let ispisUser = objekti => {
  objekti.forEach(o => {
    if (o.likes > o.dislikes) {
      console.log(o.username);
    }
  });
}

ispisUser(n)

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploVise = objekti => {
  objekti.forEach(o => {
    if (o.likes > o.dislikes*2) {
      console.log(o.username);
    }
  });
}

duploVise(n)

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let zavrsava = objekat => {
  objekat.forEach(o => {
    if (o.username.endsWith("!")) {
      console.log(o.username);
    }
  });
}

zavrsava(n); 

let user1 = {
  username: "aky",
  age: 27,
  blogs: [blog1, blog2],
};
let user2 = {
  username: "shiki",
  age: 67,
  blogs: [blog3, blog1],
};
let user3 = {
  username: "peki",
  age: 17,
  blogs: [blog2],
};

let korisnici = [user1, user2, user3]
let maloletan = korisnik => {
  korisnik.forEach (k => {
    if (k.age < 18) {
      console.log(k.username);
    }
  });
}

maloletan(korisnici);


