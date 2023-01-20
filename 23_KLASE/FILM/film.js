class Film {
  constructor(naslov, reziser, godinaIzdanja) {
  this.naslov = naslov;
  this.reziser = reziser;
  this.godinaIzdanja = godinaIzdanja;
  }

  stampaj () {
    console.log(`Film ${this._naslov} je snimljen pre 1800. godine!`);
  }

  // Seteri
  set naslov (n) {
    if(n.length > 0) {
      this._naslov = n;
    } 
    else {
      this._naslov = "Maratonci trce pocasni krug";
    }
  }

  set reziser (r) {
    if(r.length > 0) {
      this._reziser = r;
    }
    else {
      this._reziser = "Slobodan Sijan";
    }
  }

  // set godinaIzdanja (gi) {
  //   if (gi.length == " ") {
  //     this._godinaIzdanja = gi;
  //   }
  //   else {
  //     this._godinaIzdanja = "Ne zna se kada je ovaj film snimljen!";
  //   }
  // }

}



export {Film}