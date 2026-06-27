// Y-TASK
function findIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(item => arr2.includes(item));
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));  


// (yarn train to run)
