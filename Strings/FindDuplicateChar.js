const str = 'geeksforgeeks';

function FindDuplicate(str) {
  let count = 0;
  let av =''
  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(FindDuplicate(str));
