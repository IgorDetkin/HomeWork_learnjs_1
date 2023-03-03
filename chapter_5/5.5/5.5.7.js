
let vasya = { name: "Валя", age: 25 };
let petya = { name: "Петр", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names =  users.map((item) => {
    return item.name;
})

alert( names ); // Вася, Петя, Маша