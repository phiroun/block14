//Using array to find odd nums
function getOddNumbers(arr) {
  const oddNumbers = [];

  //Using loop to find each element in array
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }

  return oddNumbers;
}
const oddNumbersArray = getOddNumbers([2, 4, 6, 8, 11, 20, 15, 22]);

console.log(oddNumbersArray);