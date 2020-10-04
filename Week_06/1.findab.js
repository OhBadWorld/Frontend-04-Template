// 使用有限状态机处理字符串 不使用 正则表达式
function find(string) {
  let foundA = false;
  for(let c of string) {
    if(c == 'a') foundA = true;
    else if(foundA && c == "b") return true;
    else foundA = false;
  }
  return false;
}

console.log('i accb groot'); // false
console.log('i ab groot'); // true