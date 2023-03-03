function randomInteger(min, max) {
    let x = min + Math.random() * (max - min);
    return Math.round(x);
}

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));