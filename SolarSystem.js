var SolarSystem = (function() {
	var planets = [];
	var activeSpacecraft = [];
	var planetsLandedOn = 0;
	return {
		spacecraft_Date: new Date(),
		getPlanets: function() {
			return planets;
		},
		setPlanets: function(newPlanets) {
			planets.push(newPlanets);
		},
		getActiveSpacecraft: function() {
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(newActiveSpacecraft) {
			activeSpacecraft.push(newActiveSpacecraft);
		},
		getPlanetsLandedOn: function() {
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(numLandedOn) {
			planetsLandedOn.push(numLandedOn);
		}	
	}
})();