function areaFunction(a, b, c) {
    var S = 0.5 * (a + b + c); 
    var A = Math.sqrt(S * (S - a)*(S - b)*(S- c));

return A;
}

