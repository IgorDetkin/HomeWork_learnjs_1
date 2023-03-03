
let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(date) {
    let day = date.getDay();

    day = ( day == 0) ? 7 : day;
    return day;

}

alert(getLocalDay(date)); // 2