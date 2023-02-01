let request = new XMLHttpRequest();
// request.addEventListener("readystatechange", () => {
//   // console.log(request.readyState);
//   if (request.readyState === 4) {
//     console.log(request.responseText);
//   }
// });

// request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       let data = JSON.parse(request.responseText);
//       console.log(data);
//     }
//     else if (request.readyState === 4) {
//       console.log(request.responseText);

//     }
//   });

// request.open("GET", "https://jsonplaceholder.typicode.com/posts");
// request.send();




// Ispisati u konzoli one korisnike čiji website ima domen „.com“.
let request1 = new XMLHttpRequest();

request1.addEventListener("readystatechange", () => {
  if(request1.readyState === 4 && request1.status === 200) {
    let data = JSON.parse(request1.responseText);
    data.forEach(user => {
      if(user.website.includes(".com")) {
        console.log(user);
      }
    })
  }
});

request1.open("GET", "https://jsonplaceholder.typicode.com/users");
request1.send();
// Ispisati korisnike čije ime sadrži reč „Clementin“.
let request2 = new XMLHttpRequest();

request2.addEventListener("readystatechange", () => {
  if(request2.readyState === 4 && request2.status === 200) {
    let data = JSON.parse(request2.responseText);
    data.forEach(user => {
      if(user.name.includes("Clementin")) {
        console.log(user);
      }
    })
  }
});

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

// Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
let request3 = new XMLHttpRequest();

request3.addEventListener("readystatechange", () => {
  if(request3.readyState === 4 && request3.status === 200) {
    let data = JSON.parse(request3.responseText);
    data.forEach(user => {
      if(user.company.name.includes("Group") || user.company.name.includes("LLC")) {
        console.log(user);
      }
    })
  }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

// Ispisati sve različite gradove u kojima rade ovi korisnici.
let request4 = new XMLHttpRequest();

request1.addEventListener("readystatechange", () => {
  if(request4.readyState === 4 && request4.status === 200) {
    let data = JSON.parse(request4.responseText);
    data.forEach(user => {
      if(user.company.name.includes("Group")) {
        console.log(user);
      }
    })
  }
});

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();

// Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
let request5 = new XMLHttpRequest();

request5.addEventListener("readystatechange", () => {
  if(request5.readyState === 4 && request5.status === 200) {
    let data = JSON.parse(request5.responseText);
    data.forEach(user => {
      if(user.address.geo.lat.includes("-") && user.address.geo.lng.includes("-")) {
        console.log(user);
      }
    })
  }
});

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send();


////////// ////////// Zadaci sa slajda br 16 ////////// //////////

let getUser = (resolve, reject) => {
  let request6 = new XMLHttpRequest();
  request6.addEventListener("readystatechange", () => {
    if(request6.readyState === 4 && request6.status === 200) {
      let data = JSON.parse(request6.responseText);
      resolve(data); 
    }
    else if (request6 === 4) {
      reject("Desila se greska");
    }
  })
  request6.open("GET", "https://jsonplaceholder.typicode.com/users");
  request6.send();
}

let ispisKonzola = poruka => {
  console.log(poruka);
}

// Zadatak 2 
let websiteCom = niz => {
  niz.forEach(user => {
    if(user.website.includes(".com")) {
      console.log(user.website);
    }
  })
}
getUser(websiteCom, ispisKonzola);

// Zadatak 3
let imeClementin = niz => {
  niz.forEach(user => {
    if(user.name.includes("Clementin")) {
      console.log(user.name);
    }
  });
}
getUser(imeClementin, ispisKonzola);

// Zadatak 4
getUser((niz) => {
  niz.forEach(user => {
    if(user.company.name.includes("Group") || user.company.name.includes("LLC")) {
      console.log(user.company.name);
    }
  });
}, (poruka) => {
  console.log(poruka);
});


////////// ////////// Zadaci sa slajda br 18 ////////// //////////
