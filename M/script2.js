let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
/* Write your code here */

let countries1 = document.querySelector('#countries');
let cities1 = document.querySelector('#cities');

for(let i = 0; i<=countries.length; i++) {
	options = document.createElement('option');
	options.textContent = countries[i];
	countries1.add(options);
}

countries1.addEventListener("change", fun)

function fun() {
	let remov = cities1.querySelectorAll("option");
	for(let i = 0; i < remov.length; i++) {
		remov[i].remove();
	}
	for(let j = 0; j < cities_by_country[this.value].length; j++) {
		let city_option = document.createElement("option");
		city_option.textContent = cities_by_country[this.value][j];
		cities1.add(city_option);
	}
}




