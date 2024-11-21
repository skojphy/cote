// 실패율
const solution = (n, stages) => {
  const sortedStages = stages.sort((a, b) => a - b);
  const users = new Array(n + 1).fill(0);
  const ans = new Array(n).fill(0);

  sortedStages.forEach((el) => {
    users[el - 1]++;
  });

  let total = 0;

  for (i = n; i >= 0; i--) {
    total += users[i];
    if (i < n) ans[i] = users[i] / total;
  }
  return ans
    .map((el, i) => [i + 1, el])
    .sort((a, b) => b[1] - a[1])
    .map(([a, b]) => a);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [ 3, 4, 2, 1, 5 ]
console.log(solution(4, [4, 4, 4, 4, 4])); // [ 4, 1, 2, 3 ]
