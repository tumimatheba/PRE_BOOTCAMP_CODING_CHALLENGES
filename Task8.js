function timeConverter(value) {

    var number = value;
    var hours = (value /60);
    var roundedHour = Math.floor(hours);
    var minutes = (hours - roundedHour) *60;
    var roudedMinutes = Math.round(minutes);
    return roundedHour + " hour(s), " + roudedMinutes + " minutes.";
}
