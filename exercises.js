/*
const a = 80;
const d = 11;
const h = 40;
console.log((h/5)<=(d-2));
console.log(h*a);
*/

/*
const start = 12000;
const percent = 7/100/12;
const price = 13500;
const month = 24;
const end = start*((1+percent)**month);
if (end>=price){
    console.log("Вася сможет купить дом и у него останется "+(end-price)+"$");
}else{
    console.log("Вася не сможет купить дом");
}
*/

/*
const ans = prompt("Сколько будет 7 + или - 15?")
if (ans === "22" || ans === "-8" || ans === "я не робот"){
    console.log("Успех")
} else {
    console.log("Вы робот!")
}
*/

/*
const balanceRub = 1001;
const balanceBon = 101;
const isBanned = false;
const alreadyBought = false;
const isAvailable = true;
console.log(`Пользователь может купить игру? ${((balanceRub>1000 || balanceBon>100)&&(!isBanned)&&(!alreadyBought)&&(isAvailable))?"Да":"Нет"}`);
*/

 /*
function toPower(num, power){
    const res = num ** power;
    return res;
}
console.log(toPower(2,3));

const p = (num,power) => num ** power;
console.log(p(2,3))
*/

/*
const AGE = 24;
const WORK = true;
const MONEY = 1900;

function sizeOfCredit(age,work){
    if (age>24){
        if (work == true){
            return 500;
        }
        return 100;
    }
    return 0;
}

function canBuy(age,work,money){
    if (money < 2000){
        const credit = sizeOfCredit(age,work);
        if ((money+credit)>=2000){
            return true;
        }
        return false;
    }
    return true;
}

console.log(canBuy(AGE,WORK,MONEY))
*/

/*
function addingTask(task){
    tasks.push(task);
}
function deleteTask(task){
    const indx = tasks.indexOf(task);
    if (indx === -1) {
        return;
    }
    tasks.splice(indx,1);
}
function vipTask(task){
    const indx = tasks.indexOf(task);
    if (indx === -1) {
        return;
    }
    tasks.splice(indx,1);
    tasks.unshift(task);
}

const tasks = ['Убрать','Пропылесосить','Почистить','Помыть','Покормить'];
console.log(tasks);
deleteTask('Почистить');
console.log(tasks);
vipTask('Покормить');
console.log(tasks);

//Без повторов
function addingTask(task){
    tasks.push(task);
}
function deleteTask(task){
    const indx = tasks.indexOf(task);
    if (indx === -1) {
        return;
    }
    return tasks.splice(indx,1);
}
function vipTask(task){
    const res = deleteTask(task);
    if (!res){
        return;
    }
    tasks.unshift(result[0]);
}

const tasks = ['Убрать','Пропылесосить','Почистить','Помыть','Покормить'];
console.log(tasks);
deleteTask('Почистить');
console.log(tasks);
vipTask('Покормить');
console.log(tasks);
*/

/*
function getUrlParts(url){
    const [protocol,_,host,...path] = url.split('/');
    switch(protocol){
        case 'https:':
        case 'http:':
            if (host.includes('.')){
                console.log(`Протокол: ${protocol.split(':')[0]}`);
                console.log(`Доменное имя: ${host}`);
                console.log(`Путь внутри сайта: ${path.join('/')}`);
            }else{
                return;
            }
        default:
            return;
    }
}
const url = 'https://purpleschool.ru/course/javascript';
getUrlParts(url);
*/

/*
const arr = ['!','JS','люблю','Я'];
const res = [];
for (let i = arr.length; i > 0 ; i--){
    res.push(arr[i-1]);
}
console.log(res.join(" "));
*/

/*
function balance(money,arr){
    let summa = money;
    for (let elem of arr){
        summa+=elem;
    }
    return summa;
}

function negativeBalance(money,arr){
    let summa = money;
    for (let elem of arr){
        summa+=elem;
        if (summa < 0){
            return false;
        }
    }
    return true;
}


function averageOperations(arr){
    let r1 = 0;
    let r2 = 0;
    let d1 = 0;
    let d2 = 0;
    for (let elem of arr){
        if (elem>0){
            r1+=elem;
            r2++;
        }else{
            d1+=elem;
            d2++;
        }
    }
    return [r1/r2,d1/d2];
}

const money = 100;
const operations = [1000, -700, 300, -500, 10000];
console.log(balance(money,operations));
console.log(negativeBalance(money,operations));
console.log(averageOperations(operations));
*/

/*
function power(pow){
    return function (num){
        return num**pow;
    }
}

console.log(power(5)(4));

const p = pow => num => num**pow;
console.log(p(5)(4));
*/

/*
const prices = [[100,200],[120,100],[200,350]];
const positive = prices.map(elem => elem[1]-elem[0]).filter(elem => elem>0);
console.log(positive);
*/

/*
const arr = [1, 4, 4, 10];
const sr = arr.reduce((prev, elem) => prev + elem,0)/(arr.length);
console.log(sr);
*/

/*
const arr = [2, 4, 4, 10, 20];

function some(arr,num){
    return (arr.findIndex(elem => elem===num)) != -1;
}

console.log(some(arr,10));
*/

/*
const userName = 'Вася aka Terminator Пупкин';
const res = userName.slice(0,userName.indexOf(' ')) + ' ' + userName.slice(userName.lastIndexOf(' ')+1,userName.length);
console.log(res);
*/

/*
// Верные номера 

const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 3235356';
const num5 = ' +7(910) 3235356 ';

// не верные номера

const num1Error = '89103235'
const num2Error = '+7d910d323-53-56'
const num3Error = '9+7103235356'
const num4Error = '89103q35356'

function isValid(num){
    const number = num.trim().replaceAll(" ","").replace('+7','8').replace('(','').replace(')','');
    console.log(number);
    return (!isNaN(Number(number))) && number.startsWith('8') && number.length === 11;
}

console.log(isValid(num5));
*/

/*
const card = '2342834503458353';
console.log(card.slice(12,16).padStart(16,'*'));
*/

/*
const users = [  
    { name: 'Вася', age: 30 },  
    { name: 'Катя', age: 18 },  
    { name: 'Аня', age: 40 },  
    { name: 'Петя', age: 25 }
];

console.log(users.sort((a,b) => a.age - b.age));
*/

/*
const users = [
    { 
        name: 'Вася', 
        surname: 'Пупкин', 
        age: 30, 
        skills: ['Разработка', 'DevOps'] 
    },
    { 
        name: 'Катя', 
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн'] 
    },
];

const users2 = users.map(elem=>{
    return{
        fullName: elem.name + ' ' + elem.surname,
        skillsNum: (elem.skills).length
    }
});

console.log(users2);
*/

/*
const wallet = {
    balance: 0,
    operations: [],
    increase: function(sum, reason) {
        this.balance += sum;
        this.operations.push({reason: reason, sum: sum});
        return true;
    },
    decrease: function(sum, reason){
        if (this.balance >= 0){
            this.balance -= sum;
            this.operations.push({reason: reason, sum: -sum});
            return true;
        }
        return false;
    },
    getOperationLength: function(){
        return this.operations.length;
    }
};

console.log(wallet.increase(150,'wertyuilbvg'));
console.log(wallet.decrease(160,'sgtfv'));
console.log(wallet.getOperationLength());
*/

/*
const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return existedGood = this.goods.find(g => g.id === id);
  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);
    if (existedGood){
        console.log('Уже есть на складе');
        return;
    }
    this.goods.push(good);
    return this.goods;
  },
  getWeightKg: function () {
    return (this.goods).reduce((acc,elem) =>  acc += elem.weight?.kg ? elem.weight.kg : 0,0)
  }
};

const car = {
  id: 1,
  weight: {
  kg: 1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
  kg: 2
  }
}

const paper = {
  id: 3,
  color: 'red'
}

console.log(warehouse.addGood(car));
console.log(warehouse.addGood(chair));
console.log(warehouse.addGood(paper));
console.log(warehouse.findGoodById(2));
console.log(warehouse.getWeightKg());
*/

/*
const company = {
  name: "ООО Агро",
  employees: [
    { 
        name: "Света", 
        getName: function(){
            return this.name;
        },
    }
  ],
  ceo: {
        name: "Вася",
        getName: function(){
            return this.name;
        },
  },
  getName: function(){
    return this.name;
  }
};

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(elem => elem.getName()));
*/

/*
function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = "1";
  }
}

const user = {
	password: 1423284284,
}

const rem = removePassword.bind(user,true);
rem();
console.log(user);
*/

/*
const userInfo = { 
  balance: 0, 
  operations: 0, 
  increase(sum) { 
    this.balance += sum; this.operations++;
  }, 
};

function user(){
	const userObject = userInfo;
	return function(){
		return userObject;
	}
}

const user1 = user();
user1().increase(100);
console.log(user1());
*/


