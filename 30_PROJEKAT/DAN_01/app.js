import Chatroom  from "./chat.js";
import { ChatUI } from "./ui.js";

let btnSend = document.getElementById("send-btn");
let inpMessage = document.getElementById("message");
let chatroom = new Chatroom("js", "AtanasijeK");

chatroom.getChats(data => {
  console.log(data);
});

//// //// //// //// //// //// //// //// //// //// //// //// //// 

let ul = document.getElementById("ul-message");
let chatUI = new ChatUI(ul); 

chatroom.getChats(data => {
  chatUI.templateLI(data);
}); 



btnSend.addEventListener("click", e => {
  e.preventDefault();
  chatroom.addChat(inpMessage.value)
  .then(() => {
    console.log("Successfully added!");
  })
  .catch(err => {
    console.log(err);
  });
});