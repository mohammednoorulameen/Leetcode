/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
      let stack = [];
      let parts = path.split('/')
      console.log(parts)

      for(let value of parts){
        if(value === '' || value === '.'){
            continue;
        }else if(value === '..'){
            stack.pop()
        }else{
            stack.push(value)
        }
      }
    console.log("check this "+ stack)
      return '/'+ stack.join('/')
};