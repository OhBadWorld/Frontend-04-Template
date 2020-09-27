function _parseInt (string, radix) {
  if (typeof string !== "string" && typeof string !== "number") return NaN;
  if (radix && (typeof radix !== "number" || /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/.test(radix) || radix > 36 || radix < 2)) return NaN;
  string = String(string)
  var rexp = (radix == 10) ? /(-?)([0]?)([0-9]+)/ : /(-?)([0]?[Xx]?)([0-9a-fA-F]+)/,
      a = string.match(rexp),
      sign = a[1],
      rawRadix = a[2],
      rawNum = a[3],
      result = 0,
      strArr = rawNum.split(''),
      len = strArr.length,
      numArr = [];
  if (a && !radix) {
      if ( rawRadix.toUpperCase() === "0X") {
          radix = 16;
      } else if (rawRadix === "0") {
          radix = 8;
      } else {
          radix = 10;
      }
  }
  for (var i = 0; i < len; i++){
      var num;
      var charCode = strArr[i].toUpperCase().charCodeAt(0);
      if(radix <=36 && radix >= 11) {
          if (charCode >= 65 && charCode <= 90) {
              num = charCode - 55;
          } else {
              num = charCode - 48;
          }
      }  else {
          num = charCode - 48;
      }
      if (num < radix) {
          numArr.push(num);
      } else {
          return NaN
      };
  }
  if(numArr.length > 0) {
    numArr.forEach(function(item, j){
        result += item * Math.pow(radix, numArr.length-j-1);
    })
  }
  if(sign === "-"){
    result = -result;
  }
  return result
}
        
function _toString(val) {
return val.toString();  
}