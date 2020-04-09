function showScoreBoard(){
	scoreboard = document.querySelector(".scoreboard");
	scoreboard.classList.toggle("hidden");
}

function updateScore(outcome){
	scores = document.querySelectorAll('.score');
	scoreboard.classList.toggle("hidden");
	
	for(let i=0;i<6;i++){
		if(scores[i].classList.contains('picked')) continue;
		scores[i].innerHTML = outcome.filter(x=>x==i+1)
 		.reduce((sum,x)=>sum+x,0);	
 }
	
	let outcomeSet = Array.from(new Set(outcome));
	let counter = 0;
	let kind = [];
	for(let i=0;i<outcomeSet.length;i++){
		counter = 0;
		for(let j=0;j<outcome.length;j++){
			if(outcomeSet[i]==outcome[j]) counter++;
		}
		kind.push(counter);
	}
	kind.sort();
		if(kind=="2,3"||kind=="1,1,3"||kind=="1,4")
			scores[6].innerHTML = outcome.reduce((a,b)=>a+b,0);
		if(kind=="1,4")
		 scores[7].innerHTML = outcome.reduce((a,b)=>a+b,0);
   if(kind=="2,3")
			scores[10].innerHTML = 25;
	  scores[11].innerHTML = outcome.reduce((a,b)=>a+b,0);
	  if(kind==5)
	   scores[12].innerHTML = 50;
	   
	/*---------------------------*/
	let straight = 0;
	outcomeSet.sort();
	
	for(let i=0;i<outcomeSet.length-1;i++){
			if(outcomeSet[i+1]-outcomeSet[i]==1)
			 straight++;
	}
	
	if(straight==3||straight==4)
	 scores[8].innerHTML = 30;
	if(straight==4)
	 scores[9].innerHTML = 40;
	
	
	rollBtnText.removeEventListener('click',roll);
	for(let score of scores) score.addEventListener('click', onPick);
	let picked = document.querySelectorAll('.picked');
	for(let pick of picked) pick.removeEventListener('click', onPick);
}

function onPick(e){
		e.target.classList.add("picked");
		if(e.target.innerText == "") e.target.innerHTML = 0;
		
		for(let score of scores) score.removeEventListener('click', onPick);
		
		for(let i=0;i<13;i++){
		if(scores[i].classList.contains('picked')) continue;
		scores[i].innerHTML = "";
		}
		
		scoreboard.classList.toggle("hidden");
		rollBtnText.addEventListener('click',roll);
		
		
		checkScoreStatus();
}

function checkScoreStatus(){
	result = document.querySelector('.result');
	let picked = document.querySelectorAll('.picked');
	
}