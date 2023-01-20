// class Pacijent {
//   constructor (i, v, t) {
//     this.ime = i;
//     this.visina = v;
//     this._tezina = t; 
//   }

//   get ime () {
//     return this._ime;
//   }
//   set ime (i) {
//     if (i.length > 0) {
//       this._ime = i;
//     }
//     else {
//       this._ime = "Pacijent je zavrsio sa ispitivanjima!"
//     }
//   }

//   get visina () {
//     return this._visina;
//   }
//   set visina (v) {
//     if (v > 250) {
//       this._visina = "Potrebna su dodatna ispitivanja";
//     }
//     else if (v < 0) {
//       this._visina = "Potrebna su dodatna ispitivanja";
//     }
//     else {
//       this._visina = v;
//     }
//   }

//   get tezina () {
//     return this._tezina;
//   }
//   set tezina (t) {
//     if (t > 550) {
//       this._tezina = "Potrebna su dodatna ispitivanja";
//     }
//     else if (t < 0) {
//       this._tezina = "Potrebna su dodatna ispitivanja";
//     }
//     else {
//       this._tezina = t;
//     }
//   } 


//   stampaj () {
//     console.log(`${this.ime} - ${this.visina} - ${this.tezina}`);
//   }

//   bmi () {
//     let bmi = this.tezina/(this.visina/100)**2;
//     return bmi;
//   }

//   kritican () {
//     let odg = false;
//     if (this.bmi() < 15 || this.bmi() > 40) {
//       odg = true;
//     }
//     return odg; 
//     // console.log(odg);
//   }
// }

// export default Pacijent;

//// //// //// //// //// //// //// //// //// //// //// ////

class Pacijent {
  constructor(i, v, t) {
      this.ime = i;
      this.visina = v;
      this.tezina = t;
  }
  //ime
  set ime(i) {
      this._ime = i;
  }
  get ime() {
      return this._ime;
  }
  //visina
  set visina(v) {
      if (v < 2.5 && v > 0) {
          this._visina = v;
      }
      else {
          this._visina = 1.7;
      }
  }
  get visina() {
      return this._visina;
  }
  //težina
  set težina(t) {
      if (t > 0 && t < 550) {
          this._tezina = t;
      }
      else {
          this._tezina = 58;
      }
  }
  get tezina() {
      return this._tezina;
  }
  //metode ostale
  stampaj() {
      console.log(this);
  }
  stampajListu() {
    let hmtlLista = 
    ` <ul>
        <li>Ime: ${this.ime}</li>
        <li>Visina: ${this.visina}</li>
        <li>Tezina: ${this.tezina}</li>
      </ul>`;
      return hmtlLista;
  }
  bmi() {
      let bmi = this.tezina / (this.visina * this.visina);
      return bmi;
  }
  kritican() {
      let x = false;
      if (this.bmi() < 15 || this.bmi() > 40) {
          x = true;
      }
      return x;
  }
}

export default Pacijent;