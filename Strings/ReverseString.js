const s = ['h', 'e', 'l', 'l', 'o'];

const reverseStr = function (s) {
  let res = '';
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
};
// console.log(reverseStr(s));

// interview question
// if we have more than one word , reverse it and  in smae place

const str = ['hello', 'world'];

function reverS(str) {
  return str.map((word) => {
    let re = [];
    for (let i = word.length - 1; i >= 0; i--) {
      re.push(word[i]);
    }
    return re.join('');
  });
}
console.log('str', reverS(str));
