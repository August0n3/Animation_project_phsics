let r = 5 //raio do circulo
let h = (5*r)/2
let id = null
let id2 = null
let g = 2
let col = false



function play(){
    let ob1 = document.getElementById('obj1')
    let posy = -10
    let posx = 10
    let dist = 0
    ob1.style.left = posx +'px'
    ob1.style.top = posy +'px';
    clearInterval(id2)
    clearInterval(id)
    id = setInterval(framey, 10)
  
    function framey(){ 
        if( posy >= 480){
            clearInterval(id)
            clearInterval(id2)
            tempo = 0
        }else{
            let dist = Math.sqrt( ((300-posx)*(300-posx))  + ((150-posy)*(150-posy)))
            console.log(dist)
            if (dist > 320 && posy>100){
                if (posx > 50){
                    posx+=2
                }
                else{
                    posx+=1
                }
            ob1.style.left = posx +'px';
            }else{
            posy+=4
            ob1.style.top = posy +'px';
            }
        }
    }
}   
