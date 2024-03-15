let r = 5 //raio do circulo
let h = (5*r)/2
let id = null
let id2 = null
let g = 2
let col = false



function play(){
    let ob1 = document.getElementById('obj1')
    let ob2 = document.getElementById('obj2')
    let posy = 0
    let posx = 10
    ob1.style.left = posx +'px'
    ob1.style.top = posy +'px';
    clearInterval(id2)
    clearInterval(id)
    id2 = setInterval(verificarColisao, 10)
    id = setInterval(framey, 10)
   
    
    function framey(){ 
        if( posy >= 480){
            clearInterval(id)
            clearInterval(id2)
            tempo = 0
        }else{
            if (col == true){
            posx+=1
            ob1.style.left = posx +'px';
        }else{
            posy+= 1
            ob1.style.top = posy +'px';
            
        }
    }
    }
    function verificarColisao() {
        const div1Rect = ob1.getBoundingClientRect();
        const div2Rect = ob2.getBoundingClientRect();
    
        if (
            div1Rect.right >= div2Rect.left &&
            div1Rect.left <= div2Rect.right &&
            div1Rect.bottom >= div2Rect.top &&
            div1Rect.top <= div2Rect.bottom
        ) {
            col = true;
        } else {
            col = false;
        }
    }
}   
