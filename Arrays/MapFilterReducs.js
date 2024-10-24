const data = [
  {
    id: 1,
    name: 'channa',
    city: 'hydrabad',
  },
  {
    id: 1,
    name: 'channa1',
    city: 'hydrabad',
  },
  {
    id: 2,
    name: 'channa2',
    city: 'hydrabad2',
  },
  {
    id: 3,
    name: 'chann3',
    city: 'hydrabad3',
  },
  {
    id: 4,
    name: 'channa4',
    city: 'hydrabad4',
  },
];

console.log('original', data);
let newArr = data.filter((curreVal, index, arr) => {
  if (curreVal.name === 'chann3') {
    return true;
  } else false;
});

console.log('FIlteredarr', newArr);

let mappedArr = data.map((curreVal, index, arr) => {
  return curreVal.name === 'chann3' && curreVal.name;
});
console.log('mappedArr', mappedArr);

data.forEach((obj) => {
    obj.name = obj.name.toUpperCase(); // Modifies the original objects
  });

console.log('forEach', data);
