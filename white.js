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


let divs = document.querySelectorAll('.cell-block');
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

 


w_knightPosition.addEventListener("click", wrapperHorse('active_hw'), {once: true});
b_knightPosition.addEventListener("click", wrapperHorse('active_hb'), {once: true});

function wrapperHorse(arg) {
return function horse() {
		let x = this.dataset.x;
    	let y = this.dataset.y;
		console.log(x);
		console.log(y);
	

	
	
	if ( (+x + 2 < 8) && (+y + 1 < 8)) {
        document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.toggle(arg);     
    } 
    if ( (+x + 2 < 8) && (+y - 1 >= 0)) {
        document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.toggle(arg); 
    }
    if ( (+x - 2 >= 0) && (+y + 1 <= 8 )) {
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


w_bishotPosition.addEventListener("click", wrapperBishop('active_bw'), {once: true});
b_bishotPosition.addEventListener("click", wrapperBishop('active_bb'), {once: true});

function wrapperBishop(arg) {
    
	return function bishop() {

		let x = this.dataset.x;
		let y = this.dataset.y;
		console.log(x)
		console.log(y)
	
		if ( (+x + 1 < 8) && (+y + 1 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 1}"]`).classList.add(arg);     
		} 
		if ( (+x + 2 < 8) && (+y + 2 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 2}"]`).classList.add(arg); 
		}
		if ( (+x + 3 < 8) && (+y + 3 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y + 3}"]`).classList.add(arg); 
		}
		if ( (+x + 4 < 8) && (+y + 4 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y + 4}"]`).classList.add(arg); 
		}
		if ( (+x + 5 < 8) && (+y + 5 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y + 5}"]`).classList.add(arg); 
		}
		if ( (+x + 6 < 8) && (+y + 6 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y + 6}"]`).classList.add(arg); 
		}
		if ( (+x + 7 <= 8) && (+y + 7 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y + 7}"]`).classList.add(arg); 
		}
	//-//
		if ( (+x - 1 >= 0) && (+y + 1 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 1}"]`).classList.add(arg);     
		} 
		if ( (+x - 2 >=0 ) && (+y + 2 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 2}"]`).classList.add(arg); 
		}
		if ( (+x - 3 >= 0 ) && (+y + 3 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y + 3}"]`).classList.add(arg); 
		}
		if ( (+x - 4 >= 0 ) && (+y + 4 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y + 4}"]`).classList.add(arg); 
		}
		if ( (+x - 5 >= 0) && (+y + 5 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y + 5}"]`).classList.add(arg); 
		}
		if ( (+x - 6 >= 0) && (+y + 6 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y + 6}"]`).classList.add(arg); 
		}
		if ( (+x - 7 >= 0) && (+y + 7 < 8)) {
			document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y + 7}"]`).classList.add(arg); 
		}
	//-//
	
		if ( (+x - 1 >= 0) && (+y - 1 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 1}"]`).classList.add(arg);     
		} 
		if ( (+x - 2 >=0 ) && (+y - 2 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 2}"]`).classList.add(arg); 
		}
		if ( (+x - 3 >= 0 ) && (+y - 3 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y - 3}"]`).classList.add(arg); 
		}
		if ( (+x - 4 >= 0 ) && (+y - 4 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y - 4}"]`).classList.add(arg); 
		}
		if ( (+x - 5 >= 0) && (+y - 5 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y - 5}"]`).classList.add(arg); 
		}
		if ( (+x - 6 >= 0) && (+y - 6 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y - 6}"]`).classList.add(arg); 
		}
		if ( (+x - 7 >= 0) && (+y - 7 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y - 7}"]`).classList.add(arg); 
		}
	//-//
		if ( (+x + 1 < 8) && (+y - 1 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 1}"]`).classList.add(arg);     
		} 
		if ( (+x + 2 < 8 ) && (+y - 2 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 2}"]`).classList.add(arg); 
		}
		if ( (+x + 3 < 8) && (+y - 3 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y - 3}"]`).classList.add(arg); 
		}
		if ( (+x + 4 < 8 ) && (+y - 4 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y - 4}"]`).classList.add(arg); 
		}
		if ( (+x + 5 < 8) && (+y - 5 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y - 5}"]`).classList.add(arg); 
		}
		if ( (+x + 6 < 8) && (+y - 6 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y - 6}"]`).classList.add(arg); 
		}
		if ( (+x + 7 <= 8) && (+y - 7 >= 0)) {
			document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y - 7}"]`).classList.add(arg); 
		}
		
	
	
		
	
	
	
	} 
}


w_queenPosition.addEventListener("click", wrapperQueen('active_wq'), {once: true});
b_queenPosition.addEventListener("click", wrapperQueen('active_bq'), {once: true});

function wrapperQueen(arg) {
return function queen() {
	let x = this.dataset.x;
    let y = this.dataset.y;
    console.log(x)
    console.log(y)

	if ( (+x + 1 <= 7) && (+y + 1  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 1}"]`).classList.add(arg);     
    } 
    if ( (+x + 2 <= 7) && (+y + 2  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 2}"]`).classList.add(arg); 
    }
	if ( (+x + 3 <= 7) && (+y + 3  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y + 3}"]`).classList.add(arg); 
    }
	if ( (+x + 4 <= 7) && (+y + 4  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y + 4}"]`).classList.add(arg); 
    }
	if ( (+x + 5  <= 7) && (+y + 5  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y + 5}"]`).classList.add(arg); 
    }
	if ( (+x + 6 <= 7) && (+y + 6  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y + 6}"]`).classList.add(arg); 
    }
	
//-//
	if ( (+x - 1 >= 0) && (+y + 1  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 1}"]`).classList.add(arg);     
    } 
    if ( (+x - 2 >=0 ) && (+y + 2 <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 2}"]`).classList.add(arg); 
    }
	if ( (+x - 3 >= 0 ) && (+y + 3  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y + 3}"]`).classList.add(arg); 
    }
	if ( (+x - 4 >= 0 ) && (+y + 4  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y + 4}"]`).classList.add(arg); 
    }
	if ( (+x - 5 >= 0) && (+y + 5  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y + 5}"]`).classList.add(arg); 
    }
	if ( (+x - 6 >= 0) && (+y + 6  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y + 6}"]`).classList.add(arg); 
    }
	if ( (+x - 7 >= 0) && (+y + 7  <= 7)) {
        document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y + 7}"]`).classList.add(arg); 
    }
//-//

	if ( (+x - 1 >= 0) && (+y - 1 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 1}"]`).classList.add(arg);     
	} 
	if ( (+x - 2 >=0 ) && (+y - 2 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 2}"]`).classList.add(arg); 
	}
	if ( (+x - 3 >= 0 ) && (+y - 3 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y - 3}"]`).classList.add(arg); 
	}
	if ( (+x - 4 >= 0 ) && (+y - 4 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y - 4}"]`).classList.add(arg); 
	}
	if ( (+x - 5 >= 0) && (+y - 5 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y - 5}"]`).classList.add(arg); 
	}
	if ( (+x - 6 >= 0) && (+y - 6 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y - 6}"]`).classList.add(arg); 
	}
	if ( (+x - 7 >= 0) && (+y - 7 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y - 7}"]`).classList.add(arg); 
	}
//-//
	if ( (+x + 1  <= 7) && (+y - 1 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 1}"]`).classList.add(arg);     
	} 
	if ( (+x + 2  <= 7 ) && (+y - 2 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 2}"]`).classList.add(arg); 
	}
	if ( (+x + 3  <= 7) && (+y - 3 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y - 3}"]`).classList.add(arg); 
	}
	if ( (+x + 4  <= 7 ) && (+y - 4 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y - 4}"]`).classList.add(arg); 
	}
	if ( (+x + 5  <= 7) && (+y - 5 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y - 5}"]`).classList.add(arg); 
	}
	if ( (+x + 6  <= 7) && (+y - 6 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y - 6}"]`).classList.add(arg); 
	}
	if ( (+x + 7  <= 7) && (+y - 7 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y - 7}"]`).classList.add(arg); 
	}
//--//
	if ( (+x >= 0 ) && (+y - 1 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 1}"]`).classList.add(arg);     
	} 
	if ( (+x >= 0 ) && (+y - 2 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 2}"]`).classList.add(arg); 
	}
	if ( (+x >= 0 ) && (+y - 3 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 3}"]`).classList.add(arg); 
	}
	if ( (+x >= 0 ) && (+y - 4 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 4}"]`).classList.add(arg); 
	}
	if ( (+x >= 0 ) && (+y - 5 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 5}"]`).classList.add(arg); 
	}
	if ( (+x >= 0 ) && (+y - 6 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 6}"]`).classList.add(arg); 
	}
	if ( (+x >= 0 ) && (+y - 7 >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 7}"]`).classList.add(arg); 
	}
//-//
	if ( (+x >= 0 ) && (+y + 1 <=7)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 1}"]`).classList.add(arg);     
	}
	if ( (+x >= 0 ) && (+y + 2 <=7)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 2}"]`).classList.add(arg);     
	}
	if ( (+x >= 0 ) && (+y + 3 <=7)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 3}"]`).classList.add(arg);     
	}
	if ( (+x >= 0 ) && (+y + 4 <=7)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 4}"]`).classList.add(arg);     
	}
	if ( (+x >= 0 ) && (+y + 5 <=7)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 5}"]`).classList.add(arg);     
	}
	if ( (+x >= 0 ) && (+y + 6 <=7)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 6}"]`).classList.add(arg);     
	}
	if ( (+x >= 0 ) && (+y + 7 == 7)) {
		document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 7}"]`).classList.add(arg);     
	}
//-// 
	if ( (+x - 1 >= 0 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x - 2 >= 0 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x - 3 >= 0 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x - 4 >= 0 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x - 5 >= 0 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x - 6 >= 0 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x - 7 >= 0 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y}"]`).classList.add(arg);     
	}
//-// 
	if ( (+x + 1 <= 7 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x + 2 <= 7 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x + 3 <= 7 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x + 4 <= 7 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x + 5 <= 7 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x + 6 <= 7 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y}"]`).classList.add(arg);     
	}
	if ( (+x + 7 == 7 ) && (+y >= 0)) {
		document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y}"]`).classList.add(arg);     
	}
} 
}


divs.forEach(div => { div.addEventListener("click", change)});

function change(e) {
    const targetElement = e.target

	

    if ( targetElement.closest('.active_hw')) {
       this.innerHTML = ''
       this.append(w_knight)  
       this.addEventListener("click", wrapperHorse('active_hw'))
       divs.forEach(el => { el.classList.remove('active_hw')})     
    }    
	if ( targetElement.closest('.active_hb')) {
		this.innerHTML = ''
		this.append(b_knight)  
		this.addEventListener("click", wrapperHorse('active_hb'))
		divs.forEach(el => { el.classList.remove('active_hb')}) 
		    
	}
	if ( targetElement.closest('.active_bw')) {
		this.innerHTML = ''
		this.append(w_bishot)  
		this.addEventListener("click", wrapperBishop('active_bw'))
		divs.forEach(el => { el.classList.remove('active_bw')}) 	    
	}
	if ( targetElement.closest('.active_bb')) {
		this.innerHTML = ''
		this.append(b_bishot)  
		this.addEventListener("click", wrapperBishop('active_bb'))
		divs.forEach(el => { el.classList.remove('active_bb')}) 	    
	}
	if ( targetElement.closest('.active_wq')) {
		this.innerHTML = ''
		this.append(w_queen)  
		this.addEventListener("click", wrapperQueen('active_wq'))
		divs.forEach(el => { el.classList.remove('active_wq')}) 	    
	}
	if ( targetElement.closest('.active_bq')) {
		this.innerHTML = ''
		this.append(b_queen)  
		this.addEventListener("click", wrapperQueen('active_bq'))
		divs.forEach(el => { el.classList.remove('active_bq')}) 	    
	}
}