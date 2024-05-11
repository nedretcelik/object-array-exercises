let planets = [
  {
    name: "Mercury",
    type: "Terrestrial",
    diameter_km: 4879,
    moons: ["none"],
  },
  {
    name: "Venus",
    type: "Terrestrial",
    diameter_km: 12104,
    moons: ["none"],
  },
  {
    name: "Earth",
    type: "Terrestrial",
    diameter_km: 12742,
    moons: ["Moon"],
  },
  {
    name: "Mars",
    type: "Terrestrial",
    diameter_km: 6779,
    moons: ["Phobos", "Deimos"],
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    diameter_km: 139822,
    moons: ["Io", "Europa", "Ganymede", "Callisto"],
  },
  {
    name: "Saturn",
    type: "Gas Giant",
    diameter_km: 116464,
    moons: ["Titan", "Enceladus", "Mimas", "Tethys"],
  },
  {
    name: "Uranus",
    type: "Ice Giant",
    diameter_km: 50724,
    moons: ["Titania", "Oberon", "Umbriel", "Ariel", "Miranda"],
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    diameter_km: 49244,
    moons: ["Triton", "Proteus", "Nereid"],
  },
];

// CHALLENGE QUESTIONS

// 1. Planet with the highest number of moons:
// Which planet has the most moons?

function highestNumberOfMoons() {
  let maxMoon = [];
  let planetName = "";

  for (const planet of planets) {
    if (planet.moons.length > maxMoon.length) {
      maxMoon = planet.moons;
      planetName = planet.name;
    }
  }

  return planetName;
}

console.log("Planet with the highest number of moons: " + highestNumberOfMoons(planets));

// 2. Average diameter of gas giants:
// Calculate the average diameter of gas giant planets.
// formula : total of diameter_km of gas giant plantets / count of gas giant planets

function avgDiameterOfGasGiants() {
  let gasGiants = [];
  let totalDiameter = 0;
  for (const planet of planets) {
    if (planet.type == "Gas Giant") {
      gasGiants.push(planet.name);

      totalDiameter += planet.diameter_km;
    }
  }

  let avg = totalDiameter / gasGiants.length;
  return avg;
}

console.log("Average diameter of gas giants:   " + avgDiameterOfGasGiants(planets));

// 3. Terrestrial planets with no moons:
// Identify the terrestrial planets that do not have any moons.
function terrestrialWithNoMoons() {
  let noMoons = [];
  for (const planet of planets) {
    if (planet.type == "Terrestrial") {
      if (planet.moons.indexOf("none") !== -1) {
        noMoons.push(planet.name);
      }
    }
  }

  return noMoons;
}

console.log("Terrestrial planets with no moons:  " + terrestrialWithNoMoons(planets));



// 4. Smallest planet in diameter:


function smallestPlanetInDiameter() {
  let compareDiameter = Number.MAX_SAFE_INTEGER; 
  let smallestPlanet = "";
  for (const planet of planets) {

    if(planet.diameter_km < compareDiameter) {
      compareDiameter = planet.diameter_km;
      smallestPlanet = planet.name;
    }
    
  }

  return smallestPlanet;
}

console.log("Smallest planet in diameter:  " + smallestPlanetInDiameter(planets));

