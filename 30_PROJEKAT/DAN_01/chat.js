class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username; 
    this.chats = db.collection('chats');
    this.unsub; 
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
    u = u.trim();
    if (u.length > 1 && u.length < 11 && u !== "") {
      this._username = u;
    }
    else {
      this._username = "Error";
      window.alert("Incorrect username!")
    }

  }

  // Update room
  updateRoom(ur) {
    this.room = ur;
    if(this.unsub) {
      this.unsub();
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
    this.unsub = this.chats
    .orderBy('created_at')
    .where('room', '==', this.room)
    .onSnapshot( snapshot => {
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