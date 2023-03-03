
function sumInput() {
    let arr = []

    while( true) {
        let value = prompt('введите', '');
        if (value === "" || value === null || !isFinite(value)) {
                break;
        }
        else arr.push(+value);
    }

    let sum = 0;
    for(let arrElement of arr) {
        sum = sum + arrElement
    }

    // return arr;
    return sum;
}

alert(sumInput());