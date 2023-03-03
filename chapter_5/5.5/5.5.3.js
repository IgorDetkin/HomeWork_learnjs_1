
function filterRangeInPlace(arr, a, b) {
    
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if( value < a || value > b ) {
            arr.splice(i, 1);
        }
    }
}


let arr = [5, 3, 8, 1, 7, 11, 44];

filterRangeInPlace(arr, 2, 14);

alert(arr); 