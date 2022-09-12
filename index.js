let w_knight = document.createElement("img");
w_knight.src = "img/knightw.png";
w_knight.classList.add('w_knight');

let b_knight = document.createElement("img");
b_knight.src = "img/knightb.png";

let w_queen = document.createElement("img");
w_queen.src = "img/queenw.png";

let b_queen = document.createElement("img");
b_queen.src = "img/queenb.png";

let w_bishot = document.createElement("img");
w_bishot.src = "img/bishopw.png";

let b_bishot = document.createElement("img");
b_bishot.src = "img/bishopb.png";
    


let divs = document.querySelectorAll('.cell');

 let w_knightPosition = divs[Math.floor(Math.random() * divs.length)];
w_knightPosition.append(w_knight);

let w_queenPosition = divs[Math.floor(Math.random() * divs.length)];
let b_queenPosition = divs[Math.floor(Math.random() * divs.length)];
let w_bishotPosition = divs[Math.floor(Math.random() * divs.length)];
let b_bishotPosition = divs[Math.floor(Math.random() * divs.length)];
let b_knightPosition = divs[Math.floor(Math.random() * divs.length)];

function append(el,el1) {
    while (el.innerHTML !== '') {
        el = divs[Math.floor(Math.random() * divs.length)];
    }
    el.append(el1)
}
append(b_knightPosition,b_knight);
append(w_queenPosition,w_queen);
append(b_queenPosition,b_queen);
append(w_bishotPosition, w_bishot);
append(b_bishotPosition, b_bishot);
  



w_knightPosition.addEventListener("click", horse);
b_knightPosition.addEventListener("click", horse)

function horse() {
    let x = this.dataset.x;
    let y = this.dataset.y;
    console.log(x)
    console.log(y)
   
    switch ( 
        ( +x + "n" <= "m" && +y + "n" <= "m") ||
        (+x + "n" <= "m" && +y - "n" >= "m") ||
        ( +x - "n" >= "m" && +y + "n" <= "m") ||
        (+x - "n" >= "m" && +y - "n" >= "m") ||
        (+x + "n" <= "m" && +y - "n" >= "m") ||
        (+x - "n" >= "m" && +y - "n" >= "m") ||
        (+x + "n" <= "m" && +y + "n" <= "m") ||
        (+x - "n" >= "m" && +y + "n" <= "m"))
    {
        case ( +x + 2 <= 8 && +y + 1 <= 8 ):
            document.querySelector(`.cell[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active');
        case (+x + 2 <= 8 && +y - 1 > 0):
            document.querySelector(`.cell[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active'); 
        case ( +x - 2 > 0 && +y + 1 < 8 ):
            document.querySelector(`.cell[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active');
        case ( +x - 2 >= 0 && +y - 1 >= 0):
            document.querySelector(`.cell[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active');
        case ( +x + 1 < 8 && +y - 2 > 0):
            document.querySelector(`.cell[data-x="${+x + 1 }"][data-y="${+y - 2}"]`).classList.add('active'); 
        case ( +x - 1 >= 0 && +y - 2 >= 0):
            document.querySelector(`.cell[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active'); 
        case ( +x + 1 < 8 && +y + 2 < 8):
            document.querySelector(`.cell[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active'); 
        case ( +x - 1 >= 0 && +y + 2 < 8):
            document.querySelector(`.cell[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active'); 
    }
    
    

}


divs.forEach(div => { div.addEventListener("click", change)});

function change(e) {
    const targetElement = e.target
    if( targetElement.closest('.active')) {
       this.innerHTML = ''
       this.append(w_knight)  
       this.addEventListener("click", horse)
       divs.forEach(el => { el.classList.remove('active')})     
    }    
}


 








    /*if (targetElement.closest('.active')) {
        divsActive.forEach(div => { div.innerHTML = ''}) 
        targetElement.append(w_knight) 

        let all = document.querySelectorAll('.active');
     all.forEach(el => { el.classList.remove('active')}) 
    }
    
        

    

}
 

 divs.forEach(div => { div.addEventListener("click", active)})

 function active(e) {
    const targetElement = e.target;
    if(targetElement.innerHTML != '') {

        targetElement.addEventListener("click", horse)
    }

 }
*/
 








 



    


/*document.querySelector('.active').addEventListener("click", moveHorse);


    let result2 = document.querySelector('.active');

function moveHorse() {
    
    
    
    result2.append(first.img)
    result.innerHTML = ''
  
    let all = document.querySelectorAll('.active');
     all.forEach(el => { el.classList.remove('active')})    

     console.log(result2.dataset.x)
     console.log(result2.dataset.y)
}

result2.addEventListener("click", horse);*/








 





 

 

 

 /*function horse() {

    let position = { x: '', y: '' };
 position.x = first.position.split('_')[0];
 position.y = first.position.split('_')[1];

 let x = position.x;
 let y = position.y;

 console.log(position)

 if ( +x + 2 < 8 && +y + 1 < 8) {
    document.querySelector(`.cell`).classList.add('active')
 }
    
 }
 horse()


 /*coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
    return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
  });

  options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
  main.variables.highlighted = options.slice(0);
  main.methods.togglehighlight(options);
*/



 
 