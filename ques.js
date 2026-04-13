const arr = [100, 200, 300, 400, 500, 600, 700];
// get the index sum of 1100 output: {4, 5}

const getSumIndex = (arr) => {
  let output;
  let first = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[first] + arr[i] === 1100) {
      output = { first, i };
      break;
    } else {
      first = first + 1;
    }
  }

  return output;
};

console.log(getSumIndex(arr));
