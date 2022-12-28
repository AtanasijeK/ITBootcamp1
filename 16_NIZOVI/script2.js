let zad24a = (a, b) => {
  let n = a.length; // n = b.length;
  let c = []; 
  for (let i = 0; i < n; i++) {
    c.push(a[i], b[i]);
  }
  return c;
}

let zad24b = (a, b) => {
  let n = a.length; // n = b.length;
  let c = []; 
  for (let i = 0; i < n; i++) {
    c [2 * i] = a[i];
    c [2 * i + 1] = b[i];
  }
  return c;
}

let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8];
let c = zad24a(a, b);
console.log(c);


let zad25 = (a, b) => {
  let n = a.length;
  let c = [];
  for (let i = 0; i < n; i++) {
    c[i] = a[i] * b[i];
  }
  return c
}

c = zad25(a, b);
console.log(c);


let zad26 = a => {
  let n = a.length;
  let b = []; 
  for (let i = 0; i < n/2; i++) {
    b[i] = (a[i] + a[n - 1 - i]) / 2;
  }
  return b; 
}

c = zad26(a);
console.log(c);
c = zad26(b);
console.log(c);