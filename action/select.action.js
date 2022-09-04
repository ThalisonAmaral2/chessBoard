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