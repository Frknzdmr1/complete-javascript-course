// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// calculate temperature amplitude

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem?
// - What is temp amplitude? => difference btw highest and lowest temp
// - how to compute max and min temp?
// what a sensor error and look like?

// 2) breaking up into sub-problems
// How to ignore errors
// find max and min in temp array
// subtract min from max (amplitide) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius')),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}C...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForecast(data1);
