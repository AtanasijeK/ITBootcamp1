export class ChatUI {
  constructor (list) {
    this.list = list;
  }

  get list () {
    return this._list;
  }

  set list (l) {
    this._list = l;
  }

  formatDate (date) {
    let d = String(date.getDate()).padStart(2, "0");
    let m = String(date.getMonth() + 1).padStart(2, "0");
    let y = String(date.getFullYear());
    let h = String(date.getHours()).padStart(2, "0");
    let min = String(date.getMinutes()).padStart(2, "0");
    let today = new Date (); 

    let fullDate = `${d}.${m}.${y}-${h}:${min}`;
    let fullTime = `${h}:${min}`;

    if(date.toDateString() == today.toDateString()) {
      return fullTime;
    }
    else {
      return fullDate;
    }
  }

  templateLI (data) {
    let date = data.created_at.toDate();
    let fullDate = this.formatDate(date);
    let liMessage;
    
    if (data.username == localStorage.username) {
      liMessage = 
      `<li class="li-mess li-right">
          <span class="span-username">${data.username} :</span>
          <span class="span-message">${data.message}</span>
          <div class="div-date">${fullDate}</div>
      </li>
      <div></div>`;
    }
    else {
      liMessage =
        `
        <li class="li-mess">
            <span class="span-username">${data.username}: </span>
            <span class="span-message">${data.message}</span>
            <div class="div-date">${fullDate}</div>
        </li>
        <div></div>`;
    } 

    this.list.innerHTML += liMessage;
  }


  clearUL() {
    this.list.innerHTML = "";
  }

}