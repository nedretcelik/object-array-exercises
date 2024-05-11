let scores1 = [80, 83, 86, 92, 100, 100];

function sortAscending(a, b) {
  if (a < b) return -1;
  else if (a == b) return 0;
  else return 1;
}


scores1.sort(sortAscending);
console.log(scores1.sort(sortAscending))



let totalOfScore = 0;
function getAverage(scores) {

    for (const score of scores) {
        totalOfScore += score;
    }

    let avg = totalOfScore / scores.length
    return avg;
}

let avg1 = getAverage(scores1);
console.log(avg1)

function getMedian(scores) {
    let medianIndex = 0;
    let median;
    if(scores.length % 2 !== 0) {
         medianIndex = Math.floor(scores.length / 2)
         median = scores[medianIndex]
        
    } else {
        medianIndex = Math.floor(scores.length / 2)
        median = (scores[medianIndex] + scores[medianIndex-1]) / 2
    }
    
    return median;
}

let median1 = getMedian(scores1)
console.log(median1)





