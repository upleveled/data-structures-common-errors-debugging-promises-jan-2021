// Booleans

const booleanA = true;
const booleanB = false;

const animal1 = 'pig';
const isAnAnimal = animal1 === 'pig';

// Numbers

const numberA = 1;
const numberB = 1.5;

// ...but you can only go up to a maximum of Number.MAX_SAFE_INTEGER (9007199254740991)
const numberC = Number.MAX_SAFE_INTEGER;

// In JavaScript, you may get some confusing results with floating-point (decimal) math
const floatA = 0.1;
const floatB = 0.2;
const resultFloat = floatA + floatB;
console.log(resultFloat); // 💥 0.30000000000000004
// If you want to do math with something with decimals, first of all, convert to whole numbers:
const nonFloatA = floatA * 10;
const nonFloatB = floatB * 10;
const resultNonFloat = (nonFloatA + nonFloatB) / 10; // 0.3

floatA.toString(); // '0.1'
// Better way:
String(floatA);

// Strings: text

const name = 'Karl';

const fullName = name + ' H';
const fullName2 = `${name} H`;

name.length; // 4
name.includes('k'); // true
name.includes('z'); // false

name.replace('Karl', 'Jose'); // Jose

const list = 'karl,jose,johanna';
list.split(','); // ['karl', 'jose', 'johanna']

list.match(/[aeiou]/g); // [ 'a', 'o', 'e', 'o', 'a', 'a' ]

// Arrays: "list", "sequence of values"

const arrA = ['karl', 'jose'];

// "Mutating" array methods - these modify the original array
// Try to avoid these if possible, because they will make your program more complex to debug
arrA.push('johanna'); // 💥 Returns a number
console.log(arrA); // ['karl', 'jose', 'johanna']

// Non-mutating Alternative: .concat()
arrA.concat('emilia'); // ['karl', 'jose', 'johanna', 'emilia']  ✅ original `arrA` not modified

// Exercise: Add a number to each element
// ['1. karl', '2. jose', '3. johanna']
// Mutating version:
arrA.forEach((item, i) => {
  arrA[i] = `${i + 1}. ${item}`;
});

// Non-mutating version
arrA.map((item, i) => {
  return `${i + 1}. ${item}`;
});

const arrNums = [1, 3, 7, 17, 20];

// Return all of the array numbers below 10
// [ 1, 3, 7 ]
arrNums.filter((item, i) => {
  // Return a boolean
  if (item < 10) {
    return true;
  }
  return false;
});

// Return a *single value* above 10
// 17
arrNums.find((item, i) => {
  if (item >= 10) {
    return true;
  }
  return false;
});

// This will come up in the Functional Programming Lecture
arrA.reduce(() => {});

// Arrays of Objects

// Objects

// Functions

// () => {}
