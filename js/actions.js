let id = null
let cont = null
let tempo = 0;

function blueSquare(){
    let ob1 = document.getElementById('obj1')
    let pos1 = 0 //x
    let pos2 = 0 //y
    clearInterval(id)
    clearInterval(cont)
    id = setInterval(frame, 10)
    cont = setInterval(atualizarContador,10)
    function frame(){
        if( pos1 == 1160|| pos2 == 460){
            clearInterval(id)
            clearInterval(cont)
            tempo = 0
        }else{
            pos1 += 4.78 //vel em x
            ob1.style.left = pos1+'px'
            pos2 += 2
            
            ob1.style.top = pos2+'px' 
        }
    }

    function atualizarContador() {
        // Exibindo o tempo restante no contador
        document.getElementById("contador").innerHTML = (tempo/100+0.01).toFixed(2) +' segundos ' + ((pos1*2)/1000).toFixed(2)
        tempo++
      }
    
}
    

/* 6 segundo para ir do 0 ao 540 1,16m
/* a cada 5px = 1cm*/ 