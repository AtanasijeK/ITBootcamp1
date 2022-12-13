// XVIII zadatak 
let a = 10;
let b = 20;
let c = 15;

if (a > b) {
  if (a > c) {
    console.log(`najveci broj je ${a}`);
    if (b > c) {
      console.log(`srednji broj je ${b}`);
      console.log(`najmanji broj je ${c}`);
    }
    else {
      console.log(`srednji broj je ${c}`);
      console.log(`najmanji broj je ${b}`);
    }
  }
  else {
    console.log(`najveci broj je ${c}`);
    console.log(`srednji broj je ${a}`);
    console.log(`najmanji broj je ${b}`);
  }
}
else {
  //ili je b najveci ili je c najveci 
  if (b > c) {
    console.log(`najveci broj je ${b}`);
    if (a > c) {
      console.log(`srednji broj je ${a}`);
      console.log(`najmanji broj je ${c}`);
    }
    else {
      console.log(`srednji broj je ${c}`);
      console.log(`najmanji broj je ${a}`);
    }
  }
  else {
    console.log(`najveci broj je ${c}`);
    console.log(`srednji broj je ${b}`);
    console.log(`najmanji broj je ${a}`);
  }
}

// XIX zadatak 
let br1 = 272;
let br2 = 25; 
let provera1 = br1 % 2;
let provera2 = br2 % 2; 

if (br1 > br2){
  if (provera1 == 0){
    console.log(`broj ${br1} je paran broj`);
  }
  else{
    console.log(`broj ${br1} nije paran broj`);
  }
}
else {
  if (provera2 == 0){
    console.log(`broj ${br2} je paran broj`);
  }
  else{
    console.log(`broj ${br2} nije paran broj`);
  }
}

// XX

let d1 = 12;
let m1 = 12;
let g1 = 2020;

let d2 = 12;
let m2 = 12;
let g2 = 2020;

if (g1 < g2) {
  console.log(`raniji datum je: ${d1}. ${m1}. ${g1}.`);
}
else if (g2 > g1) {
  console.log(`raniji datum je: ${d2}. ${m2}. ${g2}.`); 
}
else {
  //obuhvat one slucajeve kada su godine iste 

  if (m1 < m2) {
    console.log(`raniji datum je: ${d1}. ${m1}. ${g1}.`);
  }
  else if (m2 < m1) {
    console.log(`raniji datum je: ${d2}. ${m2}. ${g2}.`); 
  }
  else {
    //obuhvata one slucajeve kada su i meseci isti

    if (d1 < d2) {
      console.log(`raniji datum je: ${d1}. ${m1}. ${g1}.`);
    }
    else if (d2 < d1) {
    console.log(`raniji datum je: ${d2}. ${m2}. ${g2}.`);
    }
    else
    {
      console.log(`datumi su isti`);
    }
  }
}
