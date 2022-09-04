const chessTable = document.querySelector('.chess-table');
var square = document.querySelectorAll('.square');


//Pieces and Board Settings
import { dragElement } from "./action/drag.action.js";
import { piecesPosition } from "./piecesPosition.js";

piecesPosition(); //Putting each piece in their Home Squares

//Selecting individual pieces to drag
for (let i = 0; i < piece.length; i++) {
    dragElement(piece[i])
}

//Disabling the contextmenu
chessTable.addEventListener("contextmenu", e => e.preventDefault());

//Square Selecting
// {
//     var circle = document.createElement('div');
//     circle.setAttribute('class','circle')
//     square.forEach(v=>{
//         v.addEventListener('click',e=>{
//             let piece = v.querySelector('.piece');
//             console.log(piece)
//             v.appendChild(circle);
//         })
//     })
// }






