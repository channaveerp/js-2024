let obj1 = {
  name: 'channu',
  serName: 'patil',
  
};
let getSername= function (state, dis) {
    console.log(
      this.name + ' ' + this.serName + '' + this.state + '' + this.dis
    );
  },

let obj2 = {
  name: 'don',
  serName: 'don2',
};

// function borrowing
console.log(obj1.getSername.call(obj2, 'karantaka', 'kalaburgi'));
    