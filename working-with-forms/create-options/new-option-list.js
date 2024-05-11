"use strict";

let states = ["Alabama", "Alaska", "Arizona"];
let abbrev = ["AL", "AK", "AZ" ];

window.onload = function () {
    addStateOption()

}

/* function addStateOption() {
    const stateList = document.getElementById("stateList");

    for (let i = 0; i < states.length; i++) {

        let theOption = document.createElement("option");

        theOption.textContent = states[i];
        theOption.value = abbrev[i];

        stateList.appendChild(theOption);
        
    }



} */


// New Option

function addStateOption() {
    const stateList = document.getElementById("stateList");
    for (let i = 0; i < states.length; i++) {
        
        let theOption  = new Option(states[i], abbrev[i])

        stateList.appendChild(theOption)

    }

}