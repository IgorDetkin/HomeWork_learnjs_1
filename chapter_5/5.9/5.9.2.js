

function count(obj) {
    return Object.keys(obj).length; 
}

let user = {
    name: 'John',
    age: 30,
    size: 'xxx'
  };
  
  alert( count(user) );