
let arr = ['Джаз', 'Блюз'];
arr.push('Рок-н-Ролл');
alert(arr);

arr[Math.floor((arr.length - 1) / 2)] = 'Классика';
alert(arr);

alert( arr.shift() );

alert(arr);

arr.unshift('Рэп', 'Регги');

alert(arr);

