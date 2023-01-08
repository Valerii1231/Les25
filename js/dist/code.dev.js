"use strict";

//  1
var user = {};
Object.defineProperty(user, 'name', {
  value: 'Tom',
  writable: false
});
Object.defineProperty(user, 'age', {
  value: '28',
  writable: false
});
Object.defineProperty(user, 'id', {
  value: '2458',
  configurable: false,
  writable: false
}); //  2

var dataBase = {
  dbName: 'user',
  dmtype: 'meSQL'
};
var configurateDB = {
  token: '123',
  password: '567',
  user: 'admin'
};
Object.freeze(dataBase);
Object.seal(configurateDB); //  3

var salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000
};
Object.defineProperty(salaries, 'sum', {
  get: function get() {
    var sum = 0;

    for (salary in this) {
      sum += this[salary];
    }

    console.log(sum);
  },
  enumerable: false
});
salaries.sum;
Object.defineProperty(salaries, 'arrToOb', {
  set: function set(value) {
    var str = arrSalaries.join(' ');
    var arr = str.split(' ');
    salaries = {};

    for (var i = 0; i < arr.length - 1; i += 2) {
      salaries[arr[i]] = arr[i + 1];
    }

    console.log(salaries);
  }
});
var arrSalaries = ['frontend: 2000', 'backend: 1500', 'design: 1000', 'manager: 800'];
salaries.arrToOb = arrSalaries; //  4

user = {
  name: 'Mike',
  surname: 'Devis',
  age: 25,

  get userInfo() {
    console.log(user);
  }

};
user.userInfo;
user.login = 'md_25';
user.userInfo;