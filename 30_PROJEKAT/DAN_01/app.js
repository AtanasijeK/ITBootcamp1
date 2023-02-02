import Chatroom  from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let btnSend = document.getElementById("send-btn");
let inpMessage = document.getElementById("message");
let btnUpdate = document.getElementById("update-btn");
let inpUpdate = document.getElementById("username");
let spanNot = document.getElementById("notification"); 
let ulChannel = document.getElementById("ul-channel");
let ul = document.getElementById("ul-message");

let username = "anonymus";
if(localStorage.username) {
  username = localStorage.username;
}

let chatroom = new Chatroom("js", username);
let chatUI = new ChatUI(ul); 

chatroom.getChats(data => {
  chatUI.templateLI(data);
}); 


btnSend.addEventListener("click", e => {
  e.preventDefault();
  const message = inpMessage.value.trim();
  if (!message) {
    console.error("Error: message is empty or only contains whitespace");
    return;
  }

  chatroom.addChat(message)
    .then(() => inpMessage.value = "")
    .catch(error => console.error(error))
});


btnUpdate.addEventListener("click", e => {
  e.preventDefault();
  const username = inpUpdate.value.trim();
  if (username !== "" && username.length > 1 && username.length < 11) {
    chatroom.username = username;
    btnSend.disabled = false;
    localStorage.setItem("username", chatroom.username);
    spanNot.innerHTML = `Username updated: ${chatroom.username}`;
    setTimeout(() => {
      spanNot.innerHTML = "";
    }, 3000);
  }
  else {
    btnSend.disabled = true;
    window.alert("Incorrect username!");
  }
  inpUpdate.value = "";
});

ulChannel.addEventListener("click", e => {
  e.preventDefault();
  if(e.target.tagName == "LI") {
    let newRoom = e.target.textContent;
    chatroom.updateRoom(newRoom);
    chatUI.clearUL();
    chatroom.getChats(data => {
      chatUI.templateLI(data)
    })
  }
});