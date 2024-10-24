const name = {
  fname: 'channaveer',
  lName: 'patil',
};

let getFullName = function (greeting) {
  // console.log(this.fname + ' ' + this.lName + ' ' + greeting);
};
// console.log('hiiii');

const name2 = {
  fname: 'sangu',
  lName: 'biradar',
};

const obj1 = {
  name: 'channaveer',
  lname: 'patil',
  getFullName: function (hello ,hi) {
    console.log(this.name + hi+' ' + hello);
  },
};
const obj2 = {
  name: 'anil',
};
let binddd = obj1.getFullName.bind(obj2, ['hello' ,'hi']);
console.log('binddd', binddd);
binddd();

//
// getFullName.call(name2, 'hello');
// getFullName.apply(name2, ['hello']); // u need to pass argumnet in array of string

let bindFuc = getFullName.bind(name2, 'hello');
// console.log('bindFuc', bindFuc);
bindFuc();

// consclusion
// when to use call , apply
// 1. if you want to call  specified va function immediately,then you need to use thses 2
// when to use bindFuc
// 1. u want to call specified function later on ...
