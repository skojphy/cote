// 두 개 뽑아서 더하기
const solution = (numbers) => {
  const len = numbers.length;
  const arr = [];
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(arr)].sort((a, b) => a - b);
};

console.log(solution([2, 1, 3, 4, 1])); // [ 2, 3, 4, 5, 6, 7 ]
console.log(solution([5, 0, 2, 7])); // [ 2, 5, 7, 9, 12 ]
