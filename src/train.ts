// Y-TASK
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter(item => arr2.includes(item));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));  

// Z-TASK
function sumEvens(arr: number[]): number {
  let sum = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumEvens([1, 2, 3, 5]));       