import { piecesPosition } from "./piecesPosition.js";
import { dragElement } from "./action/drag.action.js";

const chessTable = document.querySelector('.chess-table');
var square = document.querySelectorAll('.square');

piecesPosition(); //Putting each piece in their Home Squares

//Disabling the contextmenu
chessTable.addEventListener("contextmenu", e => e.preventDefault());


//Selecting individual pieces to drag
var piece = document.querySelectorAll('.piece')
for (let i = 0; i < piece.length; i++) {
    dragElement(piece[i])
}


