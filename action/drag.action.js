//Make the DIV element draggagle:

var piece = document.querySelectorAll('.piece')


for (let i = 0; i < piece.length; i++) {
    dragElement(piece[i])
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    //Definem a posição relativa ao mouse
    pos3 = e.clientX;
    pos4 = e.clientY; 
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX; //Horizontal
    pos2 = pos4 - e.clientY; //Vertical
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop-pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft-pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
