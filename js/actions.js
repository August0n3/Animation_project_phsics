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
            pos1 += 10 //vel em x
           // pos2 += // vel em
            ob1.style.left = pos1+'px'
            //ob1.style.top = pos2+'px' 
        }
    }

    function atualizarContador() {
        // Exibindo o tempo restante no contador
        document.getElementById("contador").innerHTML = tempo/100+0.01 +' segundos' 
           tempo++
      }
    
}
    

/* 6 segundo para ir do 0 ao 540 1,16m
/* a cada 10px = 1cm*/ 