let diceContainer;
let dices;
let currentNum;
let rolled;
let dot;
let isRunning = false;
let play;
let rollCounter = 0;
let outcome = 0;

function roll(){
	if(!isRunning){
		InitDices();
		isRunning = true;
		play.innerHTML = "ROLL";
	}
	
	else if(rollCounter<3) {
		for(let i=0;i<dices.length;i++){
			currentNum = Math.floor(Math.random()*6)+1;
		
			if(dices[i].classList.contains("keep")) continue;
		
			updateDice(currentNum,dots[i]);
			
			//Displaying dice outcome as integer
			rolled[i].innerHTML = currentNum;
			if(rollCounter==2)
			outcome+=currentNum;
		}
		rollCounter++;
		play.innerHTML = "ROLL("+rollCounter+")";
 }
 
 else {
 	rollCounter = 0;
//Here contains the outcome of the dice
//and storing it to the game,
//Also must include reset function
	let total = document.querySelector('.total');
	total.textContent = outcome;
	outcome=0;
	
  dices.forEach((dice)=>{
  	if(dice.classList.contains("keep"))
  	 dice.classList.remove("keep")
  });
  
  for(let dot of dots)
  	updateDice(0,dot);
 }
}

//Updating dice
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

//Coloring and placing dots
function placeDots(dot,...args){
	 
	let color;
	let curNum = args.length;
	if(curNum == 0) color = "white";
	if(curNum == 1) color = "#01A2D4";
	else if(curNum == 2) color = "#0A872E";
	else if(curNum == 3) color = "#BF4545";
	else if(curNum == 4) color = "#6F6B6B";
	else if(curNum == 5) color = "#0774BB";
	else if(curNum == 6) color = "#F69E0C";
	
	args.map((i)=>{
		dot[i].style.backgroundColor = color;
	});
}

//Handling to keep dices
function keep(i){
	 dices[i].classList.toggle("keep");
}


function InitDices(){	
//Initializing nodes and assinging to dice-container
	diceContainer = document.querySelector(".dice-container");
	
	for(let i=0;i<5;i++){
 			div = document.createElement('div');
 			div.classList.add('dice');
 			div.setAttribute("onclick","keep("+i+")");
 			diceContainer.appendChild(div);
 		}
 		
	dices = document.querySelectorAll(".dice");
	
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
 	
//Initializing all other variables
 	play = document.querySelector('.roll-btn');
 	currentNum = 6;
 rolled = document.querySelectorAll(".rolled");
 dots = [];

	for(let i=0;i<dices.length;i++){
	dots[i] = dices[i].querySelectorAll(".dots");
	}

	for(let dot of dots) updateDice(currentNum,dot);
}