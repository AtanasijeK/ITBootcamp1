// import { generateImage } from "./modules/general.js";

// document.body.append(generateImage("images/1.jpeg"));

/*import { GL as generateList, generateItem as generateListItem  } from "./modules/list.js";

let ul = generateList(document.body);
generateListItem(ul, "images/1.jpeg");
generateListItem(ul, "images/2.jpeg");
generateListItem(ul, "images/3.jpg");

import { generateTabel, generateTableRow, generateItem as generateTableItem } from "./modules/tabel.js";

let table = generateTabel(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "images/1.jpeg");
generateTableItem(tr, "images/2.jpeg");
generateTableItem(tr, "images/3.jpg");
*/

import * as Lista from "./modules/list.js";

import * as Tabela from "./modules/tabel.js";

let ul = Lista.GL(document.body);
for(let i = 1; i <= Lista.length; i++) {
  Lista.generateItem(ul, `images/${i}.jpeg`);
}

let table = Tabela.generateTabel(document.body)
let tr = Tabela.generateTableRow(table);
for (let i = 1; i <= Tabela.length; i++) {
  Tabela.generateItem(tr, `images/${i}.jpeg`)
}