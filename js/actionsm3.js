let r = 5; // Raio do círculo
let h = (5 * r) / 2;
let id = null;
let g = 2;

function play() {
  let circle = false;
  let ob1 = document.getElementById("obj1");
  let posy = -10;
  let posx = 10;
  let velocidade = 0;
  let dist = 0;
  ob1.style.left = posx + "px";
  ob1.style.top = posy + "px";
  clearInterval(id);

  id = setInterval(framey, 10);

  function framey() {
    console.log(Math.ceil(posx));
    console.log(posy)
    if (posx >= 680) {
      clearInterval(id);
    } else {
        
        if (posx<350 && circle == false) {
            dist = Math.sqrt(((300 - posx) * (300 - posx)) + ((150 - posy) * (150 - posy)));
            if (dist > 320 && posy > 100) {
                let angulo = Math.atan2(posy - 150, posx - 300);
                if (posx > 50) {
                posx += Math.sin(angulo) * 2;
                } else {
                posx += Math.sin(angulo)*3;
                }
            } else {
                posy +=3;
            }
        }
        else{
            circle = true;
            dist = Math.sqrt(((350 - posx) * (350 - posx)) + ((430 - posy) * (430 - posy)));
            //console.log(dist);
            let angulo = Math.atan2(posy - 430, posx - 350);
            if (dist != 50) {
                posy -=  Math.cos((angulo));
                posx +=  Math.sin((angulo));  
            } 
        }

    }
    ob1.style.left = posx + "px";
    ob1.style.top = posy + "px";
  }
}