//  1
let user = {};
Object.defineProperty(user, 'name', {
    value: 'Tom',
    writable: false,
});
Object.defineProperty(user, 'age', {
    value: '28',
    writable: false,
});
Object.defineProperty(user, 'id', {
    value: '2458',
    configurable: false,
    writable: false,
});


//  2
let dataBase = {
    dbName: 'user',
    dmtype: 'meSQL',
}
let configurateDB = {
    token: '123',
    password: '567',
    user: 'admin',
}
Object.freeze (dataBase);
Object.seal (configurateDB);


//  3
let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
}
Object.defineProperty(salaries, 'sum', {
    get() {
        let sum = 0;
        for (salary in this) {
            sum += this[salary];
        }
        console.log(sum);
    },
    enumerable: false
})
salaries.sum 

Object.defineProperty(salaries, 'arrToOb', {
 set (value) {     
    let str = arrSalaries.join(' ');
    let arr = str.split(' ');
    salaries = {};
    for (let i = 0; i < arr.length - 1; i += 2) {
        salaries[arr[i]] = arr[i + 1];   
    }
    console.log(salaries);
},
});
let arrSalaries = ['frontend: 2000', 'backend: 1500', 'design: 1000', 'manager: 800'];
salaries.arrToOb = arrSalaries;



//  4
user = {
    name: 'Mike',
    surname: 'Devis',
    age: 25,
    get userInfo() {
        console.log(user);
    }
}
user.userInfo;
user.login = 'md_25';
user.userInfo;