// 모의고사
const solution = (arr) => {
  let scores = [0, 0, 0];
  arr.forEach((ans, i) => {
    if (ans === (i % 5) + 1) scores[0]++;
    if (ans === [2, 1, 2, 3, 2, 4, 2, 5][i % 8]) scores[1]++;
    if (ans === [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][i % 10]) scores[2]++;
  });
  return scores
    .map((score, i) => [score, i + 1])
    .filter(([score, i]) => score === Math.max(...scores))
    .map(([score, i]) => i);
};

console.log(solution([1, 2, 3, 4, 5])); // [ 1 ]
console.log(solution([1, 3, 2, 4, 2])); // [ 1, 2, 3 ]
