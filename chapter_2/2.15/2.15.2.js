function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

function checkAge(age) {
    let result = (age > 18) ? true : confirm('Родители разрешили?');
    return result;
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}