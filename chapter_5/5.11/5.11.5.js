
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
};

alert(getLastDayOfMonth(2012, 8));
alert(getLastDayOfMonth(2019, 1));
alert(getLastDayOfMonth(2018, 1));