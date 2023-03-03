
function readNumber() {
    let x;
    
    do {
        x = prompt('ВВедите число', '');
    }
    while( !isFinite(x))
    
    if (x === null || x === '') {
        return null;
    }

    else {
        return +x;
    }
}

alert(readNumber());