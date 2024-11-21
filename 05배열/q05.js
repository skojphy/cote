// 행렬의 곱셈
const solution = (arr1, arr2) => {
  const rows = arr1.length;
  const cols = arr2[0].length;

  const ans = new Array(rows)
    .fill(0)
    .map((el) => [...new Array(cols).fill(el)]);

  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      ans[i][j] = arr1[i]
        .map((el, k) => el * arr2[k][j])
        .reduce((curr, acc) => curr + acc, 0);
    }
  }
  return ans;
};

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [ [ 15, 15 ], [ 15, 15 ], [ 15, 15 ] ]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [ [ 22, 22, 11 ], [ 36, 28, 18 ], [ 29, 20, 14 ] ]
