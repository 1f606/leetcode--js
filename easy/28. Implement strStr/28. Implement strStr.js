//  Solution One: using substring()

/**
  * @param {string} haystack
  * @param {string} needle
  * @return {number}
  */

let strStr = function (haystack, needle) {
  if (!needle)return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i+needle.length) === needle)return i;
    }
  }
  return -1;
};

//  Solution Two:Solution Two: using indexOf()

let strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
}



