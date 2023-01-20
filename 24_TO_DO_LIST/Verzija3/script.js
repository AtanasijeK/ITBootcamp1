let btnDodaj = document.getElementById("dodaj");
let inpUnesi = document.getElementById("unesiObavezu");
let ulTask = document.querySelector("ul");
let liTask = document.querySelectorAll("li");
let radioPocetak = document.getElementById("pocetak")
let radioKraj = document.getElementById("kraj");


inpUnesi.addEventListener("keyup", e => {
  if(e.key === "Enter") {

    let inputTaskValue = inpUnesi.value;

    if(inputTaskValue != "" && radioPocetak.checked) {
      let liNewTask = document.createElement("li");
      liNewTask.textContent += inputTaskValue;
      ulTask.prepend(liNewTask);
      inpUnesi.value = "";
    }
    else if (inputTaskValue != "" && radioKraj.checked)
    {
      let liNewTask = document.createElement("li");
      liNewTask.textContent += inputTaskValue;
      ulTask.appendChild(liNewTask);
      inpUnesi.value = "";
    }
  }
})

ulTask.addEventListener("click", e => {
  if(e.target.tagName == "LI") {
    e.target.remove();
  }
})


///////////////// LOCAL STORAGE /////////////////////
// Smestanje u lokalnu memoriju 
// localStorage.setItem("name", "Atanasije");
localStorage.setItem("username", "Atanasije");
localStorage.setItem("city", "Leskovac");

// Update u lokalnoj memoriji

localStorage.setItem("username", "karadzic.mladic");

// Ukoliko key postoji vec u local storage onda vrsi update vrednosti za taj key
// Ukoliko key ne postoji u local storage, onda vrsi dodavanje (novi unos) u local storage

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("name"));
let u = localStorage.getItem("name");
console.log(u);

localStorage.setItem("year", 27);
let god = localStorage.getItem("year");
god++;
localStorage.setItem("year", god);
console.log(`Imam ${god} godina`);