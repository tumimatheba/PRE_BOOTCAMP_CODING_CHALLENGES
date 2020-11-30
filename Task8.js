function timeConverter(value) {

    var number = value;
    var hours = (value /60);
    var roundedHour = Math.floor(hours);
    var minutes = (hours - roundedHour) *60;
    var roundedMinutes = Math.round(minutes);

    if (roundedHour < 2 && roundedMinutes < 2) {
      return roundedHour + " hour, " + roundedMinutes + " minute.";
    } else if (roundedHour < 2 && roundedMinutes > 2){
      return roundedHour + " hour, " + roundedMinutes + " minutes.";
    } else if (roundedHour > 2 && roundedMinutes > 2) {
      return roundedHour + " hours, " + roundedMinutes + " minutes.";
    } else if (roundedHour > 2 && roundedMinutes < 2) {
      return roundedHour + " hours, " + roundedMinutes + " minute.";
    }

    
}
