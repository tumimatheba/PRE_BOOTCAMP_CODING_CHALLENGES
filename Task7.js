function celsiusToFahrenheit(celsius) {              

    var celsiusTemp = celsius;
    var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
    return fahrenheitTemp;
}

function farenheitToCelcius(fahrenheit) {                

    var fahrenheitTemp = fahrenheit;
    var celsiusTemp = (fahrenheitTemp -32) * 5 / 9;
    return celsiusTemp;
}
