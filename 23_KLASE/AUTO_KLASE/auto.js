class Auto {
  constructor (marka, boja, imaKrov) {
    this.marka = marka; 
    this.boja = boja;
    this.imaKrov = imaKrov; 
  }

  sviraj () {
    console.log(`Auto marke ${this._marka} svira: bii  bip`)
  }


  // Seteri
  set marka (m) {
    if (m.length > 0) {
      this._marka = m;
    }
    else {
      this._marka = "Skoda"; 
    }
    console.log("Pozvan je seter za polje marka");
  }

  set boja (b) {
    if (b.length > 0) {
      this._boja = b; 
    }
    else {
      this._boja = "Ovaj auto nije ofarban";
    }
  }

  set imaKrov (ik) {
    if (ik == true || ik == false) {
      this._imaKrov = ik;
    }
    else{ 
      this._imaKrov = "U pitanju je bicikla";
    }
  }


  // Geteri 
  get marka () {
    return this._marka;
  }

  get boja () {
    return this._boja;
  }

  get imaKrov () {
    return this._imaKrov;
  }
}

export { Auto };