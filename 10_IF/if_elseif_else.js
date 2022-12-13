//0 primer
let br = 0;
if(br < 0)
{
  console.log("Broj je manji od nule")
}
else if(br == 0)
{
  console.log("Broj je jednak nuli");
}
else
{
  console.log("Broj je veci od nule");
}

console.log("KrAj GrAnAnjA");

// VII zadatak 
let dan = new Date();
let danUNedelji = dan.getDay() + 1;
let provera = 6;

console.log(danUNedelji);

if(danUNedelji == 0)
{
  document.write("<p>vikend</p>")
}
else if (danUNedelji == 6)
{
  document.write("<p>vikend</p>")
}
else
{
 document.write("<p>radni dan</p>") 
}

// VIII zadatak
let brojPoena = 50;

if(brojPoena > 90)
{
  document.write("<p>10</p>");
}
else if (brojPoena > 80)
{
  document.write("<p>9</p>");
}
else if (brojPoena > 70)
{
  document.write("<p>8</p>");
}
else if (brojPoena > 60)
{
  document.write("<p>7</p>");
}
else if (brojPoena > 50)
{
  document.write("<p>6</p>");
}
else 
{
  document.write("<p>pao je</p>");
}

// IX zadatak
let vreme = new Date();
let sat = vreme.getHours();

if(sat < 9) 
{
  document.write("<p>Firma ne radi</p>");
}
else if (sat >= 17)
{
  document.write("<p>Firma ne radi</p>");
}
else
{
  document.write("<p>Firma radi</p>");
}

// XI zadatak 
let p1 = 8;
let k1 = 16;
let p2 = 16;
let k2 = 20;

if(k1 < p2) {
	console.log("Nema preklapanja")
}
else if(k2 < p1) {
	console.log("Nema preklapanja")
}
else {
     console.log("Ima preklapanja")
}

// XII zadatak

br = 130;
let ost = br % 2
if(ost == 0)
{
  console.log("paran broj");
}
else
{
  console.log("neparan broj");
}

// XIII zadatak 
br = 21;
let deljivSaTri = br % 3;

if(deljivSaTri == 0)
{
  console.log("Broj je deljiv sa tri");
}
else
{
  console.log("Broj nije deljiv sa tri");
}

// XIV zadatak
let c1 = 80;
let c2 = 230;

if (c1 > c2)
{
  console.log(c1 - c2);
}
else 
{
  console.log(c2 - c1);
}

// VXI zadatak
// max i min brojeve imamo gore odredjene 
// Odredjivanje srednjeg broja 
 /* 
 let sr = b1 + b2 + b3 - max - mini; 
 document.write("<p>Srednji broj je</p>") 
 */

 // XVII 
 let nr = 10;
 console.log(Number.isInteger(nr));
 if (Number.isInteger(nr))
 {
  console.log("ceo broj");
 }
 else
 {
  console.log("decimalan broj");
 }