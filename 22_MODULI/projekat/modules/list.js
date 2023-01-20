import  generateImage  from "./general.js";

let generateList = parent => {
  let ul = document.createElement("ul");
  ul.style.overflow = "hidden";
  ul.style.listStyle = "none";
  parent.append(ul);
  return ul;
}

let generateItem = (parent, src) => {
  let li = document.createElement("li");
  li.style.float = "left";
  parent.append(li);
  let img = generateImage(src);
  li.append(img);

  return li;
}

let length = 3;

export { generateList as GL, generateItem, length };