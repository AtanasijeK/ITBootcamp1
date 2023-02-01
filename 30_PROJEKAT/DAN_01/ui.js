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
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();

    d = String(d).padStart(2, '0');
    m = String(m).padStart(2, '0');
    h = String(h).padStart(2, '0');
    min = String(min).padStart(2, '0');

    let fullDate = d + "." + m + "." + y + "." + "-" + h + ":" + min;
    
    return fullDate;
  }

  templateLI (data) {
    let date = data.created_at.toDate();
    let fullDate = this.formatDate(date);
    
    let liMessage = 
    `<li class="li-mess">
        <span class="span-username">${data.username} : </span>
        <span class="span-message">${data.message} </span>
        <div class="div-date">${fullDate} </div>
    </li>`

    this.list.innerHTML += liMessage;
  }
}