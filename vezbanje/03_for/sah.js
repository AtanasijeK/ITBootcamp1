let brPolja = "";
for(i = 1; i <= 64; i++) {
  brPolja += 
    `
    <div>
      <span>${i}</span>
    </div>
    `
  if(i % 8 == 0){
    brPolja += 
    `
    <br>
    <br>
    ` 
  }  
  
}
document.write(brPolja)