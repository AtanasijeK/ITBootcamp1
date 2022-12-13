// I zadatak 
//b
let j = 1;
while(j <= 20){
  console.log(j);
  j++
}

//a
j = 1; 
let poruka = "";
while (j <= 20){
  poruka = poruka + j + " "; // poruka += (j + "");
  j++; // j += 1; // j = j +1;
}
console.log(poruka);

/*
# .  |  poruka          |    i    
-------------------------------
0    |  ""              |    1 
1    |  "1 "            |    2
2    |  "1 2 "          |    3
3    |  "1 2 3 "        |    4
...  | ...              |    
20   |  "1 2 .. 19 20 " |    21

*/

// II zadatak 
// I nacin 
j = 20; 
while(j >= 1){
  console.log(j);
  j--;
}

// II nacin 
j = 1; 
while(j <= 20){
  console.log(21 - j);
  j++; 
}

// III zadatak 
// I nacin 
let i = 1;
while(i <=20){
  if(i % 2 == 0) {
    console.log(i);
  }
  i++
}

// II nacin 
i = 2; 
while(i <= 20){
  console.log(i);
  i += 2; 
}

// IV zadatak 
let n = 5;
i = 1; 
while (i <= n){
  if (i % 3 == 0){
    document.write("<p style='color: red'> bla bla</p>")
  }
  else if (i % 3 == 1){
    document.write("<p style='color: blu'> bla bla</p>")
  }
  else {
    document.write("<p style='color: yellow'> bla bla</p>")
  }
 i++
}

// II nacin 
n = 7; 
i = 1;
while(i<=n){
  if (i % 3 == 0){
    document.body.innerHTML += "<p class='blue'>neki tekstic</p>"
  }
  else if (i % 3 == 1){
    document.body.innerHTML += "<p class='green'>neki tekstic</p>"
  }
  else{
    document.body.innerHTML += "<p class='red'>neki tekstic</p>"
  }

  i++
}

// VI zadatak 
i = 1;
let suma = 0;
while(i <=100){
  suma += + i; 
  i++
}
console.log(`Suma brojeva od 1 do 100 je: ${suma}`);

//VII
i = 1;
n = 14;
suma = 0;
while(i <= n){
  suma +=  i;
  i++;
}
console.log(`Suma brojeva od 1 do n je: ${suma}`);

//VIII zadatak
n = 5;
let m = 7;
suma = 0;
while(n <= m){
  suma += n;
  n++;
} 
console.log(`Suma brojeva od n do m je: ${suma}`);


//IX zadatak 
n = 3;
m = 6;
i = n;
let proizvod = 1;
while (i <= m){
  proizvod *= i;
  i++
} 
console.log(`Proizvod brojeva od ${n} do ${m} je: ${proizvod}`);

// X zadatak 
n = 2; 
m = 6; 
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n;
while(i <= m){
  if (i % 2 == 0){
    // sumaKvadrataParnih += (i * i); 
    sumaKvadrataParnih += (i ** 2);
  }
  else {
    sumaKubovaNeparnih += (i ** 3);
  }
  i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je: ${sumaKvadrataParnih}`);

console.log(`Suma kubova neparnih brojeva od ${n} do ${m} jednaka je: ${sumaKubovaNeparnih}`);

// XI zadatak 
let k = 15;
i = 1;
let brojDelioca = 0;
while(i <= k){
  if (k % i == 0){
    brojDelioca++; 
  }
  i++
}
console.log(`Broj delioca broja k jednak je: ${brojDelioca}`);

// XII zadatak 
if (brojDelioca == 2){
  console.log(`Broj ${k} je prost`);
}
else{
  console.log(`Broj ${k} je slozen`);
}