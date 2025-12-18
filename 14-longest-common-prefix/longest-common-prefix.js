/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    console.log(strs)
   let a = strs[0];
   let b = strs[strs.length - 1]
   let result = '';
   
    for(i=0; i<a.length; i++){
        
            if(a[i] == b[i]){
                result += a[i]
            }else{
                break;
            }
        
    }  
    return result
};