// 使用状态机处理字符串 不使用 正则表达式
// 处理 abababx 这样的字符串
// 每找打一个我们要的目标字符，状态机会切换状态
function find(string) {
  // 1. 定义state变量 表示 状态机当前的状态
  let state = start;
  for(let c of string) {
    state = state(c);
  }
  return state === end;
}

// 1.2 start 是一个状态函数
function start(c) {
  if(c === 'a') {
    return foundA;
  }
  else 
    return start;
}

function end(c) {
  return end;
}

function foundA(c) {
  if(c === 'b') return foundB;
  else return start(c);
}
function foundB(c) {
  if(c === 'a') return foundA2;
  else return start(c);
}
function foundA2(c) {
  if(c === 'b') return foundB2;
  else return start(c);
}
function foundB2(c) {
  if(c === 'a') return foundA3;
  else return start(c);
}
function foundA3(c) {
  if(c === 'b') return foundB3;
  else return start(c);
}
function foundB3(c) {
  return c === 'x' ? end : foundB2(c);
}

console.log('abcabx'); // true