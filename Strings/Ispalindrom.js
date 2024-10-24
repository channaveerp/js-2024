const s = 'amma';

function Ispalindrome(s) {
  let rev = '';
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  if (rev === s) {
    return 1;
  } else {
    return 0;
  }
}
console.log(Ispalindrome(s));
