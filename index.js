console.log("I'm ready!");
const hacker1 = "Tom";
console.log("The drivers name is " + '' + hacker1);
const hacker2 = "Kevin";
console.log("The navigator's name is " + '' + hacker2);
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has XX characters');
} else {
  if (hacker1.lenght < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has XX characters');
  } else {
    console.log('Wow, you both have equally long names, XX characters!');
  }
}

let driverName = "John";
let driverNameCaps = "";
for (let i=0; i< driverName.length; i++) {
  if (i> 0) {
    driverNameCaps += "";
  }
  driverNameCaps += driverName[i].toUpperCase();
}
console.log(driverNameCaps);
let navigatorName = "Johny";
let navigatorNameReversed = "";
for (let i = navigatorName.length - 1; i >= 0; i--) {
  navigatorNameReversed += navigatorName[i];
}
console.log(navigatorNameReversed);


let comparisonResult = driverName.localeCompare(navigatorName);
if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0 ) { console.log("Yo, the navigator goes first, definitely.");
                                  } else {
  console.log("What?! You both have the same name?");
                                  }

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let count = 0;
  for (let i = 0; i< words.length; i++){
    if(words[i])
    count++;
  }
  return count;
}