let arr1 = ["sex", "rock", "drugs", "acid"];
function copySorted(arr) {
    return arr.slice(0).sort();
}

let arr2 = copySorted(arr1);

alert(arr1);
alert(arr2);