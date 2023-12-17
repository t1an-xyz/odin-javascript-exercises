function isAlphaNum(c) {
    const code = c.charCodeAt(0);
    return (code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123);
}

const palindromes = function (str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        while (!isAlphaNum(str.charAt(left)) && left < right) {
            left++;
        }
        while (!isAlphaNum(str.charAt(right)) && right > left) {
            right--;
        }
        if (str.charAt(left).toLowerCase() != str.charAt(right).toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
