// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if(request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   }
//   else if (request.readyState === 4) {
//     console.log("Nemoguce je dohvatiti podatke");
//   }
// })

// request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// request.send(); 

// //// //// //// //// //// //// ////

// Ispisati u konzoli one korisnike čiji website ima domen „.com“.

const request1 = new XMLHttpRequest();

request1.addEventListener("readystatechange", () => {
  if(request1.readyState === 4 && request1.status === 200) {
    let data = JSON.parse(request1.responseText)
    data.forEach(user => {
      if(user.website.includes(".com")) {
        console.log(user.website);
      }
    })
  }
  else if (request1.readyState === 4) {
    console.log("Nemoguce je dohvatiti podatke");
  }
})

request1.open("GET", "https://jsonplaceholder.typicode.com/users");
request1.send();

// Ispisati korisnike čije ime sadrži reč „Clementin“.

const request2 = new XMLHttpRequest();

request2.addEventListener("readystatechange", () => {
  if(request2.readyState === 4 && request2.status === 200) {
    let data = JSON.parse(request2.responseText);
    data.forEach(user => {
      if(user.name.includes('Clementin')) {
        console.log(user.name);
      }
    })
  }
  else if (request2.readyState === 4) {
    console.log("Nemoguce je dohvatiti podatke");
  }
})

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

// Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 

const request3 = new XMLHttpRequest();

request3.addEventListener("readystatechange", () => {
  if(request3.readyState === 4 && request3.status === 200) {
    let data = JSON.parse(request3.responseText);
    data.forEach(user => {
      if(user.company.name.includes("Group") || user.company.name.includes("LLC")) {
        console.log(user.company.name);
      }
    });
  }
  else if (request3.readyState === 4) {
    console.log("Nemoguce je dohvatiti podatke");
  }
})

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

// Ispisati sve različite gradove u kojima rade ovi korisnici.

const request4 = new XMLHttpRequest();

request4.addEventListener("readystatechange", () => {
  if(request4.readyState === 4 && request4.status === 200) {
    let data = JSON.parse(request4.responseText);
    let niz = [];
    data.forEach(user => {
      if(! niz.address.city.contain()) {
        niz.push(city)
      }
    })
    console.log(niz);
  }
  else if (request4.readyState === 4) {
    console.log("Nemoguce je dohvatiti podatke");
  }
})



// Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.

const request5 = new XMLHttpRequest();

request5.addEventListener("readystatechange", () => {
  if(request5.readyState === 4 && request5.status === 200) {
    let data = JSON.parse(request5.responseText);
    let br = 0;
    data.forEach(user => {
      if(user.address.geo.lat.includes("-") && user.address.geo.lng.includes("-")) {
        br++;
      }
    })
    console.log(br);
  }
  else if (request5.readyState === 4) {
    console.log("Nemoguce je dohvatiti podatke");
  }
})

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send()