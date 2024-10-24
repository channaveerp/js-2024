const arr1 = [1, 4, 5, 2, 3];
const arr2 = [6, 10, 7, 9, 8];
// step-1 mergr two rr
// step-2 sort that merged arrays

function TwoUnsortedArrays(arr1, arr2) {
  let res = [];
  // step-1 merge arrays
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    res.push(arr2[j]);
  }
  console.log('eeeee', res);
  //   step2 sort here
  for (let k = 0; k < res.length; k++) {
    for (let l = 0; l < res.length - k - 1; l++) {
      if (res[l] > res[l + 1]) {
        // swap array
        let temp = res[l];
        res[l] = res[l + 1];
        res[l + 1] = temp;
      }
    }
  }
  return res;
}
console.log(TwoUnsortedArrays(arr1, arr2));
// tmc o(nsq)
// spc o(n)
