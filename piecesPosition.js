
import * as piecesRender from "./config/piecesRender.js"


export function piecesPosition() {

    // ----- BLACK PIECES -----
    a8.appendChild(piecesRender.blackQueensRook);
    b8.appendChild(piecesRender.blackQueensKnight)
    c8.appendChild(piecesRender.blackQueensBishop)
    d8.appendChild(piecesRender.blackQueen)
    e8.appendChild(piecesRender.blackKing)
    f8.appendChild(piecesRender.blackKingsBishop)
    g8.appendChild(piecesRender.blackKingsKnight)
    h8.appendChild(piecesRender.blackKingsRook)

    // ----- piecesRender.BLACK PAWNS -----
    a7.appendChild(piecesRender.blackAPawn)
    b7.appendChild(piecesRender.blackBPawn)
    c7.appendChild(piecesRender.blackCPawn)
    d7.appendChild(piecesRender.blackDPawn)
    e7.appendChild(piecesRender.blackEPawn)
    f7.appendChild(piecesRender.blackFPawn)
    g7.appendChild(piecesRender.blackGPawn)
    h7.appendChild(piecesRender.blackHPawn)

    
    // ----- WHITE PIECES -----
    a1.appendChild(piecesRender.whiteQueensRook)
    b1.appendChild(piecesRender.whiteQueensKnight)
    c1.appendChild(piecesRender.whiteQueensBishop)
    d1.appendChild(piecesRender.whiteQueen)
    e1.appendChild(piecesRender.whiteKing)
    f1.appendChild(piecesRender.whiteKingsBishop)
    g1.appendChild(piecesRender.whiteKingsKnight)
    h1.appendChild(piecesRender.whiteKingsRook)

    // ----- WHITE PAWNS -----
    a2.appendChild(piecesRender.whiteAPawn)
    b2.appendChild(piecesRender.whiteBPawn)
    c2.appendChild(piecesRender.whiteCPawn)
    d2.appendChild(piecesRender.whiteDPawn)
    e2.appendChild(piecesRender.whiteEPawn)
    f2.appendChild(piecesRender.whiteFPawn)
    g2.appendChild(piecesRender.whiteGPawn)
    h2.appendChild(piecesRender.whiteHPawn)
}