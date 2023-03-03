
function filterRange(arr, a, b) {
    return arr.filter((item) => (a <= item && b >= item));
}

let arr1 = [5, 3, 8, 1];

let arr2 = [5, 7, 43, 22, 98, 100]

alert(filterRange(arr1, 2, 8));
alert(filterRange(arr2, 6, 99));