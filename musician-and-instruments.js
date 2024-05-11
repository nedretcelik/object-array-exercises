let musicians = [
  {
    id: 101,
    name: "Alice Adams",
    instruments: ["piano"],
  },
  {
    id: 205,
    name: "Bob Barker",
    instruments: ["piano", "guitar", "drums"],
  },
  {
    id: 310,
    name: "Carol Clark",
    instruments: ["flute", "trumpet", "saxophone"],
  },
  {
    id: 409,
    name: "David Davis",
    instruments: ["bass", "clarinet"],
  },
  {
    id: 502,
    name: "Eve Evans",
    instruments: ["harp", "cello", "trombone"],
  },
];

// Who plays the saxophone?

function whoPlaySaxophone() {
  let findMusician = [];
  for (const musician of musicians) {
    for (instrument of musician.instruments) {
      if (instrument == "saxophone") {
        findMusician.push(musician.name);
      }
    }
  }
  return findMusician;
}

console.log("The person who play the saxophone is: " + whoPlaySaxophone(musicians));

// HARDER: Which musicians play more than one instrument?
function musiciansPlayMoreIntrument() {
  let findMusician = [];
  for (const musician of musicians) {
    if (musician.instruments.length > 1) {
      findMusician.push(musician.name);
    }
  }

  return findMusician;
}

console.log("The person who play more than one instrument is: " + musiciansPlayMoreIntrument(musicians));

// CHALLENGE: Who plays both the piano and the drums?

function whoPlaysPianoAndDrums() {
  let findPerson = [];
  for (const musician of musicians) {
    if (musician.instruments.indexOf("piano") !== -1 && musician.instruments.indexOf("drums") !== -1) {
      findPerson.push(musician.name);
    }
  }

  return findPerson;
}

console.log("The person who play both the piano and the drums: " + whoPlaysPianoAndDrums(musicians));


