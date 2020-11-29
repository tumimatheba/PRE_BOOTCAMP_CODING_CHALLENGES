function strVowels(str) {
    var vowels = "AEIOUaeiou";
    var result = [];

    for (var i = 0; i < str.length; i++) {
       if (vowels.indexOf(str[i]) !== -1) {
        result.push(str[i]);
       }
    }
    return result;
}

