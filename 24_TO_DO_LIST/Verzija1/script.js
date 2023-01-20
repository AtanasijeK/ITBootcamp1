let liObaveze = document.querySelectorAll("li");

liObaveze.forEach(e => {
  e.addEventListener("click", () => {
    // I nacin //

    // if(e.style.textDecoration == "line-through") {
    //   e.style.textDecoration = "none";
    //   e.style.backgroundColor = "lightblue";
    //   e.style.color = "black";
    // }
    // else {
    //   e.style.textDecoration = "line-through";
    //   e.style.backgroundColor = "red";
    //   e.style.color = "white";
    // }

    // II nacin //

    e.classList.toggle("precrtaj");
  })
})

