let n = 10;

nextPrime:
for( let i = 2; i <= n; i++) {
    for( let x = 2; x < i; x++ ) {
        if(x % 2 !== 0 ) {
            continue nextPrime;
        }
    }
    alert( i );
}