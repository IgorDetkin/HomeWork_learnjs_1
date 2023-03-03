
function sumSalaries(values) {
    let sum = 0;
    for (let value of Object.values(values)) {
        sum += value;
    }
    return sum;
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) );