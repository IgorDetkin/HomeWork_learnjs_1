

function unique(arr) {
    let uniqueArr = [];

    for(let item of arr) {
        if( !uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }

    }
    return uniqueArr;


  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings)); 