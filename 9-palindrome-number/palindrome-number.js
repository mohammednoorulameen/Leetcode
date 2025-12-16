/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let arr = String(x).split('')
      console.log(arr)
    for(i = 0; i < arr.length; i++){
        if(arr[i] !== arr[arr.length - i - 1]){
            return false
        }
        
    }
            return true
};