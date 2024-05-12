// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 1600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };


// function sumSalaries(department) {
//     if (Array.isArray(department)) { // case (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//     } else { // case (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//       }
//       return sum;
//     }
//   }



// function sumTo(num){
//     let sum = 0
//     for(let i = 0; i <= num; i++){
//         sum = sum + i
//     }
//     return sum
// }   

// // console.log(sumTo(1))
// // console.log(sumTo(2))
// // console.log(sumTo(3))
// // console.log(sumTo(100))


// function sumTo2(num){
//     if(num === 1){
//         return num
//     }else{
//         return num + sumTo2(num - 1)
//     }
// }

// // console.log(sumTo2(1))
// // console.log(sumTo2(2))
// // console.log(sumTo2(3))
// // console.log(sumTo2(100))


// function sumTo3(number) {
//     const result = [];
//     for (let i = 1; i <= number; i++) {
//       result.push(i);
//     }
//     return result.reduce((prev, current)=> prev + current, 0);
//   }

// // console.log(sumTo3(1))
// // console.log(sumTo3(2))
// // console.log(sumTo3(3))
// // console.log(sumTo3(100))

// function sumTo4(base) {
//     return base * (base + 1) / 2; 
// }

// // console.log(sumTo4(1))
// // console.log(sumTo4(2))
// // console.log(sumTo4(3))
// // console.log(sumTo4(100))

// // mine
// function factorial(num){
//      if (num === 1){
//         return num
//     }else{
//         return num * factorial(num - 1)
//     }
// }

// // Posted solutions
// function factorial2(base) {
//     return (base != 1) ? base * factorial(base - 1) : 1;
//   }
  
// //   alert( factorial(5) ); // 120
  
//   function factorial3(base) {
//     return base ? base * factorial(base - 1) : 1;
//   }
  
// //   alert( factorial(5) ); // 120

// // console.log(factorial(1))
// // console.log(factorial(2))
// // console.log(factorial(3))
// // console.log(factorial(4))
// // console.log(factorial(5))

// function fibFor(num){
//     if(num === 1 || num == 2){
//         return 1
//     }else{
//         let firstNum = 1
//         let secondNum = 1
//         for(i=2; i < num; i++){
//             let thirdNum = firstNum+secondNum 
//             firstNum = secondNum
//             secondNum = thirdNum
            
//         }
//         return secondNum
//     }
// }

// // console.log(fibFor(1))
// // console.log(fibFor(2))
// // console.log(fibFor(3))
// // console.log(fibFor(4))
// // console.log(fibFor(5))
// // console.log(fibFor(6))
// // console.log(fibFor(77))


// function fib (num){
//     if (num <= 1){
//         return num
//     }else{
//         return fib(num-1) + fib(num-2)
//     }
// }


// // console.log(fib(1))
// // console.log(fib(2))
// // console.log(fib(3))
// // console.log(fib(4))
// // console.log(fib(5))
// // console.log(fib(6))
// // console.log(fib(7))
// // console.log(fib(77))

// let cache = new Map();
// function fib(base) {
//     if (base < 3) return 1;
//     else {
//     if(!cache.has(base)) {
//     cache.set(base, fib(base - 1) + fib(base - 2));
//     }
//     return cache.get(base);
//     }
// }

// // console.log(fib(1000))


// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

// //   this was messy. and im not fully happy because i required assistance to get this. 
// // after looking at the solution i was over thinking it. 
// // my reasoning was that i was thinking about it without using the actual keys that all had the same names
// // function printList(list){
// //     for (const key in list) {
// //         if (list.hasOwnProperty(key)) {
// //             if (typeof list[key] === 'object') {
// //                 printList(list[key]);
// //         }else if(key === 'value'){
// //             console.log(list[key])
// //         }
// //     }
// //     }
// // }

// // listed solution
// function printList(list) {

//     if (list.next) {
//       printList(list.next); // do the same for the rest of the list
//     }

//     console.log(list.value); // output the current item
  

//   }
// // move the if statement to the top and it will run in reverse




// function printList2(list){
//     while(list){
//         console.log(list.value)
//         list = list.next
//     }
// }
    


// function printListInReverse(list){
//   console.time('loop2')
//     let newList = []
//     while(list){
//       newList.push(list.value);
//       list = list.next
//     }
//     for (let i = newList.length - 1; i >= 0; i--) {
//       console.log(newList[i]);
//     }
//   console.timeEnd('loop2')
// }

// // console.log(printListInReverse(list))/


// // printList(list)


// function sumRange(num){
//   if(num === 1){
//     return num
//   }else{
//     return num + sumRange(num-1)
//   }
// }

// // console.log(sumRange(10))

// function power(base,exponent){
//     if( exponent == 0){
//       return 1
//     }else{
//       return base * power(base, --exponent)
//     }
//   }


// // console.log(power(2,4))

// function fac(n){
//   if(n == 1){
//     return n
//   }else{ 
//     return n * fac(--n)
//   }
// }


// // console.log(fac(10))
// const areAll = [1,2,3,10] 


// function all(arr, target){
//   return arr.every(element => element < target)
// }

// // console.log(all(areAll, 10))

// var nestedObject = {
//   data: {
//       info: {
//           stuff: {
//               thing: {
//                   moreStuff: {
//                       magicNumber: 44,
//                       something: 'foo2'
//                   }
//               }
//           }
//       }
//   }
// }


// function productOfArray(arr){
//   let sum = 0
//     if (arr.length == 0 ){
//       return 1
//     }
//       return arr.shift() * productOfArray(arr)
// }


// // console.log(productOfArray(areAll))
// function contains(object, searchValue) {
//   if (typeof object !== "object" || object === null) {
//     return object === searchValue;
//   }

//   for (const value of Object.values(object)) {
//     if (contains(value, searchValue)) {
//       return true;
//     }
//   }
//   return false;
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

// // console.log(hasIt,doesntHaveIt)

// function totalIntegers(array){
// 	if(array.length === 0) return 0;

// 	let total = 0;
// 	let first = array.shift();

// 	if (Array.isArray(first)){
// 		total += totalIntegers(first); 
// 	} else if (Number.isInteger(first)) {
// 		total += 1;
// 	}

// 	return total + totalIntegers(array);
// }


// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7


// function sumRange(num){
//   if (num == 1){
//     return 1
//   }else{
//     return num + sumRange(num -1)
//   }
// }

// // console.log(sumRange(3))

// function power(base, pow){
//   if (pow <= 1){
//     return base
//   }else{
//     return base * power(base, --pow)
//   }
// }

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

// function calcFac(n){
//   if(n == 1){
//     return 1
//   }else{
//     return n * calcFac(n-1)
//   }
// }

// // console.log(calcFac(5))

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// // console.log(allAreLessThanSeven); // false

// function all(array, callback){
// 	var copy = copy || array.slice(); // shallow copies array
  
// 	if(copy.length === 0) return true;
  
// 	if(callback(copy[0])){
//     copy.shift(); // remove first element from array
// 		return all(copy, callback);
// 	} else {
//     return false;
// 	}
// }


// function productOfArray2 (arr){
//   var copy = copy || arr.slice(); // shallow copies array
//   if (copy.length == 0 ){
//     return 1
//   }else{
//     copy.shift()
//     return arr[0]* productOfArray2(copy)
//   }


// }

// // Look at this function and work it out

// function productOfArray(arr){
//   return arr.reduce((prev, current) => prev * current,1)
// }

// // return department.reduce((prev, current) => prev + current.salary, 0); // sum the array

// var six = productOfArray2([1,2,3]) // 6
// var sixty = productOfArray2([1,2,3,10]) // 60

// // console.log(six)
// // console.log(sixty)





// function sumRange(num){
//   if (num ==1){
//     return 1
//   }else{
//     return num + sumRange(num -1)
//   }
// }

// // console.log(sumRange(3))


// function power(base,pow){
//   if(pow <= 0){
//     return 1
//   }else{
//     return base * power(base, pow- 1 )
//   }
// }


// // console.log(power(2,4))

// function fact(num){
//   if (num ==1){
//     return 1
//   }else{
//     return num * fact(--num)
//   }
// }

// // console.log(fact(77))

// function all(array,callback){
//   let copy = copy || array.slice()

//   if(copy.length === 0) return true

//   if(callback(copy[0])){
//     copy.shift()
//     return all(copy, callback)
//   }else{
//     return false
//   }
// }

// function product(array){
//   if(array.length === 0 ) return 1
//     return array.shift() * product(array)
  
// }


// var nestedObject = {
//   data: {
//       info: {
//           stuff: {
//               thing: {
//                   moreStuff: {
//                       magicNumber: 44,
//                       something: 'foo2'
//                   }
//               }
//           }
//       }
//   }
// }


// function contains(obj, value){
//   for(let key in obj){
//     if (typeof obj[key] === 'object'){
//       return contains(obj[key], value)
//     }
//     if(obj[key] === value){
//       return true
//     }
//   }
//   return false
// }

// function sumSquares(obj){
//   if(obj.length === 0 ){
//     return 0
//   }
//   for(let key in obj){
//     if(typeof obj[key] === 'object'){
//       return (sumSquares(obj[key]))
//     }
//     if (typeof obj[key] === 'number'){
//       return obj[key] + sumSquares(obj[key])
//     }
// }
// }

// let l = [10,[[10],10],[10]] 

// console.log(sumSquares(l))




// // Question 1: Flat Array Sum
// // let array = [1, 2, 3,3,4,57,8,8,9,90,]
// // Expected Result: 185

// function sum(arr){
//   if(arr.length === 0) return 0
//   else{
//     return arr[0] + sum(arr.slice(1))
//   }
// }

// // console.log(sum(array))

// // Question 2: One Level Nested Array Sum
// // array = [1, [2], 3, [3,[3,[3]]]]
// // Expected Result: 15
// function nestSum(arr){
//   total = 0 
//   for(let i = 0; i < arr.length; i++){
    
//     if(typeof arr[i] === 'object'){
//       total += nestSum(arr[i])
//     }else{
//       total += arr[i]
//     }
//   }
//   return total
// }


// // console.log(nestSum(array))

// // Question 3: Array Identification
// // array =[1, [2, [3]], 4]
// // Use this array to practice identifying which items are arrays.

// function isArray(arr){
//   for(let i = 0; i< arr.length; i++){
//     if(Array.isArray( arr[i])){
//       console.log(arr[i])
//       isArray(arr[i])
//     }else{
//       console.log('Not an array: ', arr[i])
//     }
//   }
// }
// // isArray(array)



// // Question 4: Calculating Squares
// // const number = 4
// // Expected Result: 16 (since 4 squared is 16)
// function square(num){
//   return num * num
// }

// // console.log(square(number))

// // Question 5: Summing Squares of Flat Array
// // let array = [1, 2, 3]
// // Expected Result: 14 (since 1^2 + 2^2 + 3^2 equals 14)

// function arraySquare(arr){
//   let sum = 0
//   arr.forEach(element => {
//     sum += element * element
//   });
//   return sum

// }

// // console.log(arraySquare(array))

// // Question 6: Deep Nesting
// // let array =  [[[[[[[[[1]]]]]]]]]
// // Expected Result: [1] (after flattening)

// function nestSum2(arr){
//   total = 0 
//   for(let i = 0; i < arr.length; i++){
    
//     if(typeof arr[i] === 'object'){
//       total += nestSum(arr[i])
//     }else{
//       total += arr[i]
//     }
//   }
//   return total
// }

// // console.log(nestSum2(array))


// // Question 7: Recursive Sum of Squares with Multiple Levels
// // let array = [[1,2],3]
// // Expected Result: 14 (since 1^2 + 2^2 + 3^2 equals 14)

// // function fib(base) {
//   //     if (base3


// Question 1: Count the total number of elements in a multi-dimensional array.
function countElements(array) {
  // Your code here
}
const array1 = [1, [2, 3], [4, [5, 6]]];

// Question 2: Find the maximum integer in a multi-dimensional array.
function findMaxInteger(array) {
  // Your code here
}
const array2 = [[10, 20], [30, [40, 50]]];

// Question 3: Find the minimum integer in a multi-dimensional array.
function findMinInteger(array) {
  // Your code here
}
const array3 = [[5, 8], [3, [2, 1]]];

// Question 4: Calculate the sum of all integers in a multi-dimensional array.
function sumIntegers(array) {
  // Your code here
}
const array4 = [1, [2, 3], [4, [5, 6]]];

// Question 5: Calculate the average of all integers in a multi-dimensional array.
function averageIntegers(array) {
  // Your code here
}
const array5 = [1, [2, 3], [4, [5, 6]]];

// Question 6: Flatten a multi-dimensional array into a single-level array.
function flattenArray(array) {
  // Your code here
}
const array6 = [1, [2, 3], [4, [5, 6]]];

// Question 7: Count the total number of arrays contained within a multi-dimensional array.
function countSubArrays(array) {
  // Your code here
}
const array7 = [1, [2, 3], [4, [5, 6]]];

// Question 8: Determine if a multi-dimensional array contains a specific integer.
function containsInteger(array, integer) {
  // Your code here
}
const array8 = [1, [2, 3], [4, [5, 6]]];

// Question 9: Replace all instances of a specific integer in a multi-dimensional array with another integer.
function replaceInteger(array, oldInteger, newInteger) {
  // Your code here
}
const array9 = [1, [2, 3], [4, [5, 6]]];

// Question 10: Create a function to deep clone a multi-dimensional array.
function deepCloneArray(array) {
  // Your code here
}
const array10 = [1, [2, 3], [4, [5, 6]]];

// Final Question 11: Given a multi-dimensional integer array, return the total number of integers stored inside this array.
function totalIntegers(array) {
  // Your code here
  // Hint: You may want to use recursion to handle arrays of arbitrary depth.
}
const sampleArray = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];



// Question 1: Check if a specific key exists in the nested object.
function hasKey(obj, key) {
  // Your code here
}
const nestedObject1 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 2: Get the value of a specific key in the nested object.
function getValue(obj, key) {
  // Your code here
}
const nestedObject2 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 3: Check if a specific value exists anywhere in the nested object.
function containsValue(obj, value) {
  // Your code here
}
const nestedObject3 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 4: Find the path (keys) to a specific value in the nested object.
function findPathToValue(obj, value) {
  // Your code here
}
const nestedObject4 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 5: Modify a specific value in the nested object.
function modifyValue(obj, key, newValue) {
  // Your code here
}
const nestedObject5 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 6: Remove a specific key from the nested object.
function removeKey(obj, key) {
  // Your code here
}
const nestedObject6 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 7: Check if the nested object contains only numeric values.
function containsOnlyNumbers(obj) {
  // Your code here
}
const nestedObject7 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 8: Check if the nested object contains a specific key-value pair.
function containsKeyValuePair(obj, key, value) {
  // Your code here
}
const nestedObject8 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Question 9: Create a deep copy of the nested object.
function deepCloneObject(obj) {
  // Your code here
}
const nestedObject9 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// Final Question 10: Search for a value in the nested object.
function contains(obj, value) {
  // Your code here
}
const nestedObject10 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};


// Question 1: Check if all values in the array are positive numbers.
function allPositiveNumbers(array) {
  return array.every(element => element > 0)
}
const sampleArray1 = [1, 2, 9];

// Question 2: Check if all values in the array are even numbers.
function allEvenNumbers(array) {
  // Your code here
  for(let i=0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      return false
    }
  
  }
  return true
}
const sampleArray2 = [1, 2, 9];

// Question 3: Check if all values in the array are less than 7.
function allLessThanSeven(array) {
  // Your code here
  for(let i = 0; i< array.length; i++){
    if(array[i] >= 7){
      return false
    }
  }
  return true
}


const sampleArray3 = [1, 2, 9];

// Question 4: Check if all values in the array satisfy a custom condition.
function allCustomCondition(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}
const sampleArray4 = [1, 2, 9];

// Question 5: Check if all values in the array are strings.
function allStrings(array) {
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] !== 'string' ){
      return false
    }
  }
  return true

  // Your code here
}
const sampleArray5 = ['foo', 'bar', 'baz'];

// Question 6: Check if all values in the array are truthy.
function allTruthyValues(array) {
  // Your code here
}
const sampleArray6 = [true, 'hello', 42];

// Question 7: Check if all values in the array are arrays.
function allArrays(array) {
  // Your code here
}
const sampleArray7 = [[1, 2], [3, 4], [5, 6]];

// Question 8: Check if all values in the array are objects.
function allObjects(array) {
  // Your code here
}
const sampleArray8 = [{ name: 'Alice' }, { age: 30 }, { city: 'New York' }];

// Question 9: Check if all values in the array satisfy a custom callback condition.
function allCustomCallback(array, callback) {
  // Your code here
}
const sampleArray9 = [1, 2, 9];

// Final Question 10: Implement the 'all' function.
function all(array, callback) {
  // Your code here
  // Hint: You may want to use recursion or a loop to check each value.
}
const sampleArray10 = [1, 2, 9];


function fibonacci(num){
  if(num <= 1){
    return num
  }else{
    return fibonacci(num-1) + fibonacci(num -2)
  
  }
}


// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(7))
// console.log(fibonacci(8))
// console.log(fibonacci(9))

const unsortedArray = [8, 3, 1, 7, 0, 5, 4, 2, 9, 6,15,16,14,17,20,30,];


function mergeSort(array){
  let newList = []
  if(array.length == 1){
    newList.concat(array[0])
  }
  if(array[0] < array[1]){
    newList.concat(array[0])
  }else{
    newList.concat(array[1])
  }
}

// console.log(mergeSort(unsortedArray))




//take an array. 
//if the array has 1 item in it then return that item
// if there are more than on
//slice it in half
//look at the first number in the first half of the array
//compare it with the first number in the second half
// return the lower number of the two
// now compare the new first number in the array that was lower with the existing first number of the array that was higher

function checkLeft(array){
  if(array.length == 1){
    return array[0]
  }  
  return(array[0]<array[1]) ? array[0] : array[1]
}


function checkRight(array){
  if(array.length == 1){
    return array[0]
  }  
  return(array[array.length - 1]<array[array.length - 2]) ? array[array.length - 1] : array[array.length - 2]
}


// console.log(checkLeft(unsortedArray))
// console.log(checkRight(unsortedArray))


function testMerge(arr){
  if (arr.length == 1){
    return arr[0]
  }

}

const testArray = [1,2,3,4,5,6,7,8,9,10]
// Question 1: How do you declare a function in JavaScript to slice an array into halves?
function splitArray(array) {
  let middleIndex = Math.floor(array.length / 2)
  let firstHalf = array.slice(0, middleIndex)
  let secondHalf = array.slice(middleIndex)
  return [firstHalf,secondHalf]
}

// console.log(splitArray(testArray))

// Question 2: How can you determine the middle index of an array?
function findMiddleIndex(array) {
  return Math.floor(array.length / 2)
}

let sortedArray1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let sortedArray2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let sortedArray3 = [2, 5, 9, 12, 16, 23, 27, 30, 34, 41];
let sortedArray4 = [3, 7, 10, 14, 18, 21, 25, 29, 33, 38];


// Question 3: How do you use recursion to slice the array down to single elements?
function recursiveSplit(array) {
  if(array.length <= 1){
    return array
  }else{
    let middleIndex = Math.floor(array.length / 2)
    let leftHalf = recursiveSplit(array.slice(0, middleIndex))
    let rightHalf = recursiveSplit(array.slice(middleIndex))

    return[leftHalf,rightHalf]
  }
}

// console.log(recursiveSplit(testArray))

// Question 4: How do you merge two sorted arrays?
function mergeSortedArrays(leftHalf,rightHalf) {
  let mergedArray = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex < leftHalf.length && rightIndex < rightHalf.length){
    if(leftHalf[leftIndex] < rightHalf[rightIndex]){
      mergedArray.push(leftHalf[leftIndex])
      leftIndex++
    }else{
      mergedArray.push(rightHalf[rightIndex])
      rightIndex++
    }
  }
  while(leftIndex < leftHalf.length){
    mergedArray.push(leftHalf[leftIndex])
    leftIndex++
  }
  while(rightIndex < rightHalf.length){
    mergedArray.push(rightHalf[rightIndex])
    rightIndex++
  }

  return mergedArray
}

// console.log(mergeSortedArrays(sortedArray3,sortedArray4))

// Question 5: How do you handle the base case for the recursion in merge sort?
function mergeSortBaseCase(array) {
  if(array.length <= 1){
    return array
  }
}

// Question 6: How do you combine the merge and the recursive slice functions to sort an array?
function combineMergeAndSplit(array) {
  if(array.length <= 1){
    return array
  }else{
    let middleIndex = Math.floor(array.length / 2)
    let leftHalf = combineMergeAndSplit(array.slice(0, middleIndex))
    let rightHalf = combineMergeAndSplit(array.slice(middleIndex))
    let mergedArray = []

    let leftIndex = 0
    let rightIndex = 0
  
    while(leftIndex < leftHalf.length && rightIndex < rightHalf.length){
      if(leftHalf[leftIndex] < rightHalf[rightIndex]){
        mergedArray.push(leftHalf[leftIndex])
        leftIndex++
      }else{
        mergedArray.push(rightHalf[rightIndex])
        rightIndex++
      }
    }
    while(leftIndex < leftHalf.length){
      mergedArray.push(leftHalf[leftIndex])
      leftIndex++
    }
    while(rightIndex < rightHalf.length){
      mergedArray.push(rightHalf[rightIndex])
      rightIndex++
    }
  
    return mergedArray
   
  }
}


let randomArray = [10, 20, 77, 95, 100, 9, 69, 88, 64, 32, 27, 27, 48, 68, 82, 65, 53, 7, 28, 43, 85, 34, 96, 39, 21, 24, 51, 99, 14, 91, 62, 54, 6, 80, 60, 18, 58, 90, 41, 37, 55, 57, 89, 35, 81, 42, 86, 5, 29, 98, 56, 40, 71, 1, 17, 76, 63, 45, 26, 93, 83, 19, 16, 49, 38];
let anotherArray = [1,2,[4,1],7]

// console.log(combineMergeAndSplit(anotherArray))

// Question 8: How do you test the merge sort function with a small array?
function testMergeSortSmallArray(/* array parameter */) {
  // Your code here
}

// Question 9: How do you optimize the merge function to minimize space complexity?
function optimizeMerge(/* left array, right array */) {
  // Your code here
}

// Question 10: Can you write the complete merge sort function using the above components?
function completeMergeSort(/* array parameter */) {
  // Your code here
}






function theMergeSort(array){
  if (array.length <= 1){
    return array
  }else{
    let middle = Math.floor(array.length / 2)
    let leftHalf = theMergeSort(array.slice(0,middle))
    let rightHalf = theMergeSort(array.slice(middle))
    let mergedArray = []

    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftHalf.length && rightIndex < rightHalf.length){
      if (leftHalf[leftIndex] < rightHalf[rightIndex]){
        mergedArray.push(leftHalf[leftIndex])
        leftIndex++
      }else{
        mergedArray.push(rightHalf[rightIndex])
        rightIndex++
      }
    }
    while(leftIndex < leftHalf.length){
      mergedArray.push(leftHalf[leftIndex])
      leftIndex++
    }
    while(rightIndex < leftHalf.length){
      mergedArray.push(rightHalf[rightIndex])
      rightIndex++
    }
  
  
    return mergedArray
  
  }
}






function theMergestOfSorts(array){
  if(array.length == 1){
    return array
  }else{
    let mid = Math.floor(array.length / 2)
    let leftHalf = theMergestOfSorts(array.slice(0,mid))
    let rightHalf = theMergestOfSorts(array.slice(mid))
    let finalArray = []
    
    let leftIndex = 0
    let rightIndex = 0
    
    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length){
      if(leftHalf[leftIndex] < rightHalf[rightIndex]){
        finalArray.push(leftHalf[leftIndex])
        leftIndex++
      }else{
        finalArray.push(rightHalf[rightIndex])
        rightIndex++
      }
      
    }
    while(leftIndex < leftHalf.length){
      finalArray.push(leftHalf[leftIndex])
      leftIndex++
    }
    while(rightIndex < rightHalf.length){
      finalArray.push(rightHalf[rightIndex])
      rightIndex++
    }
    return finalArray
  }
}
// console.log(theMergestOfSorts(randomArray))

// Take array
// 	If the array is only one item then return the array
// 	Else:
// 	Find the index number for the middle of the array
// 	Find the left half of the array and use recursion to break it down again
// 	Find the right half of the array and use recursion to break it down again
// 	Create the new array that will be returned
	
// 	Create leftIndex
// 	Create rightIndex
	
// 	While the left index is lower that the left array length and the right index is lower than the right index
// 		If the indexed number of the  left half is lower than the indexed right number then add the left number to the new array
// 		And add 1 to the indexed position
// 		Otherwise add the right number to the new array
// 		And add 1 to the indexed position

// Once one of the halves has been reduced to 0 then cycle through the remaining half and add them to the array

// Return the array


function test(array){
  if (array.length == 1){
    return array
  }else{
    let median = Math.floor(array.length / 2)
    let leftHalf = test(array.slice(0,median))
    let rightHalf = test(array.slice(median))
    let sortedArray = []

    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftHalf.length && rightIndex < rightHalf.length){
      if(leftHalf[leftIndex] < rightHalf[rightIndex]){
        sortedArray.push(leftHalf[leftIndex])
        leftIndex++
      }else{
        sortedArray.push(rightHalf[rightIndex])
        rightIndex++
      }
    }
    while(leftIndex < leftHalf.length){
      sortedArray.push(leftHalf[leftIndex])
      leftIndex++
    }
    while(rightIndex < rightHalf.length){
      sortedArray.push(rightHalf[rightIndex])
      rightIndex++
    }
    return sortedArray
  }
}

// console.log(test(randomArray))

function fibby (num){
  if (num <= 1){
    return num
  }else{
    return fibby(num - 1 ) + fibby(num - 2)
  }
}

// console.log(fibby(77))




/* Returns either the index of the location in the array,
  // or -1 if the array did not contain the targetValue */
  // var doSearch = function(array, targetValue) {
  //   var min = 0;
  //   var max = array.length - 1;
  //   var guess;
  //     while(targetValue !== guess){
  //         guess = Math.floor((min + max) / 2 );
  //         if(guess > targetValue){
  //           doSearch()
  //         }
  //     }
      
      
  
  
  //   return -1;
  // };
  
  var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
      41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  
  // var result = doSearch(primes, 73);
  // println("Found prime at index " + result);
  
  // //Program.assertEqual(doSearch(primes, 73), 20);



function binarySearch(array, targetValue){
  let min = 0
  let max = array.length - 1
  let guess;
  while (max >= min){
    guess = Math.floor((max + min) / 2)
    if(targetValue === array[guess]){
      return `This array contains ${targetValue} at array[${guess}]`
    }else if (targetValue > array[guess]){
      min = guess + 1
    }else{
      max = guess - 1
    }

  }
  return `This array does not contain ${targetValue}`
}


let result = binarySearch(primes, 97)

console.log(result)


function mergeSortay(array){
  if(array.length === 1){
    return array
  }else{

    let middle = Math.floor(array.length / 2)
    let leftHalf = mergeSort(array.slice(0, middle))
    let rightHalf = mergeSort(array.slice(middle))
    
    let leftIndex = 0
    let rightIndex = 0
    let sortedArray = []
    
    
    while(leftIndex < leftHalf.length && rightIndex < rightHalf.length){
      if(leftHalf[leftIndex] > rightHalf[rightIndex]){
        sortedArray.push(rightHalf[rightIndex])
        rightIndex++
      }else{
        sortedArray.push(leftHalf[leftIndex])
        leftIndex++
      }
    }
    while(leftIndex < leftHalf.length){
      sortedArray.push(leftHalf[leftIndex])
      leftIndex++
    }
    while(rightIndex < rightHalf.length){
      sortedArray.push(rightHalf[rightIndex])
      rightIndex++
    }
    return sortedArray
  }
  }
  
  let sortedArrayresult = mergeSortay(randomArray)
  
  console.log(sortedArrayresult)

    // Insert at index
    insertAt(data, index) {
      //  If index is out of range
      if (index > 0 && index > this.size) {
        return;
      }
  
      // If first index
      if (index === 0) {
        this.insertFirst(data);
        return;
      }
  
      const node = new Node(data);
      let current, previous;
  
      // Set current to first
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }
  
      node.next = current;
      previous.next = node;
  
      this.size++;
    }