let blog1 = {
  title: "HTML",
  likes: 130,
  dislikes: 5
};

let blog2 = {
  title: "CSS",
  likes: 20,
  dislikes: 15
};

let blog3 = {
  title: "Java Script",
  likes: 110,
  dislikes: 7
};

let blog4 = {
  title: "MMA",
  likes: 30,
  dislikes: 5
};

let blog5 = {
  title: "Boks",
  likes: 20,
  dislikes: 15
};

let blog6 = {
  title: "KikBoks",
  likes: 170,
  dislikes: 7
};

let user = {
  username: "Atanasije",
  age: 27,
  blogs: [blog1, blog2, blog3],
  logBlogs: function () {
    this.blogs.forEach(blog => {
      console.log(blog.title);
    });
  }
};

let user1 = {
  username: "Stefan",
  age: 14,
  blogs: [blog4, blog5],
  logBlogs: function () {
    this.blogs.forEach(blog => {
      console.log(blog.title);
    });
  }
}

let user2 = {
  username: "JohnDoe",
  age: 13,
  blogs: [blog6],
  logBlogs: function () {
    this.blogs.forEach(blog => {
      console.log(blog.title);
    });
  }
}

user.logBlogs();

// Ispisati sve blogove korisnika user
console.log(user.blogs); 

// Ovo je prvi blog korisnika user
console.log(user.blogs[0]);  

// Ispisati naslov prvog bloga koji je napisao korisnik user 
console.log(user.blogs[0].title);

let users = [user, user1, user2];

// Ispisati imena onih autora koji imaju ispod 18 godina.
users.forEach(u => {
  if (u.age < 18) {
    console.log(u.username);
  }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(user => {
  let blogs = user.blogs; //Niz blogova tekuceg user-a
  blogs.forEach(blog => {
    if(blog.likes > 50) {
      console.log(blog.title);
    }
  });
});

// Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user => {
  if(user.username == "JohnDoe") {
    user.logBlogs();
  }
});

// Napraviti arrow f-ju kojoj se prosleduje username autora , a ona ispisuje sve njegove blogove
let pringBlogs = username => {
  users.forEach(user => {
    if(user.username == username) {
      user.logBlogs();
    }
  });
}

pringBlogs("Atanasije");

//  Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

users.forEach(user => {
  let suma = 0;
  user.blogs.forEach(blog => {
    suma += blog.likes;
    if (suma > 100) {
      console.log(user.username);
    }
  });
});

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let prosek = () => { 
  let sum = 0;
  let br = 0;
  users.forEach(user => {
    user.blogs.forEach(blog => {
      sum += blog.likes;
      br++;
    });
  });
  return sum / br;
} 

console.log(prosek(users)); 

users.forEach(user => {
  let avg = prosek(users);
  user.blogs.forEach(blog => {
    if (blog.likes > avg) {
      console.log(blog.title);
    }
  });
});

// ii nacin 
let avgLikes = users => {
  let sum = 0;
  let br = 0;
  for (let i = 0; i < users.length; i++) {
    let user = users [i]; // Ovo daje objekat (jedan element iz niza users)
    let blogs = user.blogs; // Ovo daje niz blogova za "selektovanog" korisnika
    for (let j = 0; j < blogs.length; j++) {
      let blog = blogs[j]; // Ovo daje objekat blog (jedan element iz niza blogs )
      sum += blog.likes; 
      br++;
    }
  }
  return sum / br;
}

let iznadProsekaLajkovi = users => {
  let prosekLajkova = avgLikes(users);
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let blogs = user.blogs;
    for (j = 0; j < blogs.length; j++) {
      let blog = blogs[j];
      if (blog.likes > prosekLajkova) {
        console.log(blog.title);
      }
    }
  }
}

console.log(`Prosecan broj lajkova je ${avgLikes(users)}`);
iznadProsekaLajkovi(users);