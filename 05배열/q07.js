// 방문길이
const solution = (dirs) => {
  const coors = new Array(11)
    .fill(0)
    .map(() => [...new Array(11).fill(0).map(() => [0, 0, 0, 0])]);
  const current = [5, 5];
  [...dirs].forEach((dir) => {
    if (dir === "U" && current[1] < 10) {
      coors[current[0]][current[1]][0] = 1;
      current[1]++;
    }
    if (dir === "D" && current[1] > 0) {
      coors[current[0]][current[1]][1] = 1;

      current[1]--;
    }
    if (dir === "L" && current[0] > 0) {
      coors[current[0]][current[1]][2] = 1;

      current[0]--;
    }
    if (dir === "R" && current[0] < 10) {
      coors[current[0]][current[1]][3] = 1;

      current[0]++;
    }
  });

  return coors.reduce(
    (acc, curr) =>
      acc + curr.reduce((a, c) => a + c.reduce((aa, ac) => aa + ac, 0), 0),
    0
  );
};

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
