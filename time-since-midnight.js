/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1
result = 61000
*/

// 1 sec = 1000 milliseconds

function timeSinceMidight(h, m, s) {
  let hoursToMillisec = h * 60 * 60 * 1000;
  let minsToMillisec = m * 60 * 1000;
  let secToMillisec = s * 1000;

  let milliSeconds = hoursToMillisec + minsToMillisec + secToMillisec;

  return milliSeconds;
}

const h = 5;
const m = 10;
const s = 1;

const result = timeSinceMidight(h, m, s);
console.log(result);
