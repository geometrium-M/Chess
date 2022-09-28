

function draw(){
	let out = '';
	let m = 0;
	for (let i = 0; i < 8; i++) { 
		for(let k = 0; k < 8; k++) {
			if (m % 2 == 0) { 
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


let start = document.querySelector('.start').addEventListener('click', promiseClick)

let w_knightPiece = divs[Math.floor(Math.random() * divs.length)];
let w_queenPiece = divs[Math.floor(Math.random() * divs.length)];
let w_bishopPiece = divs[Math.floor(Math.random() * divs.length)];
let b_knightPiece = divs[Math.floor(Math.random() * divs.length)];
let b_queenPiece = divs[Math.floor(Math.random() * divs.length)];
let b_bishopPiece = divs[Math.floor(Math.random() * divs.length)];


let arrayW = [];
arrayW.push(w_knightPiece);
arrayW.push(w_queenPiece);
arrayW.push(w_bishopPiece);
		
let arrayB = [];
arrayB.push(b_knightPiece);
arrayB.push(b_queenPiece);
arrayB.push(b_bishopPiece);



let place =  function(el,img) {
	while (el.innerHTML !== '') {
		el = divs[Math.floor(Math.random() * divs.length)];
	}
	el.append(img);	
}


function promiseClick() {
	
	return new Promise(function(resolve,reject) {
		
	place(w_knightPiece, w_knight);
	place(b_knightPiece, b_knight),
	place(w_queenPiece, w_queen);
	place(b_queenPiece, b_queen);
	place(w_bishopPiece, w_bishop);
	place(b_bishopPiece, b_bishop);

	resolve()

	}).then(()=>  {
		shuffle(arrayW);
        shuffle(arrayB);
	

	}).then(()=> { 
		go(arrayW,arrayB)
	})
}


function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
	  let j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]];
	}
	
  }
   
function go(array1,array2) {
	step(array1[0]);
	setTimeout(()=> step(array2[0]),1000);
	setTimeout(()=> step(array1[1]),2000);
	setTimeout(()=> step(array2[1]),3000);
	setTimeout(()=> step(array1[2]),4000);
	setTimeout(()=> step(array2[2]),5000);
}
	

function step(piece) {
	
	if (piece.contains(w_knight)) {
		Horse.bind(piece, w_knight)()
	}
	
	if (piece.contains(b_knight)) {
		Horse.bind(piece, b_knight)()			
	}	

	if (piece.contains(w_queen)) {
		Queen.bind(piece, w_queen)()	
	}

	if (piece.contains(b_queen)) {
		Queen.bind(piece, b_queen)()			
	}

	if (piece.contains(w_bishop)) {			
		Bishop.bind(piece, w_bishop)()
	}

	if (piece.contains(b_bishop)) {
		Bishop.bind(piece, b_bishop)()	
	}
}

	
function Horse(arg)  {
	let x = this.dataset.x;
	let y = this.dataset.y;

		
	let arr = [];
	
	if ( (+x + 2 < 8) && (+y + 1 < 8)) {
		let p1 =  document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 1}"]`);
		arr.push(p1)    
	} 

	if ( (+x + 2 < 8) && (+y - 1 >= 0)) {
		let p2 = document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 1}"]`);
		arr.push(p2)
	}

	if ( (+x - 2 >= 0) && (+y + 1 < 8 )) {
		let p3 = document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 1}"]`);
		arr.push(p3)
	}

	if ( (+x - 2 >= 0) && (+y - 1 >= 0)) {
		let p4 = document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 1}"]`); 
		arr.push(p4)
	}

	if ( (+x + 1 < 8) && (+y - 2 >= 0)) {
		let p5 = document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 2}"]`);
		arr.push(p5)
	}

	if ( (+x - 1 >= 0) && (+y - 2 >= 0)) {
		let p6 = document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 2}"]`);
		arr.push(p6)
	}

	if ( (+x + 1 < 8) && (+y + 2 < 8)) {
		let p7 = document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 2}"]`);
		arr.push(p7)
	}

	if ( (+x - 1 >= 0) && (+y + 2 < 8)) {
		let p8 = document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 2}"]`); 
		arr.push(p8)
	} 
	
	let step = arr[Math.floor(Math.random() * arr.length)];
		
	setTimeout(() => {
		step.innerHTML = '';
		step.append(arg)
	},2000)		
}


function Bishop(arg) {
    
	let x = this.dataset.x;
	let y = this.dataset.y;
	let arr = [];
			
	if ( (+x + 1 < 8) && (+y + 1 < 8)) {
		let p1 = document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 1}"]`);  
		arr.push(p1);
	}

	if ( (+x + 2 < 8) && (+y + 2 < 8)) {
		let p2 = document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 2}"]`); 
		arr.push(p2);
	}

	if ( (+x + 3 < 8) && (+y + 3 < 8)) {
		let p3 = document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y + 3}"]`); 
		arr.push(p3);
	}

	if ( (+x + 4 < 8) && (+y + 4 < 8)) {
		let p4 = document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y + 4}"]`); 
		arr.push(p4);
	}

	if ( (+x + 5 < 8) && (+y + 5 < 8)) {
		let p5 = document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y + 5}"]`); 
		arr.push(p5);
	}

	if ( (+x + 6 < 8) && (+y + 6 < 8)) {
		let p6 = document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y + 6}"]`); 
		arr.push(p6);
	}

	if ( (+x + 7 <= 8) && (+y + 7 < 8)) {
		let p7 = document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y + 7}"]`); 
		arr.push(p7);
	}
		//-//
	if ( (+x - 1 >= 0) && (+y + 1 < 8)) {
		let p8 = document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 1}"]`);  
		arr.push(p8);   
	} 
			
	if ( (+x - 2 >=0 ) && (+y + 2 < 8)) {
		let p9 = document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 2}"]`); 
		arr.push(p9);
	}

	if ( (+x - 3 >= 0 ) && (+y + 3 < 8)) {
		let p10 = document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y + 3}"]`); 
		arr.push(p10);
	}

	if ( (+x - 4 >= 0 ) && (+y + 4 < 8)) {
		let p11 = document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y + 4}"]`); 
		arr.push(p11);
	}

	if ( (+x - 5 >= 0) && (+y + 5 < 8)) {
		let p12 = document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y + 5}"]`); 
		arr.push(p12);
	}

	if ( (+x - 6 >= 0) && (+y + 6 < 8)) {
		let p13 = document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y + 6}"]`); 
		arr.push(p13);
	}

	if ( (+x - 7 >= 0) && (+y + 7 < 8)) {
		let p14 = document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y + 7}"]`); 
		arr.push(p14);
	}
		//-//
		
	if ( (+x - 1 >= 0) && (+y - 1 >= 0)) {
		let p15 = document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 1}"]`);   
		arr.push(p15);  
	}

	if ( (+x - 2 >=0 ) && (+y - 2 >= 0)) {
		let p16 = document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 2}"]`); 
		arr.push(p16);
	}

	if ( (+x - 3 >= 0 ) && (+y - 3 >= 0)) {
		let p17 = document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y - 3}"]`); 
		arr.push(p17);
	}

	if ( (+x - 4 >= 0 ) && (+y - 4 >= 0)) {
		let p18 = document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y - 4}"]`); 
		arr.push(p18);
	}

	if ( (+x - 5 >= 0) && (+y - 5 >= 0)) {
		let p20 = document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y - 5}"]`); 
		arr.push(p20);
	}

	if ( (+x - 6 >= 0) && (+y - 6 >= 0)) {
		let p21 = document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y - 6}"]`); 
		arr.push(p21);
	}
	
	if ( (+x - 7 >= 0) && (+y - 7 >= 0)) {
		let p22 = document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y - 7}"]`); 
		arr.push(p22);
	}
		//-//
	if ( (+x + 1 < 8) && (+y - 1 >= 0)) {
		let p23 = document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 1}"]`);    
		arr.push(p23); 
	} 
			
	if ( (+x + 2 < 8 ) && (+y - 2 >= 0)) {
		let p24 = document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 2}"]`); 
		arr.push(p24);
	}
			
	if ( (+x + 3 < 8) && (+y - 3 >= 0)) {
		let p25 = document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y - 3}"]`); 
		arr.push(p25);
	}
			
	if ( (+x + 4 < 8 ) && (+y - 4 >= 0)) {
		let p26 = document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y - 4}"]`); 
		arr.push(p26);
	}
			
	if ( (+x + 5 < 8) && (+y - 5 >= 0)) {
		let p27 = document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y - 5}"]`); 
		arr.push(p27);
	}
			
	if ( (+x + 6 < 8) && (+y - 6 >= 0)) {
		let p28 = document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y - 6}"]`); 
		arr.push(p28);
	}
			
	if ( (+x + 7 <= 8) && (+y - 7 >= 0)) {
		let p29 = document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y - 7}"]`); 
		arr.push(p29);
	}

	let step = arr[Math.floor(Math.random() * arr.length)];

	setTimeout(() => {
		step.innerHTML = '';
		step.append(arg)
	},2000)	
}


function Queen(arg) {
	let x = this.dataset.x;
	let y = this.dataset.y;
	let arr = [];
		
	if ( (+x + 1 <= 7) && (+y + 1  <= 7)) {
		let p1 = document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y + 1}"]`);     
		arr.push(p1);
	} 
			
	if ( (+x + 2 <= 7) && (+y + 2  <= 7)) {
		let p2 = document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y + 2}"]`);
		arr.push(p2);
	}
			
	if ( (+x + 3 <= 7) && (+y + 3  <= 7)) {
		let p3 = document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y + 3}"]`);
		arr.push(p3);
	}
			
	if ( (+x + 4 <= 7) && (+y + 4  <= 7)) {
		let p4 = document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y + 4}"]`);
		arr.push(p4);
	}
			
	if ( (+x + 5  <= 7) && (+y + 5  <= 7)) {
		let p5 = document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y + 5}"]`);
		arr.push(p5);
	}
			
	if ( (+x + 6 <= 7) && (+y + 6  <= 7)) {
		let p6 = document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y + 6}"]`);
		arr.push(p6);
	}
			
		//-//
	if ( (+x - 1 >= 0) && (+y + 1  <= 7)) {
		let p7 = document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y + 1}"]`);   
		arr.push(p7);
	} 
			
	if ( (+x - 2 >=0 ) && (+y + 2 <= 7)) {
		let p8 = document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y + 2}"]`);
		arr.push(p8);
	}
			
	if ( (+x - 3 >= 0 ) && (+y + 3  <= 7)) {
		let p9 = document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y + 3}"]`);
		arr.push(p9);
	}
			
	if ( (+x - 4 >= 0 ) && (+y + 4  <= 7)) {
		let p10 = document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y + 4}"]`);
		arr.push(p10);
	}
			
	if ( (+x - 5 >= 0) && (+y + 5  <= 7)) {
		let p11 = document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y + 5}"]`);
		arr.push(p11);
	}
			
	if ( (+x - 6 >= 0) && (+y + 6  <= 7)) {
		let p12 = document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y + 6}"]`);
		arr.push(p12)
	}
			
	if ( (+x - 7 >= 0) && (+y + 7  <= 7)) {
		let p13 = document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y + 7}"]`);
		arr.push(p13);
	}
		//-//
		
	if ( (+x - 1 >= 0) && (+y - 1 >= 0)) {
		let p14 = document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y - 1}"]`);    
		arr.push(p14);
	} 

	if ( (+x - 2 >=0 ) && (+y - 2 >= 0)) {
		let p15 = document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y - 2}"]`);
		arr.push(p15);
	}

	if ( (+x - 3 >= 0 ) && (+y - 3 >= 0)) {
		let p16 = document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y - 3}"]`);
		arr.push(p16);
	}
			
	if ( (+x - 4 >= 0 ) && (+y - 4 >= 0)) {
		let p17 = document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y - 4}"]`);
		arr.push(p17);
	}

	if ( (+x - 5 >= 0) && (+y - 5 >= 0)) {
		let p18 = document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y - 5}"]`);
		arr.push(p18);
	}
			
	if ( (+x - 6 >= 0) && (+y - 6 >= 0)) {
		let p19 = document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y - 6}"]`);
		arr.push(p19);
	}
			
	if ( (+x - 7 >= 0) && (+y - 7 >= 0)) {
		let p20 = document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y - 7}"]`);
		arr.push(p20);
	}
		//-//
			
	if ( (+x + 1  <= 7) && (+y - 1 >= 0)) {
		let p21 = document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y - 1}"]`);    
		arr.push(p21);
	} 
			
	if ( (+x + 2  <= 7 ) && (+y - 2 >= 0)) {
		let p22 = document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y - 2}"]`); 
		arr.push(p22);
	}
			
	if ( (+x + 3  <= 7) && (+y - 3 >= 0)) {
		let p23 = document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y - 3}"]`);
		arr.push(p23);
	}

	if ( (+x + 4  <= 7 ) && (+y - 4 >= 0)) {
		let p24 = document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y - 4}"]`); 
		arr.push(p24);
	}

	if ( (+x + 5  <= 7) && (+y - 5 >= 0)) {
		let p25 = document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y - 5}"]`); 
		arr.push(p25);
	}
			
	if ( (+x + 6  <= 7) && (+y - 6 >= 0)) {
		let p26 = document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y - 6}"]`);
		arr.push(p26);
	}
			
	if ( (+x + 7  <= 7) && (+y - 7 >= 0)) {
		let p27 = document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y - 7}"]`);
		arr.push(p27);
	}
		//--//
			
	if ( (+x >= 0 ) && (+y - 1 >= 0)) {
		let p28 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 1}"]`);
		arr.push(p28);   
	} 
			
	if ( (+x >= 0 ) && (+y - 2 >= 0)) {
		let p29 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 2}"]`);
		arr.push(p29); 
	}
			
	if ( (+x >= 0 ) && (+y - 3 >= 0)) {
		let p30 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 3}"]`);
		arr.push(p30);
	}
			
	if ( (+x >= 0 ) && (+y - 4 >= 0)) {
		let p31 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 4}"]`);
		arr.push(p31);
	}
			
	if ( (+x >= 0 ) && (+y - 5 >= 0)) {
		let p32 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 5}"]`); 
		arr.push(p32);
	}
			
	if ( (+x >= 0 ) && (+y - 6 >= 0)) {
		let p33 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 6}"]`);
		arr.push(p33);
	}
			
	if ( (+x >= 0 ) && (+y - 7 >= 0)) {
		let p34 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y - 7}"]`);
		arr.push(p34);
	}
		//-//
			
	if ( (+x >= 0 ) && (+y + 1 <=7)) {
		let p35 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 1}"]`);   
		arr.push(p35);
	}
			
	if ( (+x >= 0 ) && (+y + 2 <=7)) {
		let p36 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 2}"]`);   
		arr.push(p36);
	}
			
	if ( (+x >= 0 ) && (+y + 3 <=7)) {
		let p37 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 3}"]`);  
		arr.push(p37);
	}
			
	if ( (+x >= 0 ) && (+y + 4 <=7)) {
		let p38 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 4}"]`);
		arr.push(p38);
	}

	if ( (+x >= 0 ) && (+y + 5 <=7)) {
		let p39 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 5}"]`);   
		arr.push(p39);  
	}
			
	if ( (+x >= 0 ) && (+y + 6 <=7)) {
		let p40 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 6}"]`);   
		arr.push(p40);
	}
			
	if ( (+x >= 0 ) && (+y + 7 == 7)) {
		let p41 = document.querySelector(`.cell-block[data-x="${+x}"][data-y="${+y + 7}"]`);   
		arr.push(p41);
	}
		//-// 
			
	if ( (+x - 1 >= 0 ) && (+y >= 0)) {
		let p42 = document.querySelector(`.cell-block[data-x="${+x - 1}"][data-y="${+y}"]`);     
		arr.push(p42);
	}
			
	if ( (+x - 2 >= 0 ) && (+y >= 0)) {
		let p43 = document.querySelector(`.cell-block[data-x="${+x - 2}"][data-y="${+y}"]`);  
		arr.push(p43);   
	}
	
	if ( (+x - 3 >= 0 ) && (+y >= 0)) {
		let p44 = document.querySelector(`.cell-block[data-x="${+x - 3}"][data-y="${+y}"]`);    
		arr.push(p44);
	}
			
	if ( (+x - 4 >= 0 ) && (+y >= 0)) {
		let p45 = document.querySelector(`.cell-block[data-x="${+x - 4}"][data-y="${+y}"]`);  
		arr.push(p45);  
	}
			
	if ( (+x - 5 >= 0 ) && (+y >= 0)) {
		let p46 = document.querySelector(`.cell-block[data-x="${+x - 5}"][data-y="${+y}"]`);    
		arr.push(p46);
	}
			
	if ( (+x - 6 >= 0 ) && (+y >= 0)) {
		let p47 = document.querySelector(`.cell-block[data-x="${+x - 6}"][data-y="${+y}"]`);  
		arr.push(p47); 
	}
			
	if ( (+x - 7 >= 0 ) && (+y >= 0)) {
		let p48 = document.querySelector(`.cell-block[data-x="${+x - 7}"][data-y="${+y}"]`);    
		arr.push(p48);
	}
		//-// 
	if ( (+x + 1 <= 7 ) && (+y >= 0)) {
		let p49 = document.querySelector(`.cell-block[data-x="${+x + 1}"][data-y="${+y}"]`);     
		arr.push(p49);
	}
			
	if ( (+x + 2 <= 7 ) && (+y >= 0)) {
		let p50 = document.querySelector(`.cell-block[data-x="${+x + 2}"][data-y="${+y}"]`);  
		arr.push(p50); 
	}
			
	if ( (+x + 3 <= 7 ) && (+y >= 0)) {
		let p51 = document.querySelector(`.cell-block[data-x="${+x + 3}"][data-y="${+y}"]`);    
		arr.push(p51);
	}
			
	if ( (+x + 4 <= 7 ) && (+y >= 0)) {
		let p52 = document.querySelector(`.cell-block[data-x="${+x + 4}"][data-y="${+y}"]`);
		arr.push(p52);   
	}
			
	if ( (+x + 5 <= 7 ) && (+y >= 0)) {
		let p53 = document.querySelector(`.cell-block[data-x="${+x + 5}"][data-y="${+y}"]`);     
		arr.push(p53);
	}
	
	if ( (+x + 6 <= 7 ) && (+y >= 0)) {
		let p54 = document.querySelector(`.cell-block[data-x="${+x + 6}"][data-y="${+y}"]`);     
		arr.push(p54);
	}
			
	if ( (+x + 7 == 7 ) && (+y >= 0)) {
		let p55 = document.querySelector(`.cell-block[data-x="${+x + 7}"][data-y="${+y}"]`);
		arr.push(p55);   
	}

	let step = arr[Math.floor(Math.random() * arr.length)];
			
	setTimeout(() => {
		step.innerHTML = '';
		step.append(arg)
	},2000)		
}


	


		






	













