let blog1 = {
  title: "Boks",
  likes: 101, 
  dislikes: 5, 
};

let blog2 = {
  title: "KikBoks",
  likes: 99,
  dislikes: 6,
};

let blog3 = {
  title: "MMA!",
  likes: 40,
  dislikes: 7,
};

let blog4 = {
  title: "Tekvondo",
  likes: 30, 
  dislikes: 3, 
};

let blog5 = {
  title: "JiuJitsu",
  likes: 30,
  dislikes: 26,
};

let blog6 = {
  title: "Judo!",
  likes: 80,
  dislikes: 7,
};

let user1 = {
  username: "Aky",
  age: 27,
  blogs: [blog1, blog2],
};
let user2 = {
  username: "Shiki",
  age: 67,
  blogs: [blog3, blog4],
};
let user3 = {
  username: "Peki",
  age: 17,
  blogs: [blog5, blog6],
};

let users = [user1, user2, user3];

// Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach (user => {
  user.blogs.forEach (blog => {
    if (blog.likes > 150) {
      console.log(blog.title);
    }
  });
});

// Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach (user => {
  if(user.username == "Shiki") {
    user.blogs.forEach(blog => {
      console.log(blog.title);
    });
  }
});

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
users.forEach (user => {
  user.blogs.forEach (blog => {
    if (blog.likes > 100) {
      console.log(user.username);
    }
  });
});

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let prosekL = users => {
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

console.log(prosekL(users));

let natprosecanL = users => {
  users.forEach(user => {
    user.blogs.forEach(blog => {
      if(blog.likes > prosekL(users)) {
        console.log(blog.title);
      }
    });
  });
}

natprosecanL(users)

let prosekN = users => {
  let sum = 0; 
  let br = 0; 
  users.forEach(user => {
    user.blogs.forEach(blog => {
      sum += blog.dislikes;
      br++;
    });
  });
  return sum / br;
}

console.log(prosekN(users));

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

let ispis = users => {
  users.forEach(user => {
    user.blogs.forEach(blog => {
      if (blog.likes > prosekL(users) && blog.dislikes < prosekN(users)) {
        console.log(blog.title);
      }
    });
  });
}

ispis(users);