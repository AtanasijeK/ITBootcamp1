let btnDodaj = document.getElementById("dodaj");
let inpUnesi = document.getElementById("unesiObavezu");
let ulTask = document.querySelector("ul");
let liTask = document.querySelectorAll("li");
let radioPocetak = document.getElementById("pocetak")
let radioKraj = document.getElementById("kraj");

let arrTasks = [];


if(localStorage.getItem("tasks") == null) {
  // Ne postoji takav key u memoriji i treba ga kreirati
  localStorage.setItem("tasks", JSON.stringify(arrTasks));
 
}
else {
  // Postoji takav key u memoriji 
  arrTasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(arrTasks);
  arrTasks.forEach(task => {
    let liNewTask = document.createElement("li");
    liNewTask.textContent += task;
    ulTask.appendChild(liNewTask);
  });
}


inpUnesi.addEventListener("keyup", e => {
  if(e.key === "Enter") {

    let inputTaskValue = inpUnesi.value;

    if(inputTaskValue != "" && radioPocetak.checked) {
      let liNewTask = document.createElement("li");
      liNewTask.textContent += inputTaskValue;
      ulTask.prepend(liNewTask);
      arrTasks.unshift(inputTaskValue); 
      inpUnesi.value = "";
    }
    else if (inputTaskValue != "" && radioKraj.checked)
    {
      let liNewTask = document.createElement("li");
      liNewTask.textContent += inputTaskValue;
      ulTask.appendChild(liNewTask);
      arrTasks.push(inputTaskValue);
      inpUnesi.value = "";
    }
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }
})

ulTask.addEventListener("click", e => {
  if(e.target.tagName == "LI") {
    e.target.remove();
    let index = arrTasks.indexOf(e.target.textContent);
    arrTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }
})

