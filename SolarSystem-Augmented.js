//1. G/S for closest stars to the sun
//2. G/S for age of solar system
//3. G/S for known dwarf planets

var SolarSystem = (function(newSolarSystem) {
	var closestStars = ["Alpha Centauri"];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = ["Pluto"];

	newSolarSystem.getClosestStars = function() {
		return closestStars;
	};
	newSolarSystem.setClosestStars = function(newClosestStars){
		closestStars.push(newClosestStars);
	};


	newSolarSystem.getAgeOfSolarSystem = function() {
		return ageOfSolarSystem;
	};
	newSolarSystem.setAgeOfSolarSystem = function(newAge){
		ageOfSolarSystem = newAge;
	};


	newSolarSystem.getDwarfPlanets = function() {
		return dwarfPlanets;
	};
	newSolarSystem.setDwarfPlanets = function(newDwarfPlanets){
		dwarfPlanets.push(newClosestStars);
	};

	newSolarSystem.greeting = "bite me";
	return newSolarSystem;

})(SolarSystem || {});