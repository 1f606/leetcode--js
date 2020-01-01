//  Solution one: use JS api toLowerCase()

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.toLowerCase()  
  };

//  Solution two: for loop solution

/**
 * @param { String } str
 * @return { String }
 */
let toLowerCase = function(str) {
    let res = ''
    for (let i = 0; i< str.length; i++) {
        let code = str.charCodeAt(i)
        if (code <= 90 && code >= 65) {
            res += String.fromCharCode(code + 32)
        } else {
            res += str[i]
        }
    }
    return res
}