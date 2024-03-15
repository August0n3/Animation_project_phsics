let id = null
let id2 = null
let cont = null
let tempo = 0
let g = 4   
let vel = 10
function blueSquare(){
    let ob1 = document.getElementById('obj1')
    let pos1 = 0 //x
    let pos2 = 0 //y
    clearInterval(id)
    clearInterval(cont)
    clearInterval(id2)
    id2 = setInterval(framex,vel)
    id = setInterval(framey, vel)
    cont = setInterval(atualizarContador,vel)
    x = 1.25    
    v = 3.05138339921 * x
    
    //v0 = areapercorrida/tempodequeda 
    //tempo de queda = raiz(2*altura/g)   
    function framex(){
        pos1 += 2*v;  
        ob1.style.left = pos1+'px';
    }
    function framey(){ 
        if( pos2 >= 460){
            clearInterval(id)
            clearInterval(cont)
            clearInterval(id2)
            tempo = 0
        }else{
            pos2+=g;
            ob1.style.top = pos2 +'px';
        }
    }
    
    

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    

    function atualizarContador() {
        // Exibindo o tempo restante no contador
        document.getElementById("contador").innerHTML = (tempo/100+0.01).toFixed(2) +' segundos ' + pos1.toFixed(2)+' ' + pos2.toFixed(2) 
        tempo++
      }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* 6 segundo para ir do 0 ao 540 1,16m
/* a cada 4px = 1cm*/ 