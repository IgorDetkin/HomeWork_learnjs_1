
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 400
  };

  function topSalary(salaries) {
    let maxValue = 0;
    let maxName = '';

   
   
    for(let [name, salary] of Object.entries(salaries)) {
        if( maxValue < salary  ) {
            maxValue = salary;
            maxName = name;
        }
        // else maxName = null;
    }

    return maxName;

  }

  alert(topSalary(salaries))