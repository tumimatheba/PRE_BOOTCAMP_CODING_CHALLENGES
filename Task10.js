function strVowels(str) {
    var vowels = "AEIOUaeiou";
    var vowelResult = [];

    for (var i = 0; i < str.length; i++) {
       if (vowels.indexOf(str[i]) !== -1) {
       vowelResult.push(str[i]);
       }
    }
    return vowelResult;
}

