let x = 5;
let y = 7;

if(x == y)
{
  console.log("jednake vrednosti")
}
else
{
  console.log("razlicite vrednosti");
}


//Isto kao predhodni primer, samo kontra pitanje
if (x != y)
{
  console.log("razlicite vrednostii");
}
else
{
  console.log("iste vreednosti");
}

//I zadatak
let proizvod = 100;
if (proizvod > 100)
{
  document.write("<p>Throw away</p>");
}
else
{
  document.write("<p>Pack up</p>");
}

//II zadatak 
let temp = 0;
if(temp >= 0)
{
  document.write("<p style='color: red;'>Temperatura u plusu</p>");
}
else
{
  document.write("<p style='color: blue;'>Temperatura u minusu</p>");
}

//III zadatak 
let pol = "p";
if(pol == "m")
{
  document.write("<img src='../vezbanje/decak.jpeg' width='100px'>")
}
else
{
  document.write("<img src='../vezbanje/devojcica.jpeg' width='100px'>")
}

//IV zadatak
let vreme = new Date();
let sati = vreme.getHours();
let minuti = vreme.getMinutes();

if(sati + ":" + minuti > 12 + ":" + 00)
{
  document.write("<p>Trenutno je podne</p>")
}
else{
  document.write("<p>Trenutno je jutro</p>")
}

//V zadatak
let god = new Date();
let godina = god.getFullYear();
let godiste = 2004; 

let godine = godina - godiste; 
if(godine >= 18) 
{
  document.write("<p>Osoba je punoletna</p>")
}
else 
{
  document.write("<p>Osoba je maloletna</p>")
}

//VI zadatak 
let b1 = 10;
let b2 = 15;
let b3 = 13;

let maks = b1;

if(maks < b2)
{
  maks = b2;
}

if(maks < b3)
{
  maks = b3;
}
document.write(`<p>Maksimum je ${maks}</p>`)

//za minimum
let mini = b1
if(mini > b2)
{
  mini = b2
}
if (mini > b3)
{
  mini = b3
}
document.write(`<p>Minimum je ${mini}</p>`)