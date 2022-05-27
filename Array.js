//1. Write a JavaScript function to check whether an input is an array or not?
// *Solution
const isAnArray = (inp) => Array.isArray(inp);
console.log(isAnArray("w3resource")); //false
console.log(isAnArray([1, 2, 3, 4])); //true

// 2. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// *Solution
const return_First_N_Element = (elm, n) => {
  if (!elm) return `Element is required!`;
  if (!n) return `position is required!`;
  if (!Array.isArray(elm)) return `${elm} is not an array!`;
  if (elm.length < n) return `position should be greater than array length!`;
  return elm.slice(0, n);
};
console.log(return_First_N_Element([1, 2, 3], 2)); //[1,2]

// 3. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
const return_Last_N_Element = (elm, n) => {
  if (!elm) return `Element is required!`;
  if (!n) return `position is required!`;
  if (!Array.isArray(elm)) return `${elm} is not an array!`;
  if (elm.length < n)
    return `position should not be greater than array length!`;
  console.log(-n);
  return elm.slice(-n);
};
console.log(return_Last_N_Element([1, 2, 3], 2)); //[2,3]

// 4. Write a simple JavaScript program to join all elements of the following array into a string
//    Sample array : myColor = ["Red", "Green", "White", "Black"];output :"Red,Green,White,Black"
// *Solution
const arrayToString = (arr, symbol) => (symbol ? arr.join(symbol) : arr.join());
console.log(arrayToString(["Red", "Green", "White", "Black"])); //Red,Green,White,Black
console.log(arrayToString(["Red", "Green", "White", "Black"], "+")); //Red+Green+White+Black

// 5. . We have the following arrays
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

// *solution
const nth = (n) => {
  return (
    ["st", "nd", "rd"][(((((n < 0 ? -n : n) + 90) % 100) - 10) % 10) - 1] ||
    "th"
  );
};
const printColor = (arr) => {
  arr.forEach((elm, i) => {
    console.log(`${i + 1}${nth(i + 1)} choice is ${elm}`);
  });
};
printColor(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]);

// 6. Write a JavaScript program to find the leap years in a given range of years.
// *Solution
let range = "2022-2030";
const findLeapYear = (range) => {
  const theRangeArray = range.split("-");
  for (let i = Number(theRangeArray[0]); i < Number(theRangeArray[1]); i++) {
    if (i % 4 == 0) console.log(`${i} is a leap year`);
  }
};
findLeapYear(range);

// 7. Write a JavaScript program to find duplicate values in a JavaScript array
// *Solution
let simpleArr = [1, 2, 3, 4, 2, 3, 6, 7, 8, 4];
const dublicateValue = (arr) => {
  let theNum = [];
  let theDub = [];
  arr.forEach((elm) => {
    if (theNum.indexOf(elm) == -1) theNum.push(elm);
    else theDub.push(elm);
  });
  return theDub;
};
console.log(dublicateValue(simpleArr));

// 8.Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// [NaN, 0, 15, false, -22, '',undefined, 47, null]
// *Solution
const removeFromArray = (arr) => {
  let dubArr = [];
  arr.forEach((e) => {
    if (e) dubArr.push(e);
  });
  return dubArr;
};
let theArr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log(removeFromArray(theArr));

// 9.Write a JavaScript function to find the difference of two arrays
// *Solution
const diffOfArray = (arr1, arr2) => {
  let diff = [];
  arr1.forEach((d) => {
    if (arr2.indexOf(d) == -1) diff.push(d);
  });
  arr2.forEach((d) => {
    if (arr1.indexOf(d) == -1) diff.push(d);
  });
  return diff;
};
console.log(diffOfArray([1, 2, 3], [100, 2, 1, 10]));

// 10. Write a JavaScript program to sort the items of an array
// *Solution
let thearr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
let theSortedArray = thearr.sort((a, b) => a - b);
console.log(theSortedArray);

// 11.Write a JavaScript program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// *Solution
const mostFreq = (arr) => {
  let key;
  let value = 0;
  arr.forEach((d) => {
    let count = 0;
    arr.forEach((d2) => {
      if (d == d2) {
        count++;
      }
    });
    if (value < count) {
      value = count;
      key = d;
    }
  });
  return `${key} (${value}  times)`;
};
console.log(mostFreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

// 12. Write a JavaScript function to remove a specific element from an array
const remSpacificElem = (arr, rm) => {
  if (!rm) return `data to remove is required!`;
  if (!arr) return `array is required!`;
  let indx = arr.indexOf(rm);
  if (indx == -1) return `${rm} is not in array!`;
  arr.splice(indx, 1);
  return arr;
};
console.log(remSpacificElem([2, 5, 9, 6], 5)); //[2, 9, 6]

// 13.  Write a JavaScript function to find an array contains a specific element

const isContained = (arr, elm) => (arr.indexOf(elm) != -1 ? `true` : `false`);
console.log(isContained([2, 5, 9, 6], 5));

// 14. Write a JavaScript function to get nth largest element from an unsorted array

const nthLargestElem = (arr, nth) => {
  let theSortedArr = arr.sort((a, b) => a - b);
  return `the nth(${nth}) largest element in [${arr}] is ${theSortedArr[nth]}`;
};
console.log(nthLargestElem([43, 56, 23, 89, 88, 90, 99, 652], 4));

// 15. Write a JavaScript function to generate an array between two integers of 1 step length.
// *Solution
const genArray = (r1, r2) => {
  let from;
  let to;
  if (r1 > r2) {
    from = r2;
    to = r1;
  } else {
    from = r1;
    to = r2;
  }
  let arr = [];
  for (let i = from; i <= to; i++) arr.push(i);
  return arr;
};
console.log(genArray(-4, 7))
