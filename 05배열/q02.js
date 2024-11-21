// 배열 제어하기
const solution = (arr) => [...new Set(arr)].sort((a, b) => b - a);

console.log(solution([4, 2, 2, 1, 3, 4])); // [ 4, 3, 2, 1 ]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [ 5, 4, 3, 2, 1 ]
