/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    //  return num.replace(/0+$/, '');
     let i = num.length - 1;

    while (i >= 0 && num[i] === '0') {
        i--;
    }

    return num.slice(0, i + 1);
};