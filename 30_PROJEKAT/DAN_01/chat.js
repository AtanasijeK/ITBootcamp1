class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username; 
    this.chats = db.collection('chats');
  }

  // Seteri 
  set room (r) {
    if (r.length > 0) {
      this._room = r;
    }
    else {
      this._room = "Error;"
    }
  }

  set username (u) {
    if (u.length > 0) {
      this._username = u;
    }
    else {
      this._username = "Error";
    }
  }

  // Geteri 

  get room () {
    return this._room;
  }

  get username () {
    return this._username;
  }

  async  addChat (m) {
    let date = new Date ();

    let docChat = {
      message: m,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(date)
    };

    let response = await this.chats.add(docChat);
    return response;
  }

  getChats (callback) {
    this.chats.onSnapshot( snapshot => {
      snapshot.docChanges().forEach( change => {
        if(change.type == "added") {
          // console.log(change.doc.data());
          callback(change.doc.data());
        }
      });
    }); 
  }
}

export default Chatroom;