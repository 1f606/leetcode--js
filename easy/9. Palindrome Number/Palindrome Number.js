//  解题思路一： for循环
function isPalindrome (x) {
  //  转成字符串类型
  x += ''
  let end = x.length - 1;

  for (let start = 0; start < x.length; start++) {
    if (x[start] !== x[end]) {
      return false
    }
    //  判断传入是奇数位的情况
    if (start === end) {
      return true
    }
    end--;
  }
  //  判断传入是偶数位的情况
  return true
};

//  解题思路二： 主要调用reverse，不过如果传入的数字很长就没有上面的好
function isPalindrome (x) {
  return x.toString().split('').reverse().join('') === x.toString() ? true : false
};