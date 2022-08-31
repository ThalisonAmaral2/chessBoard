import { coor } from "./board/boardSettings.js";

export function piecesPosition(square) {

    // ----- BLACK PIECES -----

    const blackQueensRook = document.createElement('img')
    blackQueensRook.setAttribute('class','piece')
    blackQueensRook.src = "./pieces/BlackRook.png";
    // a8 = square[coor.a8];
    a6.appendChild(blackQueensRook);


    const blackQueensKnight = document.createElement('img')
    blackQueensKnight.setAttribute('class','piece')
    blackQueensKnight.src = "./pieces/BlackKnight.png"
    square[coor.b8].appendChild(blackQueensKnight)

    const blackQueensBishop = document.createElement('img')
    blackQueensBishop.setAttribute('class','piece')
    blackQueensBishop.src = "./pieces/BlackBishop.png"
    square[coor.c8].appendChild(blackQueensBishop)

    const blackQueen = document.createElement('img')
    blackQueen.setAttribute('class','piece')
    blackQueen.src = "./pieces/BlackQueen.png"
    square[coor.d8].appendChild(blackQueen)
    
    const blackKing = document.createElement('img')
    blackKing.setAttribute('class','piece')
    blackKing.src = "./pieces/BlackKing.png"
    square[coor.e8].appendChild(blackKing)

    const blackKingsBishop = document.createElement('img')
    blackKingsBishop.setAttribute('class','piece')
    blackKingsBishop.src = "./pieces/BlackBishop.png"
    square[coor.f8].appendChild(blackKingsBishop)

    const blackKingsKnight = document.createElement('img')
    blackKingsKnight.setAttribute('class','piece')
    blackKingsKnight.src = "./pieces/BlackKnight.png"
    square[coor.g8].appendChild(blackKingsKnight)

    const blackKingsRook = document.createElement('img')
    blackKingsRook.setAttribute('class','piece')
    blackKingsRook.src = "./pieces/BlackRook.png"
    square[coor.h8].appendChild(blackKingsRook)

    // ----- BLACK PAWNS -----

    const blackAPawn = document.createElement('img')
    blackAPawn.setAttribute('class','piece')
    blackAPawn.src = "./pieces/BlackPawn.png"
    square[coor.a7].appendChild(blackAPawn)

    const blackBPawn = document.createElement('img')
    blackBPawn.setAttribute('class','piece')
    blackBPawn.src = "./pieces/BlackPawn.png"
    square[coor.b7].appendChild(blackBPawn)

    const blackCPawn = document.createElement('img')
    blackCPawn.setAttribute('class','piece')
    blackCPawn.src = "./pieces/BlackPawn.png"
    square[coor.c7].appendChild(blackCPawn)

    const blackDPawn = document.createElement('img')
    blackDPawn.setAttribute('class','piece')
    blackDPawn.src = "./pieces/BlackPawn.png"
    square[coor.d7].appendChild(blackDPawn)

    const blackEPawn = document.createElement('img')
    blackEPawn.setAttribute('class','piece')
    blackEPawn.src = "./pieces/BlackPawn.png"
    square[coor.e7].appendChild(blackEPawn)

    const blackFPawn = document.createElement('img')
    blackFPawn.setAttribute('class','piece')
    blackFPawn.src = "./pieces/BlackPawn.png"
    square[coor.f7].appendChild(blackFPawn)

    const blackGPawn = document.createElement('img')
    blackGPawn.setAttribute('class','piece')
    blackGPawn.src = "./pieces/BlackPawn.png"
    square[coor.g7].appendChild(blackGPawn)

    const blackHPawn = document.createElement('img')
    blackHPawn.setAttribute('class','piece')
    blackHPawn.src = "./pieces/BlackPawn.png"
    square[coor.h7].appendChild(blackHPawn)

    
    // ----- WHITE PIECES -----

    const whiteQueensRook = document.createElement('img')
    whiteQueensRook.setAttribute('class','piece')
    whiteQueensRook.src = "./pieces/WhiteRook.png"
    square[coor.a1].appendChild(whiteQueensRook)

    const whiteQueensKnight = document.createElement('img')
    whiteQueensKnight.setAttribute('class','piece')
    whiteQueensKnight.src = "./pieces/WhiteKnight.png"
    square[coor.b1].appendChild(whiteQueensKnight)

    const whiteQueensBishop = document.createElement('img')
    whiteQueensBishop.setAttribute('class','piece')
    whiteQueensBishop.src = "./pieces/WhiteBishop.png"
    square[coor.c1].appendChild(whiteQueensBishop)

    const whiteQueen = document.createElement('img')
    whiteQueen.setAttribute('class','piece')
    whiteQueen.src = "./pieces/WhiteQueen.png"
    square[coor.d1].appendChild(whiteQueen)

    const whiteKing = document.createElement('img')
    whiteKing.setAttribute('class','piece')
    whiteKing.src = "./pieces/WhiteKing.png"
    square[coor.e1].appendChild(whiteKing)

    const whiteKingsBishop = document.createElement('img')
    whiteKingsBishop.setAttribute('class','piece')
    whiteKingsBishop.src = "./pieces/WhiteBishop.png"
    square[coor.f1].appendChild(whiteKingsBishop)

    const whiteKingsKnight = document.createElement('img')
    whiteKingsKnight.setAttribute('class','piece')
    whiteKingsKnight.src = "./pieces/WhiteKnight.png"
    square[coor.g1].appendChild(whiteKingsKnight)

    const whiteKingsRook = document.createElement('img')
    whiteKingsRook.setAttribute('class','piece')
    whiteKingsRook.src = "./pieces/WhiteRook.png"
    square[coor.h1].appendChild(whiteKingsRook)

    // ----- WHITE PAWNS -----

    const whiteAPawn = document.createElement('img')
    whiteAPawn.setAttribute('class','piece')
    whiteAPawn.src = "./pieces/WhitePawn.png"
    square[coor.a2].appendChild(whiteAPawn)

    const whiteBPawn = document.createElement('img')
    whiteBPawn.setAttribute('class','piece')
    whiteBPawn.src = "./pieces/WhitePawn.png"
    square[coor.b2].appendChild(whiteBPawn)

    const whiteCPawn = document.createElement('img')
    whiteCPawn.setAttribute('class','piece')
    whiteCPawn.src = "./pieces/WhitePawn.png"
    square[coor.c2].appendChild(whiteCPawn)

    const whiteDPawn = document.createElement('img')
    whiteDPawn.setAttribute('class','piece')
    whiteDPawn.src = "./pieces/WhitePawn.png"
    square[coor.d2].appendChild(whiteDPawn)

    const whiteEPawn = document.createElement('img')
    whiteEPawn.setAttribute('class','piece')
    whiteEPawn.src = "./pieces/WhitePawn.png"
    square[coor.e2].appendChild(whiteEPawn)

    const whiteFPawn = document.createElement('img')
    whiteFPawn.setAttribute('class','piece')
    whiteFPawn.src = "./pieces/WhitePawn.png"
    square[coor.f2].appendChild(whiteFPawn)

    const whiteGPawn = document.createElement('img')
    whiteGPawn.setAttribute('class','piece')
    whiteGPawn.src = "./pieces/WhitePawn.png"
    square[coor.g2].appendChild(whiteGPawn)

    const whiteHPawn = document.createElement('img')
    whiteHPawn.setAttribute('class','piece')
    whiteHPawn.src = "./pieces/WhitePawn.png"
    square[coor.h2].appendChild(whiteHPawn)
}