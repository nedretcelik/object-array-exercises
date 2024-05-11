"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];



window.onload = function () {
    const teamList = document.getElementById("teamList");

    footbalTeamList();

    teamList.onchange = displayTeamNameAndCode;

}


function footbalTeamList() {
    const teamList = document.getElementById("teamList");

    for (const team of teams) {
    
    let teamOption = new Option(team);
    teamOption.textContent = team.name;
    teamOption.value = team.code;

    teamList.appendChild(teamOption);
        
    }
}

function displayTeamNameAndCode(parameter) {

    let teamNameText = document.getElementById("teamNameText");
    let teamCodeValue = document.getElementById("teamCodeValue");

    teamNameText.innerText = parameter.target.selectedOptions[0].text
    teamCodeValue.innerText = parameter.target.selectedOptions[0].value
    


}


