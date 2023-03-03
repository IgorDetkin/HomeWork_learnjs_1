let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];


function sortByAge(arr) {
    arr.sort((a , b) => a.age > b.age)
}

sortByAge(users);

alert(users[0].name); // Вася
alert(users[1].name); // Маша
alert(users[2].name); // Петя