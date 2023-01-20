class Pacijent {
  constructor (i, v, t) {
    this.ime = i;
    this.visina = v;
    this.tezina = t;
  }

  get ime () {
    return this._ime;
  }
  set ime (i) {
    if (i.length > 0) {
      this._ime = i;
    }
    else {
      this._ime = "Pacijent se odjavio";
    }
  }

  get visina () {
    return this._visina;
  }
  set visina (v) {
    if (v > 0 && v < 250) {
      this._visina = v;
    }
    else {
      this._visina = "Potrebno je odraditi dodatna istrazivanja!";
    }
  }

  get tezina () {
    return this._tezina;
  }
  set tezina (t) {
    if (t > 0 && t < 550) {
      this._tezina = t;
    }
    else {
      this._tezina = "Potrebno je odraditi dodatna istrazivanja!"
    }
  }

  stampaj () {
    console.log(`${this.ime} - ${this.visina} - ${this.tezina}`);
  }
  bmi () {
    let bmindeks = this.tezina / (this.visina/100)**2;
    console.log(`${bmindeks}`);
  }
  kritican () {
    let odg = undefined;
    if (this.bmi() < 15) {
      odg = true;
    }
    else if (this.bmi() > 40) {
      odg = true;
    }
    else {
      odg = false;
    }
    console.log(odg);
  }
}

export default Pacijent;