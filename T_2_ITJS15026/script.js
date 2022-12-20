// I zadatak
let vreme = new Date();
let sati = vreme.getHours();
let minuti = vreme.getMinutes();
let preostaloSati = 17 - sati;
let preostaloMinuta = 60 - minuti; 

if (sati < 9){
  console.log(`Radno vreme jos uvek nije pocelo.`);
}
else if (sati >= 17){
  console.log(`Radno vreme je vec zavrseno`);
}
else{
  if (preostaloMinuta > 0) {
    preostaloSati1 = preostaloSati - 1;
    console.log(`Cvecara radi jos ${preostaloSati1}:${preostaloMinuta}`);
  }
  else{
    console.log(`Cvecara radi jos ${preostaloSati}:${preostaloMinuta}`);
  }
 }

// II zadatak
let g = 2000;
let cenaG = 5;
let cenaTransporta = 0;
let cenaTransporta10 = 0;
let cenaTransporta5 = 0;

if(g < 1000) {
  cenaTransporta = g * cenaG;
  console.log(`Cena transporta za robu tezine manje od 1kg nema popusta, vas iznos je: ${cenaTransporta} dinara`);
}
else if (g > 2000) {
  cenaTransporta = g * cenaG;
  cenaTransporta10 = cenaTransporta - (cenaTransporta * 10 / 100);
  console.log(`Cena bez popusta je ${cenaTransporta} dinara`);
  console.log(`Cena sa popustom je ${cenaTransporta10} dinara`);
}
else {
  cenaTransporta = g * cenaG;
  cenaTransporta5 = cenaTransporta - (cenaTransporta * 5 / 100);
  console.log(`Cena bez popusta je ${cenaTransporta} dinara`);
  console.log(`Cena sa popustom je ${cenaTransporta5} dinara`);
}

// IV zadatak
let n = 14;
let m = 40;
let i = n;
let suma = 0;
let brBrojeva = 0;
let proizvod = 1;
for (i = n; i <= m; i++){
  if (i % 7 == 0 && i % 2 != 0){
    suma += i;
    brBrojeva++;
    proizvod = suma * brBrojeva;
  }
}
console.log(`Suma: ${suma}`);
console.log(`Broj brojeva: ${brBrojeva}`);
console.log(`Proizvod sume i broja brojeva: ${proizvod}`);

// V zadatak 
n = 5;
m = 19;
let razlika = 0;
let parniDeljiviSa3 = 0;
let brBrojeva3 = 0; 

for(i = n; i <= m; i++){
  if (i % 2 == 0 && i % 3 == 0){
    parniDeljiviSa3 += i;
  }
  if(i % 10 == 3){
    brBrojeva3++;
  }
}
razlika = parniDeljiviSa3 - brBrojeva3;
console.log(`Razlika je: ${razlika}`);

// III zadatak
let ruze = 101;
let musterije = 11;
let kolikoRuza = 0; 
razlika = 0; 
n = ruze / musterije;

if (Number.isInteger(n) == false){
  n = Math.floor(n) + 1;
  kolikoRuza = n * musterije;
  razlika = kolikoRuza - ruze; 
  console.log(`Cvecarka treba da kupi najmanje jos ${razlika} ruza.`);
}
else{
  console.log(`Cvecarka ne treba da dokupljuje ruze.`);
}