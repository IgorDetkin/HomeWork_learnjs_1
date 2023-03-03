function pow(x, n) {
        return x**n
}

let num1 = prompt('введите первое число', '');
let num2 = prompt('введите второе число', '');

if ( num2 < 1) {
    alert(`степень ${num2} должна быть больше нуля`);
}

else {
    alert(pow(num1, num2)); 
}
