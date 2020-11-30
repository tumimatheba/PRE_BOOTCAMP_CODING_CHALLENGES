function commonCharacters(str1, str2) {
    var shortStr;                                  
    var longStr;
    var result = [];
    if (str1.length > str2.length ) {
      longStr = str1;
      shortStr = str2;
    } else {
      longStr = str2;
      shortStr = str1;
    }
    for (var i = 0; i < shortStr.length; i++) {
      if (longStr.indexOf(shortStr[i]) !== -1) {
        result.push(shortStr[i]);
      }
    }
return result; 
}
