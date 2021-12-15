let sumSimilar = 0;
let sumDistinct = 0;

function sumOfArrays(arr1, arr2) {
  arr1.forEach(element1 => {
    if (arr2.includes(element1)) {
      sumSimilar += element1;
    }
    if (!arr2.includes(element1)) {
      sumDistinct += element1;
    }
  });

  arr2.forEach(element2 => {
    if (!arr1.includes(element2)) {
      sumDistinct += element2;
    }
  });
  return [sumSimilar, sumDistinct];
}

console.log(sumOfArrays([3, 1, 7, 9], [2, 4, 1, 9, 3]));
