const lightSquares = document.querySelectorAll('.white');
const darkSquares  = document.querySelectorAll('.black');
const submitBoardColor = document.getElementById('submit-boardColor');
const boardColor = document.getElementById('boardSelector');

//Function with parameters to change the backgroundColor of each square
function changeColor(whiteColor,blackColor){
    for (let i = 0; i < darkSquares.length; i++) {
        lightSquares[i].style.backgroundColor = whiteColor; darkSquares[i].style.backgroundColor = blackColor;
    }
}

//Array of objects with properties for using it in the parameters of the changeColor function
const boardColors = [
    {board:'green',white:'var(--white)',black:'var(--green)'},
    {board:'wood',white:'var(--wood1)',black:'var(--wood3)'},
    {board:'red',white:'var(--white)',black:'var(--red)'},
    {board:'blue',white:'var(--white)',black:'var(--blue)'}
]

//Adding a click function and getting the values from boardColors
submitBoardColor.onclick = ()=>{
    colorPicked = boardColor.value;
    const boardPicked = boardColors.find((item) => {
        return item.board === colorPicked;
    });
    changeColor(boardPicked.white,boardPicked.black);
}


