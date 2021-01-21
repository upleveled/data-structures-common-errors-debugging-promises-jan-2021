// Goal 1: two console.logs with 'very valuable data', 'more very valuable data'
// Goal 2: single console.log with 'very valuable data, more very valuable data'
// Goal 3: same thing, timeouts are not known. single console.log with 'very valuable data, more very valuable data'

let returnText;
let returnText2;

const longerTimeout = 600;
setTimeout(() => {
  // gets called third
  returnText = 'very valuable data';
  // Goal 1 Solution: console.log(returnText);

  // Goal 2 Solution: console.log(`${returnText}, ${returnText2}`);

  // Goal 3 Solution:
  done(returnText, returnText2);
}, longerTimeout);

const shorterTimeout = 500;
setTimeout(() => {
  // gets called second
  returnText2 = 'more very valuable data';
  // Goal 1 Solution:console.log(returnText2);

  // Goal 2 Solution: console.log(`${returnText}, ${returnText2}`);

  // Goal 3 Solution:
  done(returnText, returnText2);
}, shorterTimeout);

console.log('program started'); // gets called first

// setTimeout(() => {
//   console.log(returnText, returnText2);
// }, 2000);

function done(logOne, logTwo) {
  if (logOne && logTwo) {
    console.log(`${logOne}, ${logTwo}`);
  }
}
