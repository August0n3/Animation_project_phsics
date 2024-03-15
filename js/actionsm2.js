let m = 5 // massa em kg
let k = 1960 // constante da mola em N/m
let hp = 0.4 // altura em m
let g = 9.8 // gravidade em m/s²
let id = null
let cont = null
let x = ((m * g) + Math.sqrt((m * m * g * g) + (2 * m * hp * g * k))) / k;

x=x*100

let h = hp*100 

let id2= null
let ob2 = document.getElementById('obj2')
let altura_mola = 460 - h*2
let ob1 = document.getElementById('obj1')

function set_alt(){
    let altura_mola = 460 - h*2
    ob2.style.height = altura_mola + 'px' 
    ob1.style.top ='0px'
}   

function play(){
    let posy = 0
    let altura_mola = 460 - h*2
    ob2.style.height = altura_mola  + 'px'
    let cont_mol = -1
    clearInterval(id)
    clearInterval(id2)
    clearInterval(cont)
    id2 = setInterval(com,10)
    id = setInterval(framey,10)
    cont = setInterval(atualizarContador,10)
    function framey(){

        if( posy <=  x*2 + (h*2)){
            posy+=1;
            ob1.style.top = posy +'px';
        }else{
            clearInterval(id)
            clearInterval(cont)
            clearInterval(id2)
            cont_mol = -1
        }

    }

    function com(){
        if(cont_mol >= h*2 ){
            altura_mola-=1
            ob2.style.height = altura_mola  + 'px'
        }
        cont_mol+=1
    }


    function atualizarContador() {
        // Exibindo o tempo restante no contador
        document.getElementById("contador").innerHTML = 'Compressao = '+ x.toFixed(2)+ 'cm '+ posy.toFixed(2)+' ' +  ob2.style.height
      }
}

/* a cada 2px = 1cm*/ 