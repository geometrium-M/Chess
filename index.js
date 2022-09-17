let chess = [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
];

function draw(){
	let out = '';
	let m = 0;
	for (let i = 0; i < chess.length; i++) {
		let arr = chess[i];
		for(let k = 0; k < arr.length; k++) {
			if (m%2 == 0) {
				out += `<div class="cell-block" data-x="${k}" data-y="${i}"></div>`;
			} else {
				out += `<div class="cell-block bg-black" data-x="${k}" data-y="${i}"></div>`;
			}
			m++;
		}
		m++;
	}
	document.querySelector('#field').innerHTML = out;
}
draw();


let w_knight = document.createElement("img");
w_knight.src = "img/knightw.png";

let b_knight = document.createElement("img");
b_knight.src = "img/knightb.png";

let w_queen = document.createElement("img");
w_queen.src = "img/queenw.png";

let b_queen = document.createElement("img");
b_queen.src = "img/queenb.png";

let w_bishop = document.createElement("img");
w_bishop.src = "img/bishopw.png";

let b_bishop = document.createElement("img");
b_bishop.src = "img/bishopb.png";

    
let divs = document.querySelectorAll('.cell-block');

let w_knightPosition = divs[Math.floor(Math.random() * divs.length)];
let w_queenPosition = divs[Math.floor(Math.random() * divs.length)];
let b_queenPosition = divs[Math.floor(Math.random() * divs.length)];
let w_bishopPosition = divs[Math.floor(Math.random() * divs.length)];
let b_bishopPosition = divs[Math.floor(Math.random() * divs.length)];
let b_knightPosition = divs[Math.floor(Math.random() * divs.length)];


let startButton = document.querySelector('.start').addEventListener('click', start);


function append(cell,piece) {
    while (cell.innerHTML !== '') {
        cell = divs[Math.floor(Math.random() * divs.length)];
    }
    cell.append(piece)
}

function start() {
append(w_knightPosition,w_knight);
append(b_knightPosition,b_knight);
append(w_queenPosition,w_queen);
append(b_queenPosition,b_queen);
append(w_bishopPosition, w_bishop);
append(b_bishopPosition, b_bishop);
}



w_knightPosition.addEventListener("click", wrapperHorse('active_wh')); 
b_knightPosition.addEventListener('click',wrapperHorse('active_bh'))
w_queenPosition.addEventListener("click", wrapperQueen('active_wq'));
b_queenPosition.addEventListener("click", wrapperQueen('active_bq')); 
w_bishopPosition.addEventListener("click", wrapperBishop('active_wb')); 
b_bishopPosition.addEventListener("click", wrapperBishop('active_bb')); 



function wrapperHorse(arg) {
    
    return function horse()  {
        let x = this.dataset.x;
        let y = this.dataset.y;
    
        if ( (+x + 2 < 8) && (+y + 1 < 8)) {
            document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.toggle(arg);
        } 
            
        if ( (+x + 2 < 8) && (+y - 1 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.toggle(arg);
        }
                
        if ( (+x - 2 >= 0) && (+y + 1 < 8 )) {
            document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.toggle(arg);
        }
    
        if ( (+x - 2 >= 0) && (+y - 1 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.toggle(arg); 
        }
    
        if ( (+x + 1 < 8) && (+y - 2 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.toggle(arg);
        }
            
        if ( (+x - 1 >= 0) && (+y - 2 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.toggle(arg);
        }
    
        if ( (+x + 1 < 8) && (+y + 2 < 8)) {
            document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.toggle(arg);
        }
            
        if ( (+x - 1 >= 0) && (+y + 2 < 8)) {
            document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.toggle(arg);
        } 	
    }
}


function wrapperBishop(arg) {
    
	return function bishop() {
		let x = this.dataset.x;
		let y = this.dataset.y;
	
	
		if ( (+x + 1 < 8) && (+y + 1 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 1}"]`).classList.toggle(arg);     
		} 
		if ( (+x + 2 < 8) && (+y + 2 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 2}"]`).classList.toggle(arg); 
		}
		if ( (+x + 3 < 8) && (+y + 3 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y + 3}"]`).classList.toggle(arg); 
		}
		if ( (+x + 4 < 8) && (+y + 4 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y + 4}"]`).classList.toggle(arg); 
		}
		if ( (+x + 5 < 8) && (+y + 5 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y + 5}"]`).classList.toggle(arg); 
		}
		if ( (+x + 6 < 8) && (+y + 6 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y + 6}"]`).classList.toggle(arg); 
		}
		if ( (+x + 7 <= 8) && (+y + 7 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y + 7}"]`).classList.toggle(arg); 
		}
	//-//
		if ( (+x - 1 >= 0) && (+y + 1 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 1}"]`).classList.toggle(arg);     
		} 
		if ( (+x - 2 >=0 ) && (+y + 2 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 2}"]`).classList.toggle(arg); 
		}
		if ( (+x - 3 >= 0 ) && (+y + 3 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y + 3}"]`).classList.toggle(arg); 
		}
		if ( (+x - 4 >= 0 ) && (+y + 4 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y + 4}"]`).classList.toggle(arg); 
		}
		if ( (+x - 5 >= 0) && (+y + 5 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y + 5}"]`).classList.toggle(arg); 
		}
		if ( (+x - 6 >= 0) && (+y + 6 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y + 6}"]`).classList.toggle(arg); 
		}
		if ( (+x - 7 >= 0) && (+y + 7 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y + 7}"]`).classList.toggle(arg); 
		}
	//-//
	
		if ( (+x - 1 >= 0) && (+y - 1 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 1}"]`).classList.toggle(arg);     
		} 
		if ( (+x - 2 >=0 ) && (+y - 2 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 2}"]`).classList.toggle(arg); 
		}
		if ( (+x - 3 >= 0 ) && (+y - 3 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y - 3}"]`).classList.toggle(arg); 
		}
		if ( (+x - 4 >= 0 ) && (+y - 4 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y - 4}"]`).classList.toggle(arg); 
		}
		if ( (+x - 5 >= 0) && (+y - 5 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y - 5}"]`).classList.toggle(arg); 
		}
		if ( (+x - 6 >= 0) && (+y - 6 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y - 6}"]`).classList.toggle(arg); 
		}
		if ( (+x - 7 >= 0) && (+y - 7 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y - 7}"]`).classList.toggle(arg); 
		}
	//-//
		if ( (+x + 1 < 8) && (+y - 1 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 1}"]`).classList.toggle(arg);     
		} 
		if ( (+x + 2 < 8 ) && (+y - 2 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 2}"]`).classList.toggle(arg); 
		}
		if ( (+x + 3 < 8) && (+y - 3 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y - 3}"]`).classList.toggle(arg); 
		}
		if ( (+x + 4 < 8 ) && (+y - 4 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y - 4}"]`).classList.toggle(arg); 
		}
		if ( (+x + 5 < 8) && (+y - 5 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y - 5}"]`).classList.toggle(arg); 
		}
		if ( (+x + 6 < 8) && (+y - 6 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y - 6}"]`).classList.toggle(arg); 
		}
		if ( (+x + 7 <= 8) && (+y - 7 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y - 7}"]`).classList.toggle(arg); 
		}
	} 
}




function wrapperQueen(arg) {
return function queen() {
	let x = this.dataset.x;
    let y = this.dataset.y;

        if ( (+x + 1 <= 7) && (+y + 1  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 1}"]`).classList.toggle(arg);     
        } 
        if ( (+x + 2 <= 7) && (+y + 2  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 2}"]`).classList.toggle(arg); 
        }
        if ( (+x + 3 <= 7) && (+y + 3  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y + 3}"]`).classList.toggle(arg); 
        }
        if ( (+x + 4 <= 7) && (+y + 4  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y + 4}"]`).classList.toggle(arg); 
        }
        if ( (+x + 5  <= 7) && (+y + 5  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y + 5}"]`).classList.toggle(arg); 
        }
        if ( (+x + 6 <= 7) && (+y + 6  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y + 6}"]`).classList.toggle(arg); 
        }
	
//-//
        if ( (+x - 1 >= 0) && (+y + 1  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 1}"]`).classList.toggle(arg);     
        } 
        if ( (+x - 2 >=0 ) && (+y + 2 <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 2}"]`).classList.toggle(arg); 
        }
        if ( (+x - 3 >= 0 ) && (+y + 3  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y + 3}"]`).classList.toggle(arg); 
        }
        if ( (+x - 4 >= 0 ) && (+y + 4  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y + 4}"]`).classList.toggle(arg); 
        }
        if ( (+x - 5 >= 0) && (+y + 5  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y + 5}"]`).classList.toggle(arg); 
        }
        if ( (+x - 6 >= 0) && (+y + 6  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y + 6}"]`).classList.toggle(arg); 
        }
        if ( (+x - 7 >= 0) && (+y + 7  <= 7)) {
            document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y + 7}"]`).classList.toggle(arg); 
        }
//-//
        if ( (+x - 1 >= 0) && (+y - 1 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 1}"]`).classList.toggle(arg);     
        } 
        if ( (+x - 2 >=0 ) && (+y - 2 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 2}"]`).classList.toggle(arg); 
        }
        if ( (+x - 3 >= 0 ) && (+y - 3 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y - 3}"]`).classList.toggle(arg); 
        }
        if ( (+x - 4 >= 0 ) && (+y - 4 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y - 4}"]`).classList.toggle(arg); 
        }
        if ( (+x - 5 >= 0) && (+y - 5 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y - 5}"]`).classList.toggle(arg); 
        }
        if ( (+x - 6 >= 0) && (+y - 6 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y - 6}"]`).classList.toggle(arg); 
        }
        if ( (+x - 7 >= 0) && (+y - 7 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y - 7}"]`).classList.toggle(arg); 
        }
//-//
        if ( (+x + 1  <= 7) && (+y - 1 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 1}"]`).classList.toggle(arg);     
        } 
        if ( (+x + 2  <= 7 ) && (+y - 2 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 2}"]`).classList.toggle(arg); 
        }
        if ( (+x + 3  <= 7) && (+y - 3 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y - 3}"]`).classList.toggle(arg); 
        }
        if ( (+x + 4  <= 7 ) && (+y - 4 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y - 4}"]`).classList.toggle(arg); 
        }
        if ( (+x + 5  <= 7) && (+y - 5 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y - 5}"]`).classList.toggle(arg); 
        }
        if ( (+x + 6  <= 7) && (+y - 6 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y - 6}"]`).classList.toggle(arg); 
        }
        if ( (+x + 7  <= 7) && (+y - 7 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y - 7}"]`).classList.toggle(arg); 
        }
//--//
        if ( (+x >= 0 ) && (+y - 1 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 1}"]`).classList.toggle(arg);     
        } 
        if ( (+x >= 0 ) && (+y - 2 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 2}"]`).classList.toggle(arg); 
        }
        if ( (+x >= 0 ) && (+y - 3 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 3}"]`).classList.toggle(arg); 
        }
        if ( (+x >= 0 ) && (+y - 4 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 4}"]`).classList.toggle(arg); 
        }
        if ( (+x >= 0 ) && (+y - 5 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 5}"]`).classList.toggle(arg); 
        }
        if ( (+x >= 0 ) && (+y - 6 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 6}"]`).classList.toggle(arg); 
        }
        if ( (+x >= 0 ) && (+y - 7 >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 7}"]`).classList.toggle(arg); 
        }
//-//
        if ( (+x >= 0 ) && (+y + 1 <=7)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 1}"]`).classList.toggle(arg);     
        }
        if ( (+x >= 0 ) && (+y + 2 <=7)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 2}"]`).classList.toggle(arg);     
        }
        if ( (+x >= 0 ) && (+y + 3 <=7)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 3}"]`).classList.toggle(arg);     
        }
        if ( (+x >= 0 ) && (+y + 4 <=7)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 4}"]`).classList.toggle(arg);     
        }
        if ( (+x >= 0 ) && (+y + 5 <=7)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 5}"]`).classList.toggle(arg);     
        }
        if ( (+x >= 0 ) && (+y + 6 <=7)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 6}"]`).classList.toggle(arg);     
        }
        if ( (+x >= 0 ) && (+y + 7 == 7)) {
            document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 7}"]`).classList.toggle(arg);     
        }
//-// 
        if ( (+x - 1 >= 0 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x - 2 >= 0 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x - 3 >= 0 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x - 4 >= 0 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x - 5 >= 0 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x - 6 >= 0 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x - 7 >= 0 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
//-// 
        if ( (+x + 1 <= 7 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x + 2 <= 7 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x + 3 <= 7 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x + 4 <= 7 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x + 5 <= 7 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x + 6 <= 7 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
        if ( (+x + 7 == 7 ) && (+y >= 0)) {
            document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y}"]`).classList.toggle(arg);     
        }
    } 
}







 















 



    










 





 

 

 


 
 