let slides = document.getElementsByClassName("slides");
let currentSlide = 0;
let dotContainer = document.getElementById("dot-container");
displayDots();
let dots = dotContainer.querySelectorAll("span");

changeSlide(currentSlide);
function changeSlide(n){
	for(let slide of slides)
		slide.style.display = "none";
		
		currentSlide+=n;
		
		if(currentSlide>slides.length-1)
		 currentSlide = 0;
		else if(currentSlide<0)
		 currentSlide = slides.length-1;
		 
		slides[currentSlide].style.display = "block";
		
		for(let i=0;i<slides.length;i++){
			dots[i].style.backgroundColor = "#969696";
		}
		dots[currentSlide].style.backgroundColor = "#201616";
		
}

function displayDots(){
	for(let i=0;i<slides.length;i++){
		let span = document.createElement("span");
		dotContainer.appendChild(span);
	}
}










