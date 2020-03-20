let diceContainer;
let dices;
let dot;
let rolled;
let rollBtnText;
let currentNum = 6;
let isRunning = false;
let rollCounter = 0;
let outcome = [];

function roll(){
	if(!isRunning){
		InitDices();
		isRunning = true;
		play.innerHTML = "ROLL";
	}
	
	else if(rollCounter<3) {
		if(rollCounter==0){
		 dices.forEach((dice)=>{
  	 if(dice.classList.contains("keep"))
  	  dice.classList.remove("keep")
   });
	 }
	
		for(let i=0;i<dices.length;i++){
			currentNum = Math.floor(Math.random()*6)+1;
		
			if(dices[i].classList.contains("keep")) continue;
		
			updateDice(currentNum,dots[i]);
			
			//Displaying dice outcome as integer
			rolled[i].innerHTML = currentNum;
			
		}
		rollCounter++;
		rollBtnText.innerHTML = "ROLL("+rollCounter+")";
		rollBtnText.style.color = "black";
		
		if(rollCounter==3){
			let total = document.querySelector('.total');
			let sum = 0;
			for(let i=0;i<rolled.length;i++) sum += Number(rolled[i].innerHTML);	
			total.textContent = sum;
	
		dices.forEach((dice)=>{
 		 	if(dice.classList.contains("keep"))
  	 dice.classList.remove("keep");
    });
		}
 }
 
 else {
 	rollCounter = 0;
//Here contains the outcome of the dice
//and storing it to the game,
//Also must include reset function
	rollBtnText.innerHTML = "ROLL AGAIN";
 rollBtnText.style.color = "yellow";
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
	
	let str = "";
	for(let i=0;i<5;i++){
 		 str += '<div class="dice" onclick="keep('+i+')"></div>';
 	}
 	
 	diceContainer.innerHTML = str;
 		
	dices = document.querySelectorAll(".dice");
	
	str = "";
	for(let i=0;i<9;i++){
 			str += '<div class="dots"></div>';
 	}
	str += '<div class="number"><span class="rolled"></span></div>'
 for(let dice of dices){
 		dice.innerHTML = str;
 	}
 	
//Initializing all other variables
 	rollBtnText = document.querySelector('.roll-btn');
 rolled = document.querySelectorAll(".rolled");
 dots = [];

	for(let i=0;i<dices.length;i++){
	dots[i] = dices[i].querySelectorAll(".dots");
	}

	for(let dot of dots) updateDice(currentNum,dot);
}