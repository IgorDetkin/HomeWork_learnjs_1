
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value+= +prompt('прибавить?', '');
    }
};


let accumulator = new Accumulator(0); 

accumulator.read(); 
accumulator.read(); 
accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 