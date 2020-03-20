let footer = document.querySelector('footer');
let members = document.getElementsByClassName("members");
let subPic = document.querySelector('.sub-pic');

//footer.style.height = `${footer.getBoundingClientRect().top}px`;
function move(str){
	
	if(str == "up"){
	footer.style.top = "0";
	for(let member of members)
		member.style.display = "block";
	
	subPic.classList.toggle("visible");
	footer.style.overflow = "scroll";
	document.querySelector('.fa-chevron-up').style.display ="none";
	document.querySelector('.fa-chevron-down').style.display = "inline-block";
	}
	
	else if(str == "down"){
		footer.style.top = "80vh";
	for(let member of members)
		member.style.display = "none";
	
	subPic.classList.toggle("visible");
	footer.style.overflow = "visible";
	document.querySelector('.fa-chevron-up').style.display ="inline-block";
	document.querySelector('.fa-chevron-down').style.display = "none";
	}
}