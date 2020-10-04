// 使用状态机处理字符串 不使用 正则表达式
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
  if(c === 'c') return foundC;
  else return start(c);
}
function foundC(c) {
  if(c === 'd') return foundD;
  else return start(c);
}
function foundD(c) {
  if(c === 'e') return foundE;
  else return start(c);
}
function foundE(c) {
  if(c === 'f') return end;
  else return start(c);
}

console.log('i abcdef groot'); // true