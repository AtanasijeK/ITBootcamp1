let par = document.getElementsByTagName("p");
console.log(par);

// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
for (let i = 0; i < par.length; i++) {
  if(par[i] % 3 == 0) {
    par[i].style.fontSize = "15px";
  }
  else if(par[i] % 3 == 1) {
    par[i].style.fontSize = "20px";
  }
  else {
    par[i].style.fontSize = "25px";
  }
}

// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//  if(p.textContent.includes(’success’))
