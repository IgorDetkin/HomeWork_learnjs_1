
function shuffle(arr) {
    arr = arr.sort(() => Math.random() - 0.5)
}

let arr = [1, 2, 3];

shuffle(arr);

alert(arr);