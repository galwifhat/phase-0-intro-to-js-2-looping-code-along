// Code your solutions in this file
//for([initialization]; [condition]; [iteration]){[loopbody]}

/* for (let age = 30; age < 40; age++) {
  console.log(`I'am ${age} years old. Happy birthday to me!`);
} */

const gifts = ["teddy bear", "drone", "doll"];
/* 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}
console.log(wrapGifts(gifts)); */

function wrapGifts(gifts) {
  let i = 0; //the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; //the iteration moves INSIDE the body of the loop!
  }
  return gifts;
}

console.log(wrapGifts(gifts));

function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
    console.log(message);
    //debugger;
  }
  return messages;
}

console.log(writeCards(["John", "Jane", "Joe"], "surprise"));

/* for (let countDown = 10; countDown >= 0; countDown--) {
  console.log(countDown);
} */

//function count down

function countDown(n) {
  let i = n;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return i;
}
console.log(countDown(7));
