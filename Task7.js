function celToFahr(celsius) {                // from celcius to fahrenheit

    var celTemp = celsius;
    var farTemp = (celTemp * 9 / 5) + 32;
    return farTemp;
}

function farToCel(fahrenheit) {                 // from fahrenheit to celsius

    var farTemp = fahrenheit;
    var celTemp = (farTemp -32) * 5 / 9;
    return celTemp;
}
