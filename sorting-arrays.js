/* let kids = ["Natalie", "Brittany", "Zachary"];

kids.sort();

for (const kid of kids) {
  console.log(kid);
}

function compareAscendingNumber(a,b) {
    if(a<b) return -1;
    else if(a == b) return 0
    else return 1;
}


let numbers = [3, 27, 400, 1, 111, 5];
numbers.sort(compareAscendingNumber)
console.log(numbers) */

let products = [
  { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
  { prodId: 12, item: "Black Pens (12 pk)", price: 5.7 },
  { prodId: 22, item: "Stapler", price: 12.79 },
];

function compareAscending(a,b) {
    if (a.item < b.item) return -1
    else if(a.item == b.item) return 0
    else return 1
      
}

products.sort(compareAscending)

for (const product of products) {
    console.log(product.item)
    
}