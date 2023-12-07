/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let newNums = numbers.sort((a, b) => b - a)
    if(numbers.length == 0){
    
    }else{
        return newNums[0]
    }
}

// console.log(findLargestElement([3, 7, 2, 9, 1]))
module.exports = findLargestElement;
