## Yahtzee

Created: March 19 2020
Finshed: On-going

### Keypoints

### JS
- used of Element.classList

´´´
dices.forEach((dice)=>{
  	if(dice.classList.contains("keep"))
  	 dice.classList.remove("keep")});

function keep(i){
	dices[i].classList.toggle("keep");}
´´´

- 'contains' returns a boolean value
- 'toggle' turn off and on the classname making it easier to keep and unkeep the dices
- 'remove' used remove because toggle wont work and I havent check yet

### Others Information
- I really love this dice game and that's why I created this first
- I will include game mechanics later