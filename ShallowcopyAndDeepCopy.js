const mainObject = {
  nams: 'channaveer',
  lastName: 'patil',
  address: {
    city: 'bangaluru',
  },
};
console.log('beforeShalowcopy', mainObject);

// let Shallowcopy = Object.assign(mainObject);
// Shallowcopy.address.city = 'delhi';
// console.log('Shallowcopy.address.city', Shallowcopy);
// shallowcopy.address.city is changes in address and its changes in original object also

// for deepcopylet

let deepcopy = JSON.parse(JSON.stringify(mainObject));
// Why JSON.stringify() and JSON.parse()?
// JSON.stringify(): Converts the object into a JSON string representation.
// JSON.parse(): Parses the JSON string back into a new JavaScript object.
// By doing this, you break all references to the original object, so any changes made to the copied object do not affect the original object.

deepcopy.address.city = 'mysure';
console.log('deepcopylet.address.city', deepcopy);
