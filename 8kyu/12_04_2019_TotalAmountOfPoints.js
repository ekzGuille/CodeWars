// 12_04_2019
// https://www.codewars.com/kata/total-amount-of-points

function points(games) {
  // if x > y - 3 points
  // if x < y - 0 point
  // if x = y - 1 point
  let totalPoints = 0;
  games.forEach(points => {
    if (points[0] > points[2]) {
      totalPoints += 3;
    } else if (points[0] < points[2]) {
      totalPoints += 0;
    } else {
      totalPoints += 1;
    }
  });
  return totalPoints;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]), 30);
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]), 10);
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]), 0);
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]), 15);
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]), 12);