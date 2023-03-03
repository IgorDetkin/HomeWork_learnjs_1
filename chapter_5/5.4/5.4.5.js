// arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let fullSum = 0;
    let ourSum = 0;

    for(let arrElement of arr) {
        ourSum += arrElement;
        fullSum = Math.max(fullSum, ourSum);
        
        if( ourSum < 0) ourSum = 0;
    }
    return fullSum;
}

alert(getMaxSubSum([0, 0, 0]));

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-1, -2, -3]) ); // 0