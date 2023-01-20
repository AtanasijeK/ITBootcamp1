let btnDodaj = document.getElementById("dodaj");
let inpUnesi = document.getElementById("unesiObavezu");
let ulTask = document.querySelector("ul");
let liTask = document.querySelectorAll("li");
let radioPocetak = document.getElementById("pocetak")
let radioKraj = document.getElementById("kraj");


btnDodaj.addEventListener("click", () => {
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
})




// inpUnesi.addEventListener("keypress", e => {
//   let inputTaskValue = inpUnesi.value;

//   if(inputTaskValue != "" && radioPocetak.checked && e.key === "Enter") {
//     let liNewTask = document.createElement("li");
//     liNewTask.textContent += inputTaskValue;
//     ulTask.prepend(liNewTask);
//     inpUnesi.value = "";
//   }
//   else if (inputTaskValue != "" && radioKraj.checked && e.key === "Enter")
//   {
//     let liNewTask = document.createElement("li");
//     liNewTask.textContent += inputTaskValue;
//     ulTask.appendChild(liNewTask);
//     inpUnesi.value = "";
//   }
// })

ulTask.addEventListener("click", e => {
  if(e.target.tagName == "LI") {
    e.target.remove();
  }
})






// liTask.forEach (li => {
//   li.addEventListener("click", () => {
//     li.remove();
//   })
// })

// btnDodaj.addEventListener("click", () => {
//   let inputTaskValue = inpUnesi.value;

//   if (radioPocetak.checked && inputTaskValue != "") {
//     let liNewTask = document.createElement("li");
//     liNewTask.textContent += inputTaskValue;
//     ulTask.appendFirstChild(liNewTask);
//     inpUnesi.value = "";
//   }
//   else if (radioKraj.checked && inputTaskValue != ""){
//     let liNewTask = document.createElement("li");
//     liNewTask.textContent += inputTaskValue;
//     ulTask.appendChild(liNewTask);
//     inpUnesi.value = "";
//   }
// })
