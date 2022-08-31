const lightSquares = document.querySelectorAll('.white')

const darkSquares  = document.querySelectorAll('.black')


function changeColor(whiteColor,blackColor){

    for (let i = 0; i < darkSquares.length; i++) {
        lightSquares[i].style.backgroundColor = whiteColor;
        darkSquares[i].style.backgroundColor = blackColor;
    }

    
}

const boardColors = [
    {board:'green',white:'var(--white)',black:'var(--green)'},
    {board:'wood',white:'var(--wood1)',black:'var(--wood3)'},
    {board:'red',white:'var(--white)',black:'var(--red)'},
    {board:'blue',white:'var(--white)',black:'var(--blue)'}
]

const submitBoardColor = document.getElementById('submit-boardColor');
const boardColor = document.getElementById('boardSelector');

submitBoardColor.onclick = ()=>{

    colorPicked = boardColor.value;
    
    const boardPicked = boardColors.find((item) => {
        return item.board === colorPicked;
    });

    console.log(boardPicked.white)

    changeColor(boardPicked.white,boardPicked.black);
}


