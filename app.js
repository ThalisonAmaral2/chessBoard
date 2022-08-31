const chessTable = document.querySelector('.chess-table');
var square = document.querySelectorAll('.square');


//Pieces and Board Settings

import { piecesPosition } from "./piecesPosition.js";

piecesPosition(square); //Putting each piece in their Home Squares

//Disabling the contextmenu
chessTable.addEventListener("contextmenu", e => e.preventDefault());

//Square Selecting
{
    var circle = document.createElement('div');
    circle.setAttribute('class','circle')
    square.forEach(v=>{
        v.addEventListener('click',e=>{
            let piece = v.querySelector('.piece');
            console.log(piece)
            v.appendChild(circle);
            
        })
    })
}







