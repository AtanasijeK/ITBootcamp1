console.log(document); // Objekat (koren DOM stabla)
console.log(document.body); // objekat (body tag iz DOM stabla)


let el1 = document.getElementById("p2");
console.log(el1); // objekat iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML Collection objekata iz DOM stabla 

let el3 = document.getElementsByTagName("p");
console.log(el3); // HTML Collection objekata iz DOM stabla 

let el4 = document.getElementsByTagName("a");
console.log(el4);

let el5 = document.getElementsByName("p");
console.log(el5); // NodeList objekata iz DOM stabla 

// Pristup elementima HTML Collection
for (let i = 0; i < el2.length; i++) {
  console.log(el2[i]); // el2[i] je element iz HTML kolekcije el2
} 

/* ovako ne moze jer HTML Collection ne poseduje forEach petlju
el2.array.forEach(e => {
  console.log(e);
});
*/

let elems = Array.from(el2);
elems.forEach(e => {
  console.log(e);
});

// Pristup elementima NodeList - moze i preko for i preko forEach
el5.forEach(e => {
  console.log(e);
});

// Primena metoda querySelector
let t1 = document.querySelector("#p2"); // kao parametar ide CSS selektor

console.log(t1);

let t2 = document.querySelector(".par"); // objekat - PRVI objekat obuhvacen prosledjenim CSS selektorom

console.log(t2);

let t3 = document.querySelectorAll(".par");

console.log(t3);

t1.innerHTML += "Novi tekst paragrapa sa id-jem <span class = 'bold'>p2</span>"; 

for(let i = 0; i < t3.length; i++) {
  t3[i].innerHTML = "Promena teksta u elementu sa klasom <span class = 'bold'>par</span>"
}

let link = document.querySelector("a");
link.href = "https://www.google.com";
link.target = "_blank";
link.id = "link";

/*
link.style.color = "red";
link.style.border = "1px solid blue";
link.style.fontSize = "25px";
*/

// link.style = "color: red; border: 1px solid blue; font-size: 24px";
link.setAttribute("style", "color: red; border: 1px solid blue; font-size: 24px");
link.setAttribute("id", "link");

let table = document.querySelector("table");
console.log(table);
console.log(table.parentNode);
console.log(table.childNodes[0]);
console.log(table.childNodes[1]); 
console.log(table.childNodes[1].childNodes[0]); 

for(let i = 0; i < document.body.childNodes.length; i++) {
  let element = document.body.childNodes[i];
  console.log(element);
}