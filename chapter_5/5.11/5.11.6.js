function getSecondsToday() {
    let now = new Date();
    console.log(now);
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    console.log(today);
    let diff = now - today;
    return Math.round(diff / 1000);
  }
  
  alert(getSecondsToday());