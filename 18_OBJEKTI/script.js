console.log("Objekti");

let blog1 = {
  title: "HTML",
  content: "Ovo je blog o osnovnim HTML tagovima",
  author: "Atanasije"
};

// Ispis celog objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis jednog propertija
console.log(blog1.title);
console.log(blog1["title"]);

// Izmena propertija
blog1.content = "Osnove HTML-a!";
console.log(blog1);
blog1['author'] = "Karadzic";
console.log(blog1);

///////////////////////////////////////////////////

let user = {
  username: "karadzic.mladic",
  age: 27,
  blogs: ["Automobili", "Motori", "Avioni"],
  login: function() {
    console.log("Ulogovani ste");
  },
  logout: function() {
    console.log("Izlogovani ste");
  },
  logBlogs: function() {
    this.blogs.forEach(b => {
      console.log(b);
    });
  }
};

user.login();
user.logout();
user.logBlogs();
user.blogs.forEach(bl => {
  document.write(`<p>${bl}</p>`);
})

///////////////////////////////////////////////////

let dan = {
  Datum: "2022/12/4",
  Kisa: false,
  Sunce: true,
  Oblacno: false,
  Temperatura: [18, 19, 20, 20, 21],

  // I zadatak
  prosecna: function () {
    let sum = 0; 
    this.Temperatura.forEach (t => {
      sum += t;
    });
    return sum / this.Temperatura.length;
  },

  // II zadatak
  brNatprosecnih: function() {
    let br = 0; 
    let avg = this.prosecna();
    this.Temperatura.forEach(t => {
      if (t > avg) {
        br++;
      }
    });
    return br;
  },

  // V zadatak
  toplo: function () {
  //   if(this.brNatprosecnih() > this.Temperatura.length/2) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // } 
    return this.brNatprosecnih() > this.Temperatura.length/2;
  },

  // VI 
  leden: function() {
    // for (let i = 0; i < this.Temperatura.length; i++) {
    //   if (this.Temperatura[i] > 0) {
    //     return false;
    //   }
    // }
    // return true;

    // 2. nacin
    // let leden_dan = true;
    // this.Temperatura.forEach(temp => {
    //   if(temp > 0) {
    //     leden_dan = false;
    //   }
    // });
    // return leden_dan;
    
    // 3. nacin
    let br_iznad_nule = 0;
    this.Temperatura.forEach(temp => {
        if(temp > 0) {
          br_iznad_nule++;
        }
      });
      if(br_iznad_nule == 0) {
        return true;
      }
      else {
        return false;
      }
  }, 

};

console.log(dan.prosecna());
console.log(dan.brNatprosecnih());
// console.log(dan.brMaksTemp());
console.log(dan.toplo());
console.log(dan.leden());

