const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let bulletPointsContainer = document.querySelector('.dots');
for (let nbrBullets = 0; nbrBullets < slides.length; nbrBullets++) {
    let bulletPoint = document.createElement("div");
    bulletPoint.classList.add("dot");
    bulletPoint.setAttribute("id", `slide${nbrBullets}`);
    bulletPointsContainer.appendChild(bulletPoint);
}

let bulletSelected = document.getElementById("slide0")
bulletSelected.classList.add("dot_selected")


let flecheDroite = document.querySelector('.arrow_right')
flecheDroite.addEventListener("click", () => {
	let listSlide = document.querySelectorAll('.dot')
	let dotSelected = document.querySelector('.dot_selected')
	let bannerImg = document.querySelector('.banner-img')
	let tagLine = document.querySelector('p')
	for (let i = 0; i < listSlide.length; i++){
		if(listSlide[i] === dotSelected) {
			listSlide[i].classList.remove("dot_selected")
			i++
			listSlide[i].classList.add("dot_selected")
			bannerImg.src = slides[i].image
			console.log(bannerImg)
			tagLine.innerHTML = slides[i].tagLine
		}
		
	}
	
})

let flecheGauche = document.querySelector('.arrow_left')
flecheGauche.addEventListener("click", () => {
	let listSlide = document.querySelectorAll('.dot')
	let dotSelected = document.querySelector('.dot_selected')
	let bannerImg = document.querySelector('.banner-img')
	let tagLine = document.querySelector('p')
	for (let i = 0; i < listSlide.length; i++){
		if (listSlide[i] === dotSelected) {
			listSlide[i].classList.remove("dot_selected")
			i--
			listSlide[i].classList.add("dot_selected")
			bannerImg.src = slides[i].image
			console.log(bannerImg)
			tagLine.innerHTML = slides[i].tagLine
			break
		}
	}
})

