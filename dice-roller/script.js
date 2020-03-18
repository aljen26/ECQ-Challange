
let dices = document.querySelectorAll(".dice");

/*-----Initializing Nodelist for dices----*/
Initialize();

let currentNum = 6;
let rolled = document.querySelectorAll(".rolled");
let dots = [];

for(let i=0;i<dices.length;i++){
	dots[i] = dices[i].querySelectorAll(".dots");
}

/*-----Initializing dices to six-----*/
for(let dot of dots) updateDice(currentNum,dot);

function roll(){
	for(let i=0;i<dots.length;i++){
		currentNum = Math.floor(Math.random()*6)+1;
		updateDice(currentNum,dots[i]);
		rolled[i].innerHTML = currentNum;
	}
}

function updateDice(n,dot){
	for(let i=0;i<dot.length;i++){
		dot[i].style.backgroundColor = "white";
	}
	
	if(n==1) placeDots(dot,4);
	else if(n==2) placeDots(dot,2,6);
	else if(n==3) placeDots(dot,2,4,6);
	else if(n==4) placeDots(dot,0,2,6,8);
	else if(n==5) placeDots(dot,0,2,4,6,8);
	else if(n==6) placeDots(dot,0,2,3,5,6,8);	
}

function placeDots(dot,...args){
	 
	let color;
	let curNum = args.length;
	if(curNum == 1) color = "#0D7FA0";
	else if(curNum == 2) color = "#0A872E";
	else if(curNum == 3) color = "#BF4545";
	else if(curNum == 4) color = "#6F6B6B";
	else if(curNum == 5) color = "#196B91";
	else if(curNum == 6) color = "#E1B93A";
	
	args.map((i)=>{
		dot[i].style.backgroundColor = color;
	});
}

function Initialize(){
 for(let dice of dices){
 	 let div;
 	 let span;
 		for(let i=0;i<9;i++){
 			div = document.createElement('div');
 			div.classList.add('dots');
 			dice.appendChild(div);
 		}
 		div = document.createElement('div');
 		div.classList.add('number');
 		span = document.createElement('span');
 		span.classList.add('rolled');
 		
 		div.appendChild(span);
 		dice.appendChild(div);
 	}
}