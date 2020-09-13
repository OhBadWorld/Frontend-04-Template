function kmp(source, pattern) {
  // 1.0 计算跳转表格table
  let table = new Array(pattern.length).fill(0);

  {
    // 1.1 查字符串中有没有自重复  abcdabcd
    let i= 1; // 表示 pattern 从 索引1 开始，比较它的前一个是否重复
    let j = 0; // 已重复的字数 用 j 来表示
    // 1.2 写一个循环，从 1 开始算pattern的 子重复的数字
    while(i < pattern.length) {
      // j i 的位置相等的时候 表示匹配上了, 有自重复
      if (pattern[i] === pattern[j]) {
        ++i, ++j; // 自增 i, j
        // table 中记录一下
        table[i] = j; // 表示table i 的位置，的重复数 就是 j
      } else {
        // 不匹配的情况下，
        if ( j > 0) {
          j = table[j];
        } else {
          ++i; // 往前走一格
        }
      }
    }
    // console.log(table);
  }
    
  // 2. 匹配 i 表示 source串的位置，j 为pattern串的位置
  {
    let i = 0, j = 0;
    while  (i < source.length) {   
      if (pattern[j] === source[i]) {
        ++i; ++j;
      } else {
        // 没匹配上， pattern j 位置 要回退 到 table的上一个格子
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }

      // 给自增之后的 j 做一个判断
      if (j === pattern.length) {
        return true;
      }
    }
    return false;
  }

}
// kmp('', 'aabaaac');
// console.log(kmp('hello', 'll'));
// console.log(kmp('helxlo', 'll'));
// console.log(kmp('abcdabcdabcex', 'abcdabce'));
console.log(kmp('aabaabaaacx', 'aabaaac'));
// console.log(kmp('abc', 'abc'));